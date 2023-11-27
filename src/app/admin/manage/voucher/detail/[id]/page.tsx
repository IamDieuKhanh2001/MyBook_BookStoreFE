'use client'
import VoucherDetailTable from '@/components/admin/Voucher/VoucherDetailTable/VoucherDetailTable';
import PageContainer from '@/components/admin/container/PageContainer';
import CustomButton from '@/components/forms/theme-elements/CustomButton';
import DashboardCard from '@/components/shared/DashboardCard';
import useAPIVoucher from '@/lib/hooks/api/useAPIVoucher';
import { Alert, AlertTitle, Box, Grid } from '@mui/material';
import { IconArrowBackUp, IconEdit } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import React from 'react'

interface IVoucherDetailPageProps {
    params: {
        id: number;
    };
}
const VoucherDetailPage = (props: IVoucherDetailPageProps) => {
    const router = useRouter()
    const { params } = props
    const { getVoucherDetail } = useAPIVoucher()
    const { data, error, isLoading } = getVoucherDetail(params.id)

    return (
        <>
            <PageContainer title='detail' description=''>
                <Grid item xs={12} lg={8}>
                    <DashboardCard
                        title={`Voucher: ${data.voucher_name}`}
                        subtitle={`Mã số: ${data.id}`}
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
                                    router.push('/admin/manage/voucher')
                                }}
                            >
                                Trở về
                            </CustomButton>
                            {!error && !isLoading && (
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
                                    <VoucherDetailTable data={data} />
                                </>
                            )}
                        </Box>
                    </DashboardCard>
                </Grid>
            </PageContainer>
        </>
    )
}

export default VoucherDetailPage
