'use client'
import { Button, styled } from '@mui/material';
import React from 'react'

const CustomButton = styled((props: any) => <Button {...props} />)(({ theme }) => ({
    '&:disabled': {
        backgroundColor: '#757575',

    },
}));

export default CustomButton
