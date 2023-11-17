'use client'
import React from 'react'
import { useTheme, Chip, } from '@mui/material'
import { OverridableStringUnion } from '@mui/types';
import { ChipPropsSizeOverrides } from '@mui/material/Chip';

interface ICustomChipProps {
    label?: string
    bgColor?: "success" | "warning" | 'error'
    size?: OverridableStringUnion<"small" | "medium", ChipPropsSizeOverrides> | undefined
}
const CustomChip = (props: ICustomChipProps) => {
    const theme = useTheme()
    const { label = 'no label', bgColor = 'success', size = 'small' } = props

    return (
        <>
            <Chip
                sx={{
                    px: "4px",
                    backgroundColor: bgColor === 'success'
                        ? theme.palette.success.main
                        : bgColor === 'warning'
                            ? theme.palette.warning.main
                            : bgColor === 'error'
                                ? theme.palette.error.main
                                : undefined,
                    color: "#fff",
                }}
                size={size}
                label={label}
            ></Chip>
        </>
    )
}

export default CustomChip
