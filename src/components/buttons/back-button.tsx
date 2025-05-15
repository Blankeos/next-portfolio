'use client';

import { FC } from 'react';
import { FiChevronLeft as IconChevron } from 'react-icons/fi';
import ShadowButton from '../shadow-button';

type BackButtonProps = {
  /**
   * Only href, no onClick because we want this to be used in
   * a server-component usually.
   * @defaultValue '/'
   */
  href?: string;
};

const BackButton: FC<BackButtonProps> = (props) => {
  const { href = '/' } = props;
  return (
    <ShadowButton
      className="group"
      elevation={5}
      href={href}
      shadowClassName="bg-primary-dark"
    >
      <span className="border-primary-dark bg-primary-foreground grid h-12 w-12 place-items-center border text-white">
        <IconChevron size="1.3rem" />
      </span>
    </ShadowButton>
  );
};

export default BackButton;
