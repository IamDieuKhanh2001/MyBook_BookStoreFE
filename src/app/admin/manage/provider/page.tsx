'use client'
import { useConfirm } from 'material-ui-confirm';
import React, { useState } from 'react'
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

const BookProviderPage = () => {
    const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
    const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
    const [providerSelected, setProviderSelected] = useState<IProvider | null>(null);
    const confirm = useConfirm();
    const { getProviderList, deleteProviderById, } = useAPIBookProvider()
    const { data, error, isLoading, mutate } = getProviderList()

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
    return (
        <>
            <PageContainer title='Provider CRUD' description='CRUD Operation for provider'>
                <Grid item xs={12} lg={8}>
                    <DashboardCard
                        title='Provider List'
                        subtitle='Manage provider list'
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
                                providerList={data}
                                handleDeleteData={handleDeleteData}
                                setProviderSelected={setProviderSelected}
                                setShowModalUpdate={setShowModalUpdate}
                            />
                        </Box>
                    </DashboardCard>
                </Grid>
                <CreateProviderModal
                    setShowModalCreate={setShowModalCreate}
                    showModalCreate={showModalCreate}
                />
                <UpdateProviderModal
                    providerSelected={providerSelected}
                    setProviderSelected={setProviderSelected}
                    setShowModalUpdate={setShowModalUpdate}
                    showModalUpdate={showModalUpdate}
                />
            </PageContainer>
        </>
    )
}

export default BookProviderPage
