import React from 'react';
import { FileDown } from 'lucide-react';

interface DownloadInstructionsButtonProps {
  onClick: () => void;
  label?: string;
  className?: string;
  iconSize?: string;
  paddingClass?: string;
  href?: string;
}

export function DownloadInstructionsButton({
  onClick,
  label = 'Download Instructions',
  className = '',
  iconSize = 'w-4 h-4 md:w-5 md:h-5',
  paddingClass = 'px-6 md:px-8 py-3 md:py-4',
  href,
}: DownloadInstructionsButtonProps) {
  const ButtonContent = (
    <>
      <FileDown className={iconSize} />
      {label}
    </>
  );

  return (
    <div className={`relative group/tooltip ${className}`}>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          className={`inline-flex items-center justify-center gap-2 ${paddingClass} bg-gradient-to-r from-[#FFC107] to-[#FF9800] text-gray-900 rounded-xl hover:from-[#FFB300] hover:to-[#F57C00] shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-sm md:text-base font-bold w-full`}
          aria-label={label}
        >
          {ButtonContent}
        </a>
      ) : (
        <button
          onClick={onClick}
          className={`inline-flex items-center justify-center gap-2 ${paddingClass} bg-gradient-to-r from-[#FFC107] to-[#FF9800] text-gray-900 rounded-xl hover:from-[#FFB300] hover:to-[#F57C00] shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-sm md:text-base font-bold w-full`}
          aria-label={label}
        >
          {ButtonContent}
        </button>
      )}
      {/* Custom styled tooltip — matches landing page card style */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg z-20">
        <div className="font-semibold">Claim Full Ownership</div>
        <div className="text-gray-300">Get .md files • Use with any AI model</div>
        {/* Arrow */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  );
}
