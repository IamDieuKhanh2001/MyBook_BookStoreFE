'use client'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha, InputBase, Stack, InputAdornment, IconButton } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(1),
    marginLeft: 0,
    width: '400px',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-root': {

    },
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '345px',
    },
}));

interface IAdminSearchBarProps {
    setSearchKeyWord: (value: string) => void;
    placeholderText?: string
}
const AdminSearchBar = (props: IAdminSearchBarProps) => {
    const { placeholderText = 'seach keyword', setSearchKeyWord } = props
    let timeout: NodeJS.Timeout | undefined;

    const handleInputChange = (e: any) => {
        // Sử dụng setTimeout để trì hoãn việc gọi setSearch một giây sau khi người dùng nhập
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            setSearchKeyWord(e.target.value);
        }, 1000);
    };

    return (
        <>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
            >
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder={placeholderText}
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={handleInputChange}
                    />
                </Search>
            </Stack>
        </>
    )
}

export default AdminSearchBar
