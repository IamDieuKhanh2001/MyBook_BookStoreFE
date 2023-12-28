import { Box, Divider, Grid, Typography } from '@mui/material'
import { IconLocation } from '@tabler/icons-react'
import React from 'react'

interface IUserAddressProps {
    address: IUserAddress
}
const UserAddress = (props: IUserAddressProps) => {
    const { address } = props

    return (
        <Box sx={{ mb: 2, p: 2, border: '1px solid #ccc', borderRadius: '8px', boxShadow: 1 }}>
            <Grid container alignItems="center" spacing={2}>
                <Grid item>
                    <IconLocation />
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="h6">
                        Địa chỉ người nhận:&nbsp;
                        {address.recipient_name}
                    </Typography>
                    <Typography variant="body1">
                        {address.street},{address.wards.district.name},{address.wards.district.province.name}
                    </Typography>
                </Grid>
            </Grid>
            <Divider sx={{ my: 2 }} />
            <Typography variant="caption" color="textSecondary">
                Điện thoại người nhận: {address.recipient_phone}
            </Typography>
        </Box>
    )
}

export default UserAddress
