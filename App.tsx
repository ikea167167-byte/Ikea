import React, { useState, useMemo } from 'react';
import { Book, BookCategory, AgeGroup } from './types';
import { MOCK_BOOKS } from './constants';
import MagicScene from './components/MagicScene';
import BookCard from './components/BookCard';
import DetailModal from './components/DetailModal';
import { Search, Filter, Library, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<BookCategory | 'ALL'>('ALL');
  const [selectedAge, setSelectedAge] = useState<AgeGroup | 'ALL'>('ALL');
  const [activeBook, setActiveBook] = useState<Book | null>(null);

  // Filter Logic
  const filteredBooks = useMemo(() => {
    return MOCK_BOOKS.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            book.author.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'ALL' || book.category === selectedCategory;
      const matchesAge = selectedAge === 'ALL' || book.ageGroup === selectedAge;
      return matchesSearch && matchesCategory && matchesAge;
    });
  }, [searchTerm, selectedCategory, selectedAge]);

  return (
    <div className="min-h-screen relative text-ink-black font-sans selection:bg-magical-gold selection:text-white">
      {/* 3D Background */}
      <MagicScene />

      {/* Main UI Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Header */}
        <header className="sticky top-0 z-40 bg-paper-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 bg-official-blue rounded-sm flex items-center justify-center text-white shadow-lg group-hover:bg-magical-gold transition-colors">
                <Library size={20} />
              </div>
              <div>
                <h1 className="text-lg font-serif font-bold text-official-blue tracking-tight leading-none group-hover:text-magical-gold transition-colors">
                  广州市白云区同和第三幼儿园
                </h1>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">Official Archives</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span className="text-xs font-serif text-gray-600">线上图书馆</span>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4 text-xs font-bold text-gray-500 tracking-widest">
              <span>EST. 2025</span>
              <span>•</span>
              <span className="text-official-blue">SYSTEM ONLINE</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          
          {/* Search & Controls */}
          <section className="mb-10 animate-fade-in space-y-6">
            <div className="bg-white/90 backdrop-blur shadow-sm border border-white/40 rounded-lg p-6 sm:p-8">
              <div className="max-w-3xl mx-auto space-y-6">
                
                {/* Search Bar */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-official-blue transition-colors">
                    <Search size={20} />
                  </div>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="搜索书名、作者或关键词..."
                    className="block w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent focus:border-official-blue focus:bg-white text-gray-900 placeholder-gray-400 rounded-md focus:outline-none focus:ring-0 transition-all shadow-inner"
                  />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                     <span className="text-xs text-gray-300 font-mono">CMD+K</span>
                  </div>
                </div>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-gray-100 pt-6">
                  <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
                    <Filter size={14} className="text-gray-400 shrink-0" />
                    <span className="text-xs font-bold text-gray-400 uppercase mr-2 shrink-0">Filter by:</span>
                    
                    <select 
                      value={selectedCategory} 
                      onChange={(e) => setSelectedCategory(e.target.value as any)}
                      className="form-select text-sm border-gray-200 rounded-sm py-1.5 px-3 bg-white hover:border-gray-300 focus:border-official-blue focus:ring-0 cursor-pointer"
                    >
                      <option value="ALL">全部分类</option>
                      {Object.values(BookCategory).map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>

                     <select 
                      value={selectedAge} 
                      onChange={(e) => setSelectedAge(e.target.value as any)}
                      className="form-select text-sm border-gray-200 rounded-sm py-1.5 px-3 bg-white hover:border-gray-300 focus:border-official-blue focus:ring-0 cursor-pointer"
                    >
                      <option value="ALL">全部年龄</option>
                      {Object.values(AgeGroup).map(age => (
                        <option key={age} value={age}>{age}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center gap-2 text-magical-gold text-xs font-bold uppercase tracking-widest bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-100">
                    <Sparkles size={12} />
                    <span>AI Recommended</span>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Book Grid */}
          <section>
             <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif font-bold text-official-blue flex items-center gap-2">
                   图书索引
                   <span className="text-sm font-sans font-normal text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{filteredBooks.length}</span>
                </h2>
             </div>

             {filteredBooks.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredBooks.map((book) => (
                    <BookCard 
                      key={book.id} 
                      book={book} 
                      onClick={setActiveBook} 
                    />
                  ))}
                </div>
             ) : (
                <div className="flex flex-col items-center justify-center py-20 text-gray-400 bg-white/50 backdrop-blur rounded-lg border border-dashed border-gray-300">
                   <Library size={48} className="mb-4 opacity-50" />
                   <p className="text-lg font-serif">暂无相关图书</p>
                   <p className="text-xs">请尝试调整搜索关键词或筛选条件</p>
                </div>
             )}
          </section>

        </main>

        {/* Footer */}
        <footer className="bg-white/90 backdrop-blur-md border-t border-gray-200 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div>
                  <h4 className="font-serif font-bold text-official-blue mb-4">联系我们</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                     广州市白云区同和第三幼儿园<br/>
                     教学办公室<br/>
                     Email: 3961502060@qq.com
                  </p>
               </div>
               <div>
                  <h4 className="font-serif font-bold text-official-blue mb-4">开放时间</h4>
                   <p className="text-xs text-gray-500 leading-relaxed">
                     周一至周五: 8:00 - 17:30<br/>
                     线上系统: 24小时开放
                  </p>
               </div>
               <div className="md:text-right">
                  <div className="inline-block border border-gray-200 p-2 bg-gray-50 rounded-sm">
                     <span className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1">System Status</span>
                     <div className="flex items-center gap-2 justify-end">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-xs font-bold text-gray-700">Operational</span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-100 text-center text-[10px] text-gray-400 uppercase tracking-widest">
               © 2025 Tonghe No.3 Kindergarten. All Rights Reserved.
            </div>
          </div>
        </footer>

      </div>

      {/* Modal Layer */}
      <DetailModal book={activeBook} onClose={() => setActiveBook(null)} />
      
    </div>
  );
};

export default App;