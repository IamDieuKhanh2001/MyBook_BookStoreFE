import React, { ReactNode } from 'react';
import FullLayout from '@/layouts/full/FullLayout'

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <FullLayout>
      {children}
    </FullLayout>
  );
};

export default AdminLayout;
