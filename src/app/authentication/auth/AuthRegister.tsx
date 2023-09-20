"use client"

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { Stack } from '@mui/system';

interface registerProps {
    title?: string;
    subtitle?: JSX.Element | JSX.Element[];
    subtext?: JSX.Element | JSX.Element[];
}

const AuthRegister = ({ title, subtitle, subtext }: registerProps) => {
    const theme = useTheme()

    return (
        <>
            {title ? (
                <Typography fontWeight="700" variant="h2" mb={1}>
                    {title}
                </Typography>
            ) : null}

            {subtext}

            <Box>
                <Stack mb={3}>
                    <Typography variant="subtitle1"
                        style={{ color: theme.palette.grey[600] }}
                        fontWeight={600} component="label" htmlFor='email' mb="5px" mt="25px">Email Address</Typography>
                    <CustomTextField id="email" variant="outlined" fullWidth />
                    <Typography variant="subtitle1"
                        style={{ color: theme.palette.grey[600] }}
                        fontWeight={600} component="label" htmlFor='password' mb="5px" mt="25px">Password</Typography>
                    <CustomTextField id="password" variant="outlined" fullWidth />
                    <Typography variant="subtitle1"
                        style={{ color: theme.palette.grey[600] }}
                        fontWeight={600} component="label" htmlFor='retype-pass' mb="5px" mt="25px">Retype password</Typography>
                    <CustomTextField id="retype-pass" variant="outlined" fullWidth />
                </Stack>
                <Button color="primary" variant="contained" size="large" fullWidth component={Link} href="/authentication/login">
                    Sign Up
                </Button>
            </Box>
            {subtitle}
        </>
    )
};

export default AuthRegister;
