import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-30 w-11 h-11 bg-[#101C2C] text-[#F8F6F0] border border-[#B99A62]/60 shadow-lg flex items-center justify-center hover:bg-[#B99A62] hover:text-[#101C2C] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B99A62] cursor-pointer"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}
