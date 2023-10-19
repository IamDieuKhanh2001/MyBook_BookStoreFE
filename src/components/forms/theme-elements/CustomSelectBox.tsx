'use client'
import React from 'react'
import {
    FormControl,
    styled,
} from '@mui/material';
import Select, { SelectProps } from '@mui/material/Select';

const CustomSelectBox = (
    selectMuiProps: SelectProps,
) => {
    const CustomSelect = styled(Select)(({ theme }) => ({
        ".MuiSelect-select": {
            color: 'black',
            background: theme.palette.grey[400],
            '&:focus': {
                background: theme.palette.grey[200],
            },
        },
    }));

    return (
        <FormControl variant="filled" sx={{ minWidth: 120, width: '100%' }}>
            <CustomSelect
                {...selectMuiProps}
            >
                {selectMuiProps.children}
            </CustomSelect>
        </FormControl>
    )
}

export default CustomSelectBox
