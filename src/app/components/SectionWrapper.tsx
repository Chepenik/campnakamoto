import React from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, children }) => {
  return (
    <section id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default SectionWrapper;
