'use client'
import React from 'react'
import PageContainer from '@/components/admin/container/PageContainer';
import CustomButton from '@/components/forms/theme-elements/CustomButton';
import DashboardCard from '@/components/shared/DashboardCard';
import { Alert, AlertTitle, Box, Grid } from '@mui/material';
import { IconArrowBackUp, IconEdit } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import OrderDetailTable from '@/components/admin/Order/OrderDetailTable/OrderDetailTable';
import OrderProductItem from '@/components/admin/Order/OrderProductItem/OrderProductItem';

const OrderDetailPage = () => {
    const router = useRouter()

    return (
        <>
            <PageContainer title='detail' description=''>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <DashboardCard
                            title={`Order: aaa`}
                            subtitle={`ID: 1`}
                        >
                            <Box sx={{ width: { xs: '280px', sm: 'auto' } }}>
                                {/* {error && <Alert sx={{ mb: 2 }} severity="error">
                    <AlertTitle>Error</AlertTitle>
                    Something when wrong — <strong>check your connection and reload page!</strong>
                    </Alert>} */}
                                <CustomButton
                                    startIcon={<IconArrowBackUp />}
                                    color="secondary"
                                    size='small' disableElevation variant="contained" href=""
                                    sx={{ mr: 2 }}
                                    onClick={() => {
                                        router.push('/admin/manage/voucher')
                                    }}
                                >
                                    Trở về
                                </CustomButton>
                                <>
                                    <CustomButton
                                        startIcon={<IconEdit />}
                                        color="success"
                                        size='small'
                                        disableElevation
                                        variant="contained"
                                    >
                                        Chỉnh sửa thông tin
                                    </CustomButton>
                                    {/* data table  */}
                                    <OrderDetailTable />
                                </>
                            </Box>
                        </DashboardCard>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <OrderProductItem />
                        <OrderProductItem />
                        <OrderProductItem />
                    </Grid>
                </Grid>
            </PageContainer>
        </>
    )
}

export default OrderDetailPage
