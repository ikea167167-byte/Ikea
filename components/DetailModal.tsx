import React from 'react';
import { Book } from '../types';
import { X, Calendar, User, Tag, Book as BookIcon } from 'lucide-react';

interface DetailModalProps {
  book: Book | null;
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-ink-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-2xl bg-paper-white rounded-md shadow-2xl overflow-hidden animate-fade-in-up border-t-4" style={{ borderColor: book.coverColor }}>
        {/* Header */}
        <div className="flex justify-between items-start p-6 border-b border-gray-100 bg-white">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-bold tracking-wider rounded-sm">
                NO. {book.id.padStart(4, '0')}
              </span>
              <span className="text-xs text-gray-400 font-mono">OFFICIAL ARCHIVE</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-ink-black">{book.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-8">
          {/* Left: Visual Representation */}
          <div className="w-full sm:w-1/3 flex flex-col items-center">
             <div 
                className="w-32 h-44 shadow-xl rounded-sm flex items-center justify-center text-white mb-4 relative overflow-hidden"
                style={{ backgroundColor: book.coverColor }}
             >
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
                <BookIcon size={48} className="opacity-80" />
                <div className="absolute bottom-2 right-2 text-[10px] font-mono opacity-60">
                    {book.isbn}
                </div>
             </div>
             <button className="w-full py-2 px-4 bg-official-blue text-white text-sm font-medium rounded-sm hover:bg-blue-900 transition-colors shadow-lg">
                借阅登记
             </button>
          </div>

          {/* Right: Info */}
          <div className="w-full sm:w-2/3 space-y-6">
            <div className="space-y-4">
              <InfoRow icon={<User size={16}/>} label="作者" value={book.author} />
              <InfoRow icon={<Tag size={16}/>} label="分类" value={book.category} />
              <InfoRow icon={<Calendar size={16}/>} label="出版日期" value={book.publishDate} />
              <InfoRow icon={<BookIcon size={16}/>} label="适龄建议" value={book.ageGroup} />
            </div>

            <div className="bg-gray-50 p-4 rounded-sm border border-gray-100">
              <h4 className="text-sm font-bold text-gray-700 mb-2 font-serif">内容简介</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {book.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoRow = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="flex items-center gap-3">
    <div className="text-gray-400">{icon}</div>
    <div className="flex flex-col">
      <span className="text-[10px] text-gray-400 uppercase tracking-wider">{label}</span>
      <span className="text-sm font-medium text-ink-black">{value}</span>
    </div>
  </div>
);

export default DetailModal;