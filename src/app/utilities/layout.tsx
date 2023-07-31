import React, { ReactNode } from 'react';
import FullLayout from '@/layouts/full/FullLayout'

interface UtilsLayoutProps {
    children: ReactNode;
}

const UtilsLayout: React.FC<UtilsLayoutProps> = ({ children }) => {
    return (
        <FullLayout>
            {children}
        </FullLayout>
    );
};

export default UtilsLayout;