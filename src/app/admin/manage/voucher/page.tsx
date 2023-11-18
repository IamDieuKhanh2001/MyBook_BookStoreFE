'use client'
import PageContainer from '@/components/admin/container/PageContainer';
import { useConfirm } from 'material-ui-confirm';
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { Alert, AlertTitle, Box, Button, Grid, } from '@mui/material'
import DashboardCard from '@/components/shared/DashboardCard';
import { IconPlus } from '@tabler/icons-react';
import { IconTrash } from '@tabler/icons-react';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/navigation';
import VoucherTableData from '@/components/admin/Voucher/VoucherTableData/VoucherTableData';
import VoucherTab from '@/components/admin/Voucher/VoucherTab/VoucherTab';

const VoucherManagePage = () => {
    const confirm = useConfirm();
    const router = useRouter()

    const { ref, inView } = useInView(); // Gán ref theo dõi div Spinner

    const handleDeleteData = async (id: number) => {
        confirm({
            title: `Đồng ý xóa ${id} ?`,
            description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
        })
            .then(async () => {
                try {

                    toast.success("Delete voucher complete id: " + id)
                }
                catch (e) {
                    toast.error("Something when wrong, please try again")
                }
            })
    }

    // useEffect(() => {
    //     if (inView) {
    //         setSize((previousSize) => previousSize + 1)
    //     }
    // }, [inView]);

    return (
        <>
            <PageContainer title='Voucher CRUD' description='CRUD Operation for Voucher'>
                <Grid item xs={12} lg={8}>
                    <DashboardCard
                        title='Voucher List'
                        subtitle='Manage Voucher list'
                    >
                        <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                            {/* {error && (
                                <Alert sx={{ mb: 2 }} severity="error">
                                    <AlertTitle>Error</AlertTitle>
                                    Something when wrong — <strong>check your connection and reload page!</strong>
                                </Alert>
                            )} */}
                            <Button
                                sx={{ mt: 2 }}
                                startIcon={<IconPlus />}
                                color="success"
                                size='small'
                                disableElevation
                                variant="contained"
                                onClick={() => {
                                    router.push('/admin/manage/voucher/add');
                                }}>
                                Add new
                            </Button>
                            <Button
                                sx={{ mt: 2, ml: 2 }}
                                startIcon={<IconTrash />}
                                color="error"
                                size='small'
                                disableElevation
                                variant="contained"
                            >
                                Recycle bin
                            </Button>
                            <VoucherTab />
                        </Box>
                    </DashboardCard>
                </Grid>
            </PageContainer>
        </>
    )
}

export default VoucherManagePage
