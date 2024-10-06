import React from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, children }) => {
  return (
    <>
      <div id={id}>&nbsp;</div>
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    </>
  );
};

export default SectionWrapper;
