const fs = require('fs');
const https = require('https');

https.get('https://raw.githubusercontent.com/awesome-selfhosted/awesome-selfhosted/master/README.md', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const lines = data.split('\n');
    const categories = [];
    let currentCategory = null;
    
    let inSoftwareSection = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (line === '## Software') {
        inSoftwareSection = true;
        continue;
      }
      
      if (line === '## List of Licenses') {
        inSoftwareSection = false;
        break;
      }
      
      if (!inSoftwareSection) continue;

      if (line.startsWith('### ')) {
        const name = line.substring(4).trim();
        const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        currentCategory = { id, name, items: [] };
        categories.push(currentCategory);
        continue;
      }

      if (currentCategory && line.startsWith('- [')) {
        // Extract Name and URL
        const nameMatch = line.match(/^- \[([^\]]+)\]\(([^)]+)\)/);
        if (!nameMatch) continue;
        
        const name = nameMatch[1];
        const url = nameMatch[2];
        
        let rest = line.substring(nameMatch[0].length).trim();
        
        // Remove `⚠` or `©` if present
        rest = rest.replace(/^`[^`]+`\s*/, '');
        
        // Remove leading ' - ' or '-'
        if (rest.startsWith('- ')) rest = rest.substring(2).trim();
        else if (rest.startsWith('-')) rest = rest.substring(1).trim();
        
        // Extract tags (License and Language at the end)
        const tagsMatch = rest.match(/(`[^`]+`\s*)+$/);
        let license = 'Unknown';
        let language = '';
        let tags = [];
        
        if (tagsMatch) {
          const tagsStr = tagsMatch[0];
          rest = rest.substring(0, rest.length - tagsStr.length).trim();
          
          const backtickMatches = [...tagsStr.matchAll(/`([^`]+)`/g)].map(m => m[1]);
          if (backtickMatches.length >= 1) {
            license = backtickMatches[0];
          }
          if (backtickMatches.length >= 2) {
            language = backtickMatches[1];
          }
        }
        
        // Extract Source Code
        let sourceUrl = '';
        const sourceMatch = rest.match(/\(\[Source Code\]\(([^)]+)\)\)/);
        if (sourceMatch) {
          sourceUrl = sourceMatch[1];
          rest = rest.replace(sourceMatch[0], '').trim();
        } else {
          const multiLinkMatch = rest.match(/\(([^)]+\[Source Code\]\([^)]+\)[^)]*)\)/);
          if (multiLinkMatch) {
            const inner = multiLinkMatch[1];
            const innerSourceMatch = inner.match(/\[Source Code\]\(([^)]+)\)/);
            if (innerSourceMatch) {
              sourceUrl = innerSourceMatch[1];
            }
            rest = rest.replace(multiLinkMatch[0], '').trim();
          } else {
            // Check for just Source code without Demo
            const anyLinkMatch = rest.match(/\(([^)]+)\)/g);
            if (anyLinkMatch) {
                // remove all trailing link groups like ([Demo](...), [Source Code](...))
                const lastLinkGroup = anyLinkMatch[anyLinkMatch.length - 1];
                if (lastLinkGroup.includes('Source Code')) {
                    const innerSourceMatch = lastLinkGroup.match(/\[Source Code\]\(([^)]+)\)/);
                    if (innerSourceMatch) {
                        sourceUrl = innerSourceMatch[1];
                    }
                    rest = rest.replace(lastLinkGroup, '').trim();
                }
            }
          }
        }
        
        // Clean up description
        let description = rest;
        description = description.replace(/\.$/, '').trim();
        
        if (language) {
          tags.push(language.toLowerCase().split('/')[0]);
        }
        
        currentCategory.items.push({
          name,
          description,
          url,
          sourceUrl,
          license,
          language,
          tags
        });
      }
    }
    
    const validCategories = categories.filter(c => c.items.length > 0);
    
    let tsContent = `export type Software = {
  name: string;
  description: string;
  url: string;
  sourceUrl?: string;
  license: string;
  language?: string;
  tags: string[];
};

export type Category = {
  id: string;
  name: string;
  items: Software[];
};

export const categories: Category[] = ${JSON.stringify(validCategories, null, 2)};
`;

    fs.writeFileSync('src/data.ts', tsContent);
    console.log("Successfully parsed " + validCategories.length + " categories and wrote to src/data.ts");
  });
}).on('error', (e) => {
  console.error(e);
});
