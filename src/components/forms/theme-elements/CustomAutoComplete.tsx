'use client'
import { styled } from '@mui/material';
import React, { useState } from 'react'
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';

const CustomAutoComplete = (autoCompleteProps: AutocompleteProps<any, false, false, false>) => {
    const [openOptions, setOpenOptions] = useState(false)

    const handleClose = (event: any, reason: string) => {
        if (reason === 'selectOption') {
            setOpenOptions(false); // Đóng Autocomplete khi đã chọn một option
        }
    };

    const handleOpen = () => {
        setOpenOptions(true);
    };

    return (
        <Autocomplete
            open={openOptions}
            onOpen={handleOpen}
            onClose={handleClose}
            onBlur={() => setOpenOptions(false)}
            {...autoCompleteProps}
        />
    )
}

export default CustomAutoComplete
