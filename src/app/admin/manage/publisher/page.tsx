'use client'
import PageContainer from '@/components/admin/container/PageContainer';
import { useConfirm } from 'material-ui-confirm';
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { Alert, AlertTitle, Box, Button, Grid, } from '@mui/material'
import DashboardCard from '@/components/shared/DashboardCard';
import { IconPlus } from '@tabler/icons-react';
import { IconTrash } from '@tabler/icons-react';
import PublisherTableData from '@/components/admin/Publisher/PublisherTableData/PublisherTableData';
import CreatePublisherModal from '@/components/admin/Publisher/CreatePublisherModal/CreatePublisherModal';
import UpdatePublisherModal from '@/components/admin/Publisher/UpdatePublisherModal/UpdatePublisherModal';
import useAPIBookPublisher from '@/lib/hooks/api/useAPIBookPublisher';
import { useInView } from 'react-intersection-observer';

const publisherPage = () => {
    const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
    const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
    const [publisherSelected, setPublisherSelected] = useState<IPublisher | null>(null);
    const confirm = useConfirm();
    const [filters, setFilters] = useState({
        limit: '4'
    });
    const { ref, inView } = useInView(); // Gán ref theo dõi div Spinner
    const { getPublisherListPaginated, deletePublisherById } = useAPIBookPublisher()
    const { paginatedData, isReachedEnd, setSize, error, isLoading, mutate } = getPublisherListPaginated(filters.limit)

    const handleDeleteData = async (id: number) => {
        confirm({
            title: `Đồng ý xóa ${id} ?`,
            description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
        })
            .then(async () => {
                try {
                    await deletePublisherById(id)
                    mutate()
                    toast.success("Delete publisher complete id: " + id)
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
            <PageContainer title='publisher CRUD' description='CRUD Operation for publisher'>
                <Grid item xs={12} lg={8}>
                    <DashboardCard
                        title='Danh sách nhà xuất bản'
                        subtitle='Quản lý nhà xuất bản sản phẩm'
                    >
                        <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                            {error && (
                                <Alert sx={{ mb: 2 }} severity="error">
                                    <AlertTitle>Error</AlertTitle>
                                    Something when wrong — <strong>check your connection and reload page!</strong>
                                </Alert>
                            )}
                            <Button
                                sx={{ mt: 2 }}
                                startIcon={<IconPlus />}
                                color="success"
                                size='small'
                                disableElevation
                                variant="contained"
                                onClick={() => {
                                    setShowModalCreate(true);
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
                                href='/admin/manage/publisher/recycle-bin'
                            >
                                Recycle bin
                            </Button>
                            <PublisherTableData
                                publisherList={paginatedData}
                                handleDeleteData={handleDeleteData}
                                setPublisherSelected={setPublisherSelected}
                                setShowModalUpdate={setShowModalUpdate}
                                isReachedEnd={isReachedEnd}
                                loadMoreRef={ref}
                            />
                        </Box>
                    </DashboardCard>
                </Grid>
                <CreatePublisherModal
                    showModalCreate={showModalCreate}
                    setShowModalCreate={setShowModalCreate}
                    mutate={mutate}
                />
                <UpdatePublisherModal
                    publisherSelected={publisherSelected}
                    setPublisherSelected={setPublisherSelected}
                    setShowModalUpdate={setShowModalUpdate}
                    showModalUpdate={showModalUpdate}
                    mutate={mutate}
                />
            </PageContainer>
        </>
    )
}

export default publisherPage
