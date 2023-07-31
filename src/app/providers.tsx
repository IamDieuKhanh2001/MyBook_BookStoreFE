"use client"

import React, { ReactNode } from 'react'
import { ThemeProvider } from "@mui/material/styles";
import { baseDarkTheme, baselightTheme } from '@/theme/DefaultColors';

interface Props {
    children: ReactNode
}
const providers = ({ children }: Props) => {
    const theme = baselightTheme;
    // const theme = baseDarkTheme;

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </React.Fragment>
    )
}

export default providers
