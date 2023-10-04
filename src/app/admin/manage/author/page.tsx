'use client'
import PageContainer from '@/components/admin/container/PageContainer';
import { useConfirm } from 'material-ui-confirm';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Alert, AlertTitle, Box, Button, Grid, } from '@mui/material'
import DashboardCard from '@/components/shared/DashboardCard';
import { IconPlus } from '@tabler/icons-react';
import { IconTrash } from '@tabler/icons-react';
import AuthorTableData from '@/components/admin/Author/AuthorTableData/AuthorTableData';
import CreateAuthorModal from '@/components/admin/Author/CreateAuthorModal/CreateAuthorModal';
import UpdateAuthorModal from '@/components/admin/Author/UpdateAuthorModal/UpdateAuthorModal';

const authorPage = () => {
    const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
    const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
    const [authorSelected, setAuthorSelected] = useState<IAuthor | null>(null);
    const confirm = useConfirm();

    const list = [
        {
            id: 8,
            name: "Nguyem Van 1",
            created_at: "2023-10-03T11:40:29.000+07:00",
            updated_at: "2023-10-03T11:40:29.000+07:00",
            deleted_at: null
        },
        {
            id: 7,
            name: "Van 2",
            created_at: "2023-10-03T11:40:29.000+07:00",
            updated_at: "2023-10-03T11:40:29.000+07:00",
            deleted_at: null
        },
    ]
    const handleDeleteData = async (id: number) => {
        confirm({
            title: `Đồng ý xóa ${id} ?`,
            description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
        })
            .then(async () => {
                try {

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
                            {/* {error && (
                                <Alert sx={{ mb: 2 }} severity="error">
                                    <AlertTitle>Error</AlertTitle>
                                    Something when wrong — <strong>check your connection and reload page!</strong>
                                </Alert>
                            )} */}
                            <Alert sx={{ mb: 2 }} severity="error">
                                <AlertTitle>Error</AlertTitle>
                                Something when wrong — <strong>check your connection and reload page!</strong>
                            </Alert>
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
                                authorList={list}
                                handleDeleteData={handleDeleteData}
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