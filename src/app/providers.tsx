"use client"

import React, { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from '@/context/ThemeContext';
import { ConfirmProvider } from 'material-ui-confirm';

interface Props {
    children: ReactNode
}
const providers = ({ children }: Props) => {
    return (
        <React.Fragment>
            <ConfirmProvider>
                <SessionProvider>
                    <ThemeProvider>
                        {children}
                    </ThemeProvider>
                </SessionProvider>
            </ConfirmProvider>
        </React.Fragment>
    )
}
export default providers