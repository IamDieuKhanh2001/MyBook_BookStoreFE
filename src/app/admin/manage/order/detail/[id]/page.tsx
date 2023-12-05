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
import useAPIOrder from '@/lib/hooks/api/useAPIOrder';
import OrderReview from '@/components/admin/Order/OrderReview/OrderReview';

interface IOrderDetailPageProps {
    params: {
        id: number;
    };
}
const OrderDetailPage = (props: IOrderDetailPageProps) => {
    const router = useRouter()
    const { params } = props
    const { getOrderDetail } = useAPIOrder()
    const { data, error, isLoading, mutate } = getOrderDetail(params.id)

    return (
        <>
            <PageContainer title='detail' description=''>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <DashboardCard
                            title={`Order: aaa`}
                            subtitle={`ID: ${data.id}`}
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
                                        router.push('/admin/manage/order')
                                    }}
                                >
                                    Trở về
                                </CustomButton>
                                {!error && !isLoading && (
                                    <OrderDetailTable orderData={data} />
                                )}
                            </Box>
                        </DashboardCard>
                        <OrderReview />
                    </Grid>
                    {!error && !isLoading && (
                        <Grid item xs={12} lg={6}>
                            {data.items && data.items?.length > 0 ? (
                                data.items?.map((item) => (
                                    <OrderProductItem
                                        orderProductData={item}
                                    />
                                ))
                            ) : (
                                <></>
                            )}
                        </Grid>
                    )}
                </Grid>
            </PageContainer>
        </>
    )
}

export default OrderDetailPage
