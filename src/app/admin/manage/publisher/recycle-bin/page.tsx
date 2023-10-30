'use client'
import React, { useEffect } from 'react'
import { Alert, AlertTitle, Box, Button, Grid, } from '@mui/material'
import { toast } from 'react-toastify';
import { useConfirm } from 'material-ui-confirm';
import { useRouter } from 'next/navigation';
import { IconArrowBackUp } from '@tabler/icons-react';
import PageContainer from '@/components/admin/container/PageContainer'
import DashboardCard from '@/components/shared/DashboardCard'
import RecycleBinPublisherTableData from '@/components/admin/Publisher/RecycleBinPublisherTableData/RecycleBinPublisherTableData';
import useAPIBookPublisher from '@/lib/hooks/api/useAPIBookPublisher';
import { useInView } from 'react-intersection-observer';

const publisherRecycleBinPage = () => {
    const router = useRouter()
    const confirm = useConfirm();
    const { ref, inView } = useInView(); // Gán ref theo dõi div Spinner
    const { getPublisherTrashListPaginated, destroyPublisherById, restorePublisherById } = useAPIBookPublisher()
    const { paginatedData: publisherTrashList, isReachedEnd, setSize, error, isLoading, mutate } = getPublisherTrashListPaginated()

    const handleDestroyData = async (id: number) => {
        confirm({
            title: `Đồng ý xóa ${id} ?`,
            description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
        })
            .then(async () => {
                try {
                    await destroyPublisherById(id)
                    mutate()
                    toast.success("Delete publisher complete id: " + id)
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
                    await restorePublisherById(id)
                    mutate()
                    toast.success("Restore publisher complete id: " + id)
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
                        title='Recycle bin publisher List'
                        subtitle='Manage recycle bin publisher List'
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
                            <RecycleBinPublisherTableData
                                handleDestroyData={handleDestroyData}
                                handleRestoreData={handleRestoreData}
                                recycleBinList={publisherTrashList}
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

export default publisherRecycleBinPage
