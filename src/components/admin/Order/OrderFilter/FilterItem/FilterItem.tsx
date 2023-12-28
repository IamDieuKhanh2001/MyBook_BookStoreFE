import { Badge, Box, FormControlLabel, Radio } from '@mui/material'
import React from 'react'

interface IFilterItemProps {
    value: string
    label: string
    total: number
    color?: "secondary" | "primary" | "error" | "info" | "success" | "warning" | "default"
}
const FilterItem = (props: IFilterItemProps) => {
    const { value, label, total = 0, color = 'secondary' } = props

    // <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    //     <Box>
                    //         <span>{label}</span>
                    //     </Box>
                    //     <Box sx={{ ml: 2 }}>
                    //         <Badge color="secondary" badgeContent={total} />
                    //     </Box>
                    // </Box>
    return (
        <>
            <FormControlLabel
                value={value}
                control={<Radio color={color} size='medium' />}
                label={
                    `${label} (${total})`
                }
            />
        </>
    )
}

export default FilterItem
