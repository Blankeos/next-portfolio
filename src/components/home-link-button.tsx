'use client';

import { animateScroll as scroll } from 'react-scroll';
import { usePathname, useRouter } from 'next/navigation';

interface HomeLinkButton {
  className?: string;
}

const HomeLinkButton: FCC<HomeLinkButton> = ({ className, children }) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <button
      onClick={() => {
        if (pathname === '/') {
          scroll.scrollToTop();
        } else {
          router.push('/');
        }
      }}
    >
      {children}
    </button>
  );
};

export default HomeLinkButton;
