import ClientHeader from '@/components/ClientHeader/ClientHeader';
import AccountSideBar from '@/components/account/AccountSideBar/AccountSideBar';
import ClientLayout from '@/layouts/ClientLayout/ClientLayout'
import React, { ReactNode } from 'react'

interface CheckoutLayoutProps {
    children: ReactNode;
}

const CheckoutLayout: React.FC<CheckoutLayoutProps> = ({ children }) => {

    return (
        <ClientLayout>
            <ClientHeader />
            {children}
        </ClientLayout>
    );
};

export default CheckoutLayout
