"use client"

import React, { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from '@/context/ThemeContext';
import { ConfirmProvider } from 'material-ui-confirm';
import { ReduxProvider } from '@/redux/ReduxProvider';

interface Props {
    children: ReactNode
}
const providers = ({ children }: Props) => {
    return (
        <React.Fragment>
            <ReduxProvider>
                <ConfirmProvider>
                    <SessionProvider>
                        <ThemeProvider>
                            {children}
                        </ThemeProvider>
                    </SessionProvider>
                </ConfirmProvider>
            </ReduxProvider>
        </React.Fragment>
    )
}
export default providers