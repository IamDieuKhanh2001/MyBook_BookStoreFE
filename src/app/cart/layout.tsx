import ClientLayout from '@/layouts/ClientLayout/ClientLayout'
import React, { ReactNode } from 'react'

interface CartLayoutProps {
    children: ReactNode;
}

const CartLayout: React.FC<CartLayoutProps> = ({ children }) => {

    return (
        <ClientLayout>
            {children}
        </ClientLayout>
    );
};

export default CartLayout
