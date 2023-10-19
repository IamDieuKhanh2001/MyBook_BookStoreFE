'use client'
import React from 'react'
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';
import styled from '@mui/system/styled';

const CustomMenuItem = styled(MenuItem)<MenuItemProps>(({ theme }) => ({
    color: 'black',
    '&:focus': {
        backgroundColor: `${theme.palette.secondary.main} !important`, // Màu nền khi hover
        color: 'white', // Màu sắc khi focus
    },
    '&:hover': {
        backgroundColor: `${theme.palette.secondary.main} !important`, // Màu nền khi hover
        color: 'white', // Màu sắc khi hover
    },
    '&;disabled': {
        color: theme.palette.text.secondary, // Màu sắc khi disabled
    }
}));

export default CustomMenuItem;
