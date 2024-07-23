import React from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="my-20">
      <h2 className="text-4xl font-bold mb-4 text-secondary">{title}</h2>
      {children}
    </section>
  );
};

export default SectionWrapper;
