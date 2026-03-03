import React from 'react';

interface CategoryBarProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryBar({ categories, selectedCategory, onSelectCategory }: CategoryBarProps) {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 md:top-20 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto gap-3 scrollbar-hide px-[24px] py-[9px]">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`whitespace-nowrap px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#007BFF] text-white shadow-md scale-105'
                  : 'bg-[#F8F9FA] text-[#343A40] hover:bg-[#E9ECEF] hover:shadow-sm'
              }`}
              aria-label={`Filter by ${category}`}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
