import React from 'react';
import { Book } from '../types';
import { Star, BookOpen, Info } from 'lucide-react';

interface BookCardProps {
  book: Book;
  onClick: (book: Book) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onClick }) => {
  return (
    <div 
      onClick={() => onClick(book)}
      className="group relative bg-white/80 backdrop-blur-md border border-gray-200 rounded-sm p-0 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
    >
      {/* Official Stripe */}
      <div className={`absolute left-0 top-0 bottom-0 w-1.5`} style={{ backgroundColor: book.coverColor }} />

      <div className="p-5 pl-7 flex flex-col h-full">
        {/* Top Meta */}
        <div className="flex justify-between items-start mb-3">
          <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase border border-gray-300 px-1.5 py-0.5 rounded-sm">
            {book.category}
          </span>
          {book.isRecommended && (
            <div className="flex items-center text-magical-gold gap-1">
              <Star size={12} fill="#D4AF37" />
              <span className="text-[10px] font-bold">推荐</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-serif text-lg font-bold text-ink-black leading-snug group-hover:text-official-blue transition-colors mb-1">
            {book.title}
          </h3>
          <p className="text-xs text-gray-500 mb-3 font-medium">
            {book.author}
          </p>
          <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed opacity-80">
            {book.description}
          </p>
        </div>

        {/* Footer Meta */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400 font-mono">
          <span>{book.isbn}</span>
          <span className="flex items-center gap-1 text-official-blue/80 font-bold bg-blue-50 px-2 py-0.5 rounded-full">
            <BookOpen size={10} />
            {book.ageGroup}
          </span>
        </div>
      </div>
      
      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-white/0 group-hover:bg-official-blue/5 transition-colors duration-300 pointer-events-none" />
    </div>
  );
};

export default BookCard;