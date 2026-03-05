import React from 'react';
import { FileDown } from 'lucide-react';
import { DownloadInstructionsButton } from './DownloadInstructionsButton';

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
  onDownloadInstructions?: (id: string) => void;
}

export function PromptCard({ prompt, onViewDocs, onDownload, onDownloadInstructions }: PromptCardProps) {
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

  // Check if this is the Python Learning Guardrail System (paid download)
  const isPaidDownload = prompt.id === '1';
  // Check if this is a free access prompt (IDs: 7, 8, 10)
  const isFreeAccess = prompt.id === '7' || prompt.id === '8' || prompt.id === '10';
  
  // Don't show download instructions button for Python card (id === '1')
  const showInstructionsButton = prompt.id !== '1' && onDownloadInstructions;

  return (
    <div className="group cursor-pointer">
      {/* Thumbnail with overlay */}
      <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] mb-4">
        <img
          src={prompt.thumbnail}
          alt={prompt.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge - repositioned to bottom left */}
        <div
          className="absolute bottom-3 left-3 px-3 py-1.5 rounded-full text-white text-xs font-semibold backdrop-blur-sm shadow-lg"
          style={{ backgroundColor: getCategoryColor(prompt.category) }}
        >
          {prompt.category}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        {/* Title */}
        <h3
          className="text-[#343A40] text-lg leading-tight line-clamp-2 group-hover:text-[#007BFF] transition-colors"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {prompt.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 line-clamp-2 text-sm leading-relaxed">
          {prompt.description}
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-2 pt-2">
          <div className="flex gap-2">
            <button
              onClick={() => onViewDocs(prompt.id)}
              className="flex-1 px-4 py-2.5 border-2 border-[#007BFF] text-[#007BFF] rounded-xl hover:bg-[#007BFF] hover:text-white transition-all text-sm font-semibold"
              aria-label={`View documentation for ${prompt.title}`}
            >
              View Docs
            </button>
            <button
              onClick={() => onDownload(prompt.id)}
              className="flex-1 px-4 py-2.5 bg-[#28A745] text-white rounded-xl hover:bg-[#1e7e34] hover:shadow-lg transition-all text-sm font-semibold"
              aria-label={`Download ${prompt.title}`}
            >
              {isPaidDownload ? 'Buy Now' : 'Get Free'}
            </button>
          </div>
          {showInstructionsButton && (
            <DownloadInstructionsButton
              onClick={() => onDownloadInstructions(prompt.id)}
              label="Get Instructions"
              paddingClass="px-4 py-2.5"
              iconSize="w-4 h-4"
            />
          )}
        </div>
      </div>
    </div>
  );
}