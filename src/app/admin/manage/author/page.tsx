'use client'
import PageContainer from '@/components/admin/container/PageContainer';
import { useConfirm } from 'material-ui-confirm';
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { Alert, AlertTitle, Box, Button, Grid, } from '@mui/material'
import DashboardCard from '@/components/shared/DashboardCard';
import { IconPlus } from '@tabler/icons-react';
import { IconTrash } from '@tabler/icons-react';
import AuthorTableData from '@/components/admin/Author/AuthorTableData/AuthorTableData';
import CreateAuthorModal from '@/components/admin/Author/CreateAuthorModal/CreateAuthorModal';
import UpdateAuthorModal from '@/components/admin/Author/UpdateAuthorModal/UpdateAuthorModal';
import useAPIAuthor from '@/lib/hooks/api/useAPIAuthor';
import { useInView } from 'react-intersection-observer';

const authorPage = () => {
    const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
    const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
    const [authorSelected, setAuthorSelected] = useState<IAuthor | null>(null);
    const confirm = useConfirm();
    const { ref, inView } = useInView(); // Gán ref theo dõi div Spinner

    const { getAuthorListPaginated, deleteAuthorById } = useAPIAuthor()

    const { paginatedData, error, isLoading, isReachedEnd, mutate, setSize, size } = getAuthorListPaginated()
    useEffect(() => {
        if (inView) {
            setSize(size + 1)
        }
    }, [inView]);

    const handleDeleteData = async (id: number) => {
        confirm({
            title: `Đồng ý xóa ${id} ?`,
            description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
        })
            .then(async () => {
                try {
                    await deleteAuthorById(id)
                    mutate()
                    toast.success("Delete author complete id: " + id)
                }
                catch (e) {
                    toast.error("Something when wrong, please try again")
                }
            })
    }

    return (
        <>
            <PageContainer title='Author CRUD' description='CRUD Operation for author'>
                <Grid item xs={12} lg={8}>
                    <DashboardCard
                        title='Author List'
                        subtitle='Manage author list'
                    >
                        <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                            {error && (
                                <Alert sx={{ mb: 2 }} severity="error">
                                    <AlertTitle>Error</AlertTitle>
                                    Something when wrong — <strong>check your connection and reload page!</strong>
                                </Alert>
                            )}
                            <Button
                                color='error'
                                size="small"
                                onClick={() => setSize(1)}
                            >
                                reset
                            </Button>
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
                                href='/admin/manage/author/recycle-bin'
                            >
                                Recycle bin
                            </Button>
                            <AuthorTableData
                                authorList={paginatedData}
                                handleDeleteData={handleDeleteData}
                                isReachedEnd={isReachedEnd}
                                loadMoreRef={ref}
                                setAuthorSelected={setAuthorSelected}
                                setShowModalUpdate={setShowModalUpdate}
                            />
                        </Box>
                    </DashboardCard>
                </Grid>
                <CreateAuthorModal
                    showModalCreate={showModalCreate}
                    setShowModalCreate={setShowModalCreate}
                />
                <UpdateAuthorModal
                    authorSelected={authorSelected}
                    setAuthorSelected={setAuthorSelected}
                    setShowModalUpdate={setShowModalUpdate}
                    showModalUpdate={showModalUpdate}
                />
            </PageContainer>
        </>
    )
}

export default authorPage
