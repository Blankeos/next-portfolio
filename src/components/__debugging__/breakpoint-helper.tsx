'use client';

import { useWindowSize } from '@/hooks/use-window-size';
import { useMemo } from 'react';

const BreakPointHelper = () => {
  const size = useWindowSize();

  const text = useMemo(() => {
    let _text = '';

    if (size[0] < 640) {
      _text = 'xs: green';
    } else if (size[0] < 768) {
      _text = 'sm: blue';
    } else if (size[0] < 1024) {
      _text = 'md: red';
    } else if (size[0] < 1280) {
      _text = 'lg: yellow';
    } else if (size[0] < 1536) {
      _text = 'xl: indigo';
    } else if (size[0] < 1920) {
      _text = '2xl: pink';
    }

    if (_text === '') {
      _text = `Current: ${size[0]}px`;
      return _text;
    }

    _text += ` | Current: ${size[0]}px`;
    return _text;
  }, [size]);

  return (
    <div className="fixed left-0 top-0 z-50 flex w-full items-center justify-center space-x-4 bg-green-400 p-2 text-center text-xs text-white sm:bg-blue-600 md:bg-red-600 lg:bg-yellow-400 xl:bg-indigo-400 2xl:bg-pink-500">
      {text}
    </div>
  );
};

export default BreakPointHelper;
