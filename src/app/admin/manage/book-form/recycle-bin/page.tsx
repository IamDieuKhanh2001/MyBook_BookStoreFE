'use client'
import React from 'react'
import { Alert, AlertTitle, Box, Button, Grid, } from '@mui/material'
import { toast } from 'react-toastify';
import { useConfirm } from 'material-ui-confirm';
import { useRouter } from 'next/navigation';
import { IconArrowBackUp } from '@tabler/icons-react';
import PageContainer from '@/components/admin/container/PageContainer'
import DashboardCard from '@/components/shared/DashboardCard'
import RecycleBinAuthorTableData from '@/components/admin/Author/RecycleBinAuthorTableData/RecycleBinAuthorTableData';
import RecycleBinBookFormTableData from '@/components/admin/BookForm/RecycleBinBookFormTableData/RecycleBinBookFormTableData';

const bookFormRecycleBinPage = () => {
    const router = useRouter()
    const confirm = useConfirm();

    const list = [
        {
            id: 8,
            name: "aa1",
            created_at: "2023-10-03T11:40:29.000+07:00",
            updated_at: "2023-10-03T11:40:29.000+07:00",
            deleted_at: null
        },
        {
            id: 7,
            name: "aa2",
            created_at: "2023-10-03T11:40:29.000+07:00",
            updated_at: "2023-10-03T11:40:29.000+07:00",
            deleted_at: null
        },
    ]
    const handleDestroyData = async (id: number) => {
        confirm({
            title: `Đồng ý xóa ${id} ?`,
            description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
        })
            .then(async () => {
                try {

                    toast.success("Delete form complete id: " + id)
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

                    toast.success("Restore form complete id: " + id)
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
                        title='Recycle bin book form List'
                        subtitle='Manage recycle bin book form List'
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
                            <RecycleBinBookFormTableData
                                recycleBinList={list}
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

export default bookFormRecycleBinPage
