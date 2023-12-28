'use client'
import { useConfirm } from 'material-ui-confirm';
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { Alert, AlertTitle, Box, Button, Grid, } from '@mui/material'
import DashboardCard from '@/components/shared/DashboardCard';
import { IconPlus } from '@tabler/icons-react';
import { IconTrash } from '@tabler/icons-react';
import PageContainer from '@/components/admin/container/PageContainer';
import ProviderTableData from '@/components/admin/Provider/ProviderTableData/ProviderTableData';
import CreateProviderModal from '@/components/admin/Provider/CreateProviderModal/CreateProviderModal';
import UpdateProviderModal from '@/components/admin/Provider/UpdateProviderModal/UpdateProviderModal';
import useAPIBookProvider from '@/lib/hooks/api/useAPIBookProvider';
import { useInView } from 'react-intersection-observer';

const BookProviderPage = () => {
    const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
    const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
    const [providerSelected, setProviderSelected] = useState<IProvider | null>(null);
    const confirm = useConfirm();
    const { ref, inView } = useInView(); // Gán ref theo dõi div Spinner
    const [filters, setFilters] = useState({
        limit: '4'
    });
    const { getProviderListPaginated, deleteProviderById, } = useAPIBookProvider()
    const { paginatedData, error, isLoading, isReachedEnd, mutate, setSize } = getProviderListPaginated(filters.limit)

    const handleDeleteData = async (id: number) => {
        confirm({
            title: `Đồng ý xóa ${id} ?`,
            description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
        })
            .then(async () => {
                try {
                    await deleteProviderById(id)
                    mutate()
                    toast.success("Delete form complete id: " + id)
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
            <PageContainer title='Provider CRUD' description='CRUD Operation for provider'>
                <Grid item xs={12} lg={8}>
                    <DashboardCard
                        title='Danh sách nhà cung cấp'
                        subtitle='Quản lý danh sách nhà cung cấp sản phẩm'
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
                                href='/admin/manage/provider/recycle-bin'
                            >
                                Recycle bin
                            </Button>
                            <ProviderTableData
                                providerList={paginatedData}
                                handleDeleteData={handleDeleteData}
                                setProviderSelected={setProviderSelected}
                                setShowModalUpdate={setShowModalUpdate}
                                isReachedEnd={isReachedEnd}
                                loadMoreRef={ref}
                            />
                        </Box>
                    </DashboardCard>
                </Grid>
                <CreateProviderModal
                    setShowModalCreate={setShowModalCreate}
                    showModalCreate={showModalCreate}
                    mutate={mutate}
                />
                <UpdateProviderModal
                    providerSelected={providerSelected}
                    setProviderSelected={setProviderSelected}
                    setShowModalUpdate={setShowModalUpdate}
                    showModalUpdate={showModalUpdate}
                    mutate={mutate}
                />
            </PageContainer>
        </>
    )
}

export default BookProviderPage
