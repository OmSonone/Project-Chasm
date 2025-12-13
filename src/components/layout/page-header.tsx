import React from 'react';

interface PageHeaderProps {
  header: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ header }) => {
  return (
    <header className='top-0 z-10 pt-6'>
      <div className='flex justify-between items-center h-16 container'>
        <h1 className='font-bold text-4xl tracking-tight'>{header}</h1>
      </div>
    </header>
  );
};

export default PageHeader;
