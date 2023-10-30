"use client"

import React from 'react';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const CustomTextField = styled((props: any) => <TextField {...props} />)(({ theme }) => ({
  '& .MuiOutlinedInput-input::-webkit-input-placeholder': {
    color: theme.palette.text.primary,
    background: theme.palette.primary.dark,
    opacity: '0.8',
  },
  '.MuiInputBase-root': {
    border: '1px solid #AAB4BE',
    'input': {
      "&:disabled": {
        WebkitTextFillColor: theme.palette.grey[300]
      },
    }
  },
  '& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder': {
    color: `${theme.palette.text.primary}!important`,
    background: theme.palette.primary.dark,
    opacity: '1',
  },
  '& .Mui-disabled .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.grey[200],
  },
}));

export default CustomTextField;
