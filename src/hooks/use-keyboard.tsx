import { useEffect } from 'react';

/**
 * Use this for more general keyboard events, as opposed to `useHotkeys`.
 */
export function useKeyboard(props: {
  isDisabled?: boolean;
  onKeyDown?: (event: KeyboardEvent) => void;
  onKeyUp?: (event: KeyboardEvent) => void;
}) {
  useEffect(() => {
    const onKeyDownListener = (event: KeyboardEvent) => {
      if (props.isDisabled) return;
      props.onKeyDown?.(event);
    };

    const onKeyUpListener = (event: KeyboardEvent) => {
      if (props.isDisabled) return;
      props.onKeyUp?.(event);
    };

    window.addEventListener('keydown', onKeyDownListener);
    window.addEventListener('keyup', onKeyUpListener);
    return () => {
      window.removeEventListener('keydown', onKeyDownListener);
      window.removeEventListener('keyup', onKeyUpListener);
    };
  }, [props, props.isDisabled, props.onKeyDown, props.onKeyUp]);
}
