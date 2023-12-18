import ClientLayout from '@/layouts/ClientLayout/ClientLayout';
import React, { ReactNode } from 'react';

interface AdminLayoutProps {
  children: ReactNode;
}

const AuthenticationLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <ClientLayout>
      {children}
    </ClientLayout>
  );
};

export default AuthenticationLayout;