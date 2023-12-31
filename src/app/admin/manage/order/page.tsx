'use client'

import PageContainer from '@/components/admin/container/PageContainer'
import DashboardCard from '@/components/shared/DashboardCard'
import React from 'react'
import { Box, Button, Grid, Alert, AlertTitle, } from '@mui/material'
import OrderTableData from '@/components/admin/Order/OrderTableData/OrderTableData'
import useAPIOrder from '@/lib/hooks/api/useAPIOrder'
import { useInView } from 'react-intersection-observer'
import OrderFilter from '@/components/admin/Order/OrderFilter/OrderFilter'
import DownloadReportModal from '@/components/admin/Order/DownloadReportModal/DownloadReportModal'

const OrderPage = () => {
    const [filters, setFilters] = React.useState({
        limit: '10',
        email: '',
        status: '',
        payment_status: '',
    });
    const { getAllOrderPaginated } = useAPIOrder()
    const {
        paginatedData,
        setSize,
        isReachedEnd,
        error,
        isLoading
    } = getAllOrderPaginated(filters.limit, filters.email, filters.status, filters.payment_status)
    const { ref, inView } = useInView(); // Gán ref theo dõi div Spinner

    React.useEffect(() => {
        if (inView) {
            setSize((previousSize) => previousSize + 1)
        }
    }, [inView]);

    return (
        <>
            <PageContainer title='Order' description='My CRUD Operation for order'>
                <Grid item xs={12} lg={8}>
                    <DashboardCard
                        title='Danh sách đơn hàng'
                        subtitle='Quản lý đơn hàng'
                        action={
                            <DownloadReportModal />
                        }
                    >
                        <Box sx={{ width: { xs: '280px', sm: 'auto' } }}>
                            {error && (
                                <Alert sx={{ mb: 2 }} severity="error">
                                    <AlertTitle>Error</AlertTitle>
                                    Something when wrong — <strong>check your connection and reload page!</strong>
                                </Alert>
                            )}
                            <OrderFilter filters={filters} setFilters={setFilters} />
                            <OrderTableData
                                orderListLoaded={paginatedData}
                                isReachedEnd={isReachedEnd}
                                loadMoreRef={ref}
                            />
                        </Box>
                    </DashboardCard>
                </Grid>
            </PageContainer>
        </>
    )
}

export default OrderPage
