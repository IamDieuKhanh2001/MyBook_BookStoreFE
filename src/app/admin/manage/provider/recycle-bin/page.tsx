'use client'
import React from 'react'
import { Alert, AlertTitle, Box, Button, Grid, } from '@mui/material'
import { toast } from 'react-toastify';
import { useConfirm } from 'material-ui-confirm';
import { useRouter } from 'next/navigation';
import { IconArrowBackUp } from '@tabler/icons-react';
import PageContainer from '@/components/admin/container/PageContainer'
import DashboardCard from '@/components/shared/DashboardCard'
import RecycleBinProviderTableData from '@/components/admin/Provider/RecycleBinProviderTableData/RecycleBinProviderTableData';
import useAPIBookProvider from '@/lib/hooks/api/useAPIBookProvider';

const bookProviderRecycleBinPage = () => {
    const router = useRouter()
    const confirm = useConfirm();
    const { getProviderTrashList, restoreProviderById, destroyProviderById } = useAPIBookProvider()
    const { data, error, isLoading, mutate } = getProviderTrashList()

    const handleDestroyData = async (id: number) => {
        confirm({
            title: `Đồng ý xóa ${id} ?`,
            description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
        })
            .then(async () => {
                try {
                    await destroyProviderById(id)
                    mutate()
                    toast.success("Delete provider complete id: " + id)
                }
                catch (e) {
                    toast.error("Something when wrong, please try again")
                }
            })
    }

    const handleRestoreData = async (id: number) => {
        confirm({
            title: `Đồng ý phục hồi ${id} ?`,
            description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
        })
            .then(async () => {
                try {
                    await restoreProviderById(id)
                    mutate()
                    toast.success("Restore provider complete id: " + id)
                }
                catch (e) {
                    toast.error("Something when wrong, please try again")
                }
            })
    }
    return (
        <>
            <PageContainer title='recycle bin' description='recycle bin'>
                <Grid item xs={12} lg={8}>
                    <DashboardCard
                        title='Recycle bin provider List'
                        subtitle='Manage recycle bin provider List'
                    >
                        <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                            <Button
                                startIcon={<IconArrowBackUp />}
                                color="secondary"
                                size='small' disableElevation variant="contained" href=""
                                sx={{ marginBottom: 2 }}
                                onClick={() => {
                                    router.back()
                                }}
                            >
                                Trở về
                            </Button>
                            {/* {error && (
                                <Alert sx={{ mb: 2 }} severity="error">
                                    <AlertTitle>Error</AlertTitle>
                                    Something when wrong — <strong>check your connection and reload page!</strong>
                                </Alert>
                            )} */}
                            <RecycleBinProviderTableData
                                recycleBinList={data}
                                handleDestroyData={handleDestroyData}
                                handleRestoreData={handleRestoreData}
                            />
                        </Box>
                    </DashboardCard>
                </Grid>
            </PageContainer>
        </>
    )
}

export default bookProviderRecycleBinPage
