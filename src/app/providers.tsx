"use client"

import React, { ReactNode, useContext } from 'react'
import { ThemeContext, ThemeProvider } from '@/context/ThemeContext';

interface Props {
    children: ReactNode
}
const providers = ({ children }: Props) => {

    return (
        <React.Fragment>
            <ThemeProvider>
                    {children}
            </ThemeProvider>
        </React.Fragment>
    )
}

export default providers