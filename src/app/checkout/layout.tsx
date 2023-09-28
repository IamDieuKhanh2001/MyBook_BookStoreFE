import ClientLayout from '@/layouts/ClientLayout/ClientLayout'
import React, { ReactNode } from 'react'

interface CheckoutLayoutProps {
    children: ReactNode;
}

const CheckoutLayout: React.FC<CheckoutLayoutProps> = ({ children }) => {

    return (
        <ClientLayout>
            {children}
        </ClientLayout>
    );
};

export default CheckoutLayout
