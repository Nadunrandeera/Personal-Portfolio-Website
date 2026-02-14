import { Heart, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f0f0f] border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>© 2026 Nadun Randeera. All rights reserved.</span>
            {/* <Heart size={16} className="text-[#ff014f] fill-[#ff014f]" /> */}
          </div>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-[#1a1a1a] hover:bg-[#ff014f] rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-[#ff014f]/50 border border-gray-800 hover:border-[#ff014f] fixed bottom-8 right-8 z-40"
            aria-label="Scroll to top"
          >
            <ArrowUp className="text-gray-300" size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}