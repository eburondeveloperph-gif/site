const fs = require('fs');
const https = require('https');

https.get('https://raw.githubusercontent.com/awesome-selfhosted/awesome-selfhosted/master/README.md', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const lines = data.split('\n');
    const analyticsIndex = lines.findIndex(l => l.includes('### Analytics'));
    console.log(lines.slice(analyticsIndex, analyticsIndex + 20).join('\n'));
  });
});
