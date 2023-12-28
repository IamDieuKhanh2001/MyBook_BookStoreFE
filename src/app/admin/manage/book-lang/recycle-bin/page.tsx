'use client'
import { useConfirm } from 'material-ui-confirm';
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'react-toastify';
import { Alert, AlertTitle, Box, Button, Grid, } from '@mui/material'
import PageContainer from '@/components/admin/container/PageContainer'
import DashboardCard from '@/components/shared/DashboardCard'
import { IconArrowBackUp } from '@tabler/icons-react';
import RecycleBinLanguageTableData from '@/components/admin/BookLanguage/RecycleBinLanguageTableData/RecycleBinLanguageTableData';
import useAPIBookLanguage from '@/lib/hooks/api/useAPIBookLanguage';

const bookLanguageRecycleBinPage = () => {
    const router = useRouter()
    const confirm = useConfirm();
    const { getBookLanguageTrashList, destroyBookLanguageById, restoreBookLanguageById } = useAPIBookLanguage()
    const { data, isLoading, error, mutate } = getBookLanguageTrashList()

    const handleDestroyData = async (id: number) => {
        confirm({
            title: `Đồng ý xóa ${id} ?`,
            description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
        })
            .then(async () => {
                try {
                    const res = await destroyBookLanguageById(id)
                    mutate()
                    toast.success("Delete language complete id: " + id)
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
                    const res = await restoreBookLanguageById(id)
                    mutate()
                    toast.success("Restore language complete id: " + id)
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
                        title='Danh sách các ngôn ngữ sản phẩm đã xóa'
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
                            {error && (
                                <Alert sx={{ mb: 2 }} severity="error">
                                    <AlertTitle>Error</AlertTitle>
                                    Something when wrong — <strong>check your connection and reload page!</strong>
                                </Alert>
                            )}
                            <RecycleBinLanguageTableData
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

export default bookLanguageRecycleBinPage
