import React, { ReactNode, useEffect } from 'react';
import FullLayout from '@/layouts/full/FullLayout'
import { getSession } from 'next-auth/react';
import { GetServerSidePropsContext } from 'next';

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
