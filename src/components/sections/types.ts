import React from 'react';

export type SectionRef = React.LegacyRef<HTMLElement>;

export interface SectionProps {
  sectionRef?: SectionRef;
}
