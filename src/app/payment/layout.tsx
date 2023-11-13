import React, { ReactNode } from 'react';
import ClientLayout from '@/layouts/ClientLayout/ClientLayout';

interface IProductListPageLayoutProps {
  children: ReactNode;
}

const PaymentPageLayout: React.FC<IProductListPageLayoutProps> = ({ children }) => {

  return (
    <ClientLayout>
      {children}
    </ClientLayout>
  );
};

export default PaymentPageLayout;
