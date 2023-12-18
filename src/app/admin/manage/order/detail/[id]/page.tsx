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
import { useConfirm } from 'material-ui-confirm';
import { toast } from 'react-toastify';
import { errorHandler } from '@/lib/utils/ErrorHandler';

interface IOrderDetailPageProps {
    params: {
        id: number;
    };
}
const OrderDetailPage = (props: IOrderDetailPageProps) => {
    const router = useRouter()
    const { params } = props
    const { getOrderDetail, deliveringOrder, confirmOrder, cancelOrder } = useAPIOrder()
    const { data, error, isLoading, mutate } = getOrderDetail(params.id)
    const confirm = useConfirm();

    const handleDeliveringOrder = async (id: number) => {
        confirm({
            title: `Đồng ý vận chuyển ${id} ?`,
            description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
        })
            .then(async () => {
                try {
                    await deliveringOrder(id)
                    mutate()
                    toast.success("Đã chuyển sang vận chuyển id: " + id)
                }
                catch (e) {
                    errorHandler(e)
                }
            })
    }

    const handleConfirmOrder = async (id: number) => {
        confirm({
            title: `Đồng ý xác nhận ${id} ?`,
            description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
        })
            .then(async () => {
                try {
                    await confirmOrder(id)
                    mutate()
                    toast.success("Đã xác nhận thành công, khi đơn hàng chuẩn bị hoàn tất nhấn xác nhận vận chuyển id: " + id)
                }
                catch (e) {
                    errorHandler(e)
                }
            })
    }

    const handleCancelOrder = async (id: number) => {
        confirm({
            title: `Đồng ý xóa ${id} ?`,
            description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
        })
            .then(async () => {
                try {
                    await cancelOrder(id)
                    mutate()
                    toast.success("Đã Hủy đơn hàng mã số: " + id)
                }
                catch (e) {
                    errorHandler(e)
                }
            })
    }

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
                                {error && <Alert sx={{ mb: 2 }} severity="error">
                                    <AlertTitle>Error</AlertTitle>
                                    Something when wrong — <strong>check your connection and reload page!</strong>
                                </Alert>}
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
                                    <OrderDetailTable
                                        orderData={data}
                                        handleDeliveringOrder={handleDeliveringOrder}
                                        handleConfirmOrder={handleConfirmOrder}
                                        handleCancelOrder={handleCancelOrder}
                                    />
                                )}
                            </Box>
                        </DashboardCard>
                        {
                            data?.review &&
                            <OrderReview userData={data.user} reviewData={data.review} />
                        }
                    </Grid>
                    {!error && !isLoading && (
                        <Grid item xs={12} lg={6}>
                            {data.items && data.items?.length > 0 ? (
                                data.items?.map((item) => (
                                    <OrderProductItem
                                        key={item.product.id}
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
