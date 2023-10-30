import React, { ReactNode, useEffect } from 'react';
import ClientLayout from '@/layouts/ClientLayout/ClientLayout';

interface IProductListPageLayoutProps {
  children: ReactNode;
}

const ProductListPageLayout: React.FC<IProductListPageLayoutProps> = ({ children }) => {

  return (
    <ClientLayout>
      {children}
    </ClientLayout>
  );
};

export default ProductListPageLayout;
