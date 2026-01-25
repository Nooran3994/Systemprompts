import React from 'react';

export interface PromptCardData {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  price?: string;
}

interface PromptCardProps {
  prompt: PromptCardData;
  onViewDocs: (id: string) => void;
  onDownload: (id: string) => void;
}

export function PromptCard({ prompt, onViewDocs, onDownload }: PromptCardProps) {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Learning Systems': '#28A745',
      'Agents': '#007BFF',
      'Social Media Systems': '#FFC107',
      'Productivity': '#6F42C1',
      'Content Creation': '#E83E8C'
    };
    return colors[category] || '#6C757D';
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group border border-gray-100">
      {/* Thumbnail */}
      <div className="relative overflow-hidden bg-gray-100 h-48">
        <img
          src={prompt.thumbnail}
          alt={prompt.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Category Badge */}
        <div
          className="absolute top-3 right-3 px-3 py-1 rounded-full text-white text-sm font-medium shadow-lg"
          style={{ backgroundColor: getCategoryColor(prompt.category) }}
        >
          {prompt.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3
          className="text-[#343A40] mb-3 line-clamp-2"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {prompt.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
          {prompt.description}
        </p>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={() => onViewDocs(prompt.id)}
            className="flex-1 px-4 py-2 bg-[#007BFF] text-white rounded-lg hover:bg-[#0056b3] transition-colors text-sm font-medium"
            aria-label={`View documentation for ${prompt.title}`}
          >
            View Docs
          </button>
          <button
            onClick={() => onDownload(prompt.id)}
            className="flex-1 px-4 py-2 bg-[#28A745] text-white rounded-lg hover:bg-[#1e7e34] transition-colors text-sm font-medium"
            aria-label={`Download ${prompt.title}`}
          >
            Download {prompt.price && `• ${prompt.price}`}
          </button>
        </div>
      </div>
    </div>
  );
}
