import ClientHeader from '@/components/ClientHeader/ClientHeader';
import AccountSideBar from '@/components/account/AccountSideBar/AccountSideBar';
import ClientLayout from '@/layouts/ClientLayout/ClientLayout'
import React, { ReactNode } from 'react'

interface CartLayoutProps {
    children: ReactNode;
}

const CartLayout: React.FC<CartLayoutProps> = ({ children }) => {

    return (
        <ClientLayout>
            <ClientHeader />
            {children}
        </ClientLayout>
    );
};

export default CartLayout
