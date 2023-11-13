'use client'

import PageContainer from '@/components/admin/container/PageContainer'
import DashboardCard from '@/components/shared/DashboardCard'
import React from 'react'
import { Box, Button, Grid, Alert, AlertTitle } from '@mui/material'
import OrderTableData from '@/components/admin/Order/OrderTableData/OrderTableData'

const OrderPage = () => {
    return (
        <>
            <PageContainer title='Order' description='My CRUD Operation for order'>
                <Grid item xs={12} lg={8}>
                    <DashboardCard
                        title='Order List'
                        subtitle='Manage Order'
                    >
                        <Box sx={{ width: { xs: '280px', sm: 'auto' } }}>
                            {/* {error && (
                                <Alert sx={{ mb: 2 }} severity="error">
                                    <AlertTitle>Error</AlertTitle>
                                    Something when wrong — <strong>check your connection and reload page!</strong>
                                </Alert>
                            )} */}
                            
                            <OrderTableData />
                        </Box>
                    </DashboardCard>
                </Grid>
            </PageContainer>
        </>
    )
}

export default OrderPage
