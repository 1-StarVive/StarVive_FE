import Header from '@/components/headers/header';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
