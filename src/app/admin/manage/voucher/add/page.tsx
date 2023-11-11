'use client'
import PageContainer from '@/components/admin/container/PageContainer';
import CustomButton from '@/components/forms/theme-elements/CustomButton';
import DashboardCard from '@/components/shared/DashboardCard';
import { Box, Grid, } from '@mui/material'
import { IconArrowBackUp } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import React from 'react'
import AddVoucherForm from '@/components/admin/Voucher/AddVoucher/AddVoucherForm/AddVoucherForm';

interface FormValues {
    voucherName: string,
    voucherType: string,
    voucherCode: string,
    requireOrderMinPrice: number,
    discountPercentage: number,
    discountMaxPrice: number,
    limited: number,
    desc: string,
    startDate: string,
    endDate: string,
    status: string,
    username: string,
    userLevelId: number,
}
const AddVoucherPage = () => {
    const router = useRouter()

    return (
        <>
            <PageContainer title='Voucher CRUD' description='CRUD Operation for Voucher'>
                <Grid item xs={12} lg={8}>
                    <DashboardCard
                        title='Voucher List'
                        subtitle='Manage Voucher list'
                    >
                        <Box sx={{ width: { xs: '280px', sm: 'auto' } }}>
                            <CustomButton
                                startIcon={<IconArrowBackUp />}
                                color="secondary"
                                size='small' disableElevation variant="contained" href=""
                                sx={{ mb: 3 }}
                                onClick={() => {
                                    router.push('/admin/manage/voucher')
                                }}
                            >
                                Trở về
                            </CustomButton>
                            <AddVoucherForm />
                        </Box>
                    </DashboardCard>
                </Grid>
            </PageContainer>

        </>
    )
}

export default AddVoucherPage
