"use client"
import React, { ReactNode } from 'react';
import BlankLayout from '@/layouts/blank/BlankLayout';

interface AdminLayoutProps {
  children: ReactNode;
}

const AuthenticationLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <BlankLayout>
      {children}
    </BlankLayout>
  );
};

export default AuthenticationLayout;