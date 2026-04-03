import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Github, 
  ExternalLink, 
  Code2, 
  Menu, 
  X, 
  Moon, 
  Sun,
  Server,
  Filter,
  ChevronRight,
  ChevronUp
} from 'lucide-react';
import { categories, Software, Category } from './data';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [showBackToTop, setShowBackToTop] = useState(false);

  // Initialize dark mode based on system preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const filteredCategories = useMemo(() => {
    if (!searchQuery) return categories;

    const lowerQuery = searchQuery.toLowerCase();
    return categories.map(category => {
      const filteredItems = category.items.filter(item => 
        item.name.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        item.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
        item.language?.toLowerCase().includes(lowerQuery)
      );
      return { ...category, items: filteredItems };
    }).filter(category => category.items.length > 0);
  }, [searchQuery]);

  const scrollToCategory = (id: string) => {
    setActiveCategory(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(`category-${id}`);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-slate-900/50 dark:bg-slate-900/80 z-40 lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 bottom-0 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-indigo-600 dark:text-indigo-400">
            <Server className="w-6 h-6" />
            <span>Selfhosted</span>
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-4 overflow-y-auto h-[calc(100vh-4rem)] custom-scrollbar">
          <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4 px-2">
            Categories
          </div>
          <nav className="space-y-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300 font-medium' 
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-slate-200'
                }`}
              >
                <span>{category.name}</span>
                <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-full">
                  {category.items.length}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-72 min-h-screen flex flex-col">
        {/* Header */}
        <header className="h-16 sticky top-0 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 -ml-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
              <Menu className="w-5 h-5" />
            </button>
            
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text"
                placeholder="Search software, tags, or languages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-transparent focus:bg-white dark:focus:bg-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 rounded-xl text-sm transition-all outline-none dark:text-slate-200 placeholder:text-slate-500 dark:placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a 
              href="https://github.com/awesome-selfhosted/awesome-selfhosted" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
          {/* Hero */}
          {!searchQuery && (
            <div className="mb-12 py-8 sm:py-12 px-6 sm:px-10 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-xl shadow-indigo-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-16 -mr-16 text-white/10">
                <Server className="w-64 h-64" />
              </div>
              <div className="relative z-10 max-w-2xl">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
                  Awesome Selfhosted
                </h1>
                <p className="text-indigo-100 text-lg sm:text-xl mb-8 leading-relaxed">
                  A curated directory of Free Software network services and web applications which can be hosted on your own servers.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                    <Server className="w-4 h-4" />
                    <span>{categories.reduce((acc, cat) => acc + cat.items.length, 0)} Services</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                    <Filter className="w-4 h-4" />
                    <span>{categories.length} Categories</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Results */}
          <div className="space-y-16">
            {filteredCategories.length === 0 ? (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
                  <Search className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-2">No results found</h3>
                <p className="text-slate-500 dark:text-slate-400">We couldn't find anything matching "{searchQuery}"</p>
              </div>
            ) : (
              filteredCategories.map((category) => (
                <section key={category.id} id={`category-${category.id}`} className="scroll-mt-24">
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {category.name}
                    </h2>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                      {category.items.length}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {category.items.map((item, index) => (
                      <SoftwareCard key={index} item={item} />
                    ))}
                  </div>
                </section>
              ))
            )}
          </div>
        </div>
      </main>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all z-40"
            aria-label="Back to top"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

function SoftwareCard({ item }: { item: Software }) {
  return (
    <div 
      className="group bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 transform origin-left scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
      
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {item.name}
        </h3>
        <div className="flex items-center gap-2 shrink-0">
          {item.sourceUrl && (
            <a 
              href={item.sourceUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              title="Source Code"
            >
              <Code2 className="w-4 h-4" />
            </a>
          )}
          <a 
            href={item.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 rounded-lg transition-colors"
            title="Website"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
      
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-1 line-clamp-3 leading-relaxed">
        {item.description}
      </p>
      
      <div className="mt-auto space-y-4">
        <div className="flex flex-wrap gap-2">
          {item.language && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20">
              {item.language}
            </span>
          )}
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20">
            {item.license}
          </span>
        </div>
        
        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800/50">
            {item.tags.map(tag => (
              <span key={tag} className="text-[11px] font-medium text-slate-500 dark:text-slate-500 uppercase tracking-wider">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
