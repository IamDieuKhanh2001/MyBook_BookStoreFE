'use client'
import React, { useEffect } from 'react'
import { Alert, AlertTitle, Box, Button, Grid, } from '@mui/material'
import { toast } from 'react-toastify';
import { useConfirm } from 'material-ui-confirm';
import { useRouter } from 'next/navigation';
import { IconArrowBackUp } from '@tabler/icons-react';
import PageContainer from '@/components/admin/container/PageContainer'
import DashboardCard from '@/components/shared/DashboardCard'
import RecycleBinAuthorTableData from '@/components/admin/Author/RecycleBinAuthorTableData/RecycleBinAuthorTableData';
import useAPIAuthor from '@/lib/hooks/api/useAPIAuthor';
import { useInView } from 'react-intersection-observer';

const authorRecycleBinPage = () => {
    const router = useRouter()
    const confirm = useConfirm();
    const { getAuthorTrashListPaginated, destroyAuthorById, restoreAuthorById } = useAPIAuthor()
    const { paginatedData: authorTrashList, isReachedEnd, setSize, error, isLoading, mutate } = getAuthorTrashListPaginated()
    const { ref, inView } = useInView(); // Gán ref theo dõi div Spinner

    const handleDestroyData = async (id: number) => {
        confirm({
            title: `Đồng ý xóa ${id} ?`,
            description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
        })
            .then(async () => {
                try {
                    await destroyAuthorById(id)
                    mutate()
                    toast.success("Delete author complete id: " + id)
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
                    await restoreAuthorById(id)
                    mutate()
                    toast.success("Restore author complete id: " + id)
                }
                catch (e) {
                    toast.error("Something when wrong, please try again")
                }
            })
    }

    useEffect(() => {
        if (inView) {
            setSize((previousSize) => previousSize + 1)
        }
    }, [inView]);

    return (
        <>
            <PageContainer title='recycle bin' description='recycle bin'>
                <Grid item xs={12} lg={8}>
                    <DashboardCard
                        title='Recycle bin author List'
                        subtitle='Manage recycle bin author List'
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
                            <RecycleBinAuthorTableData
                                handleDestroyData={handleDestroyData}
                                handleRestoreData={handleRestoreData}
                                recycleBinList={authorTrashList}
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

export default authorRecycleBinPage
