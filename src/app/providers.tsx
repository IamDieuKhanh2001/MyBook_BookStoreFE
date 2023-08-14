"use client"

import React, { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from '@/context/ThemeContext';

interface Props {
    children: ReactNode
}
const providers = ({ children }: Props) => {

    return (
        <React.Fragment>
            <SessionProvider>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </SessionProvider>
        </React.Fragment>
    )
}
export default providers