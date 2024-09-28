import React from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="my-20 px-8">
      <h2 className="">{title}</h2>
      {children}
    </section>
  );
};

export default SectionWrapper;
