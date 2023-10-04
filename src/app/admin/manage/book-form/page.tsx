'use client'
import PageContainer from '@/components/admin/container/PageContainer';
import { useConfirm } from 'material-ui-confirm';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Alert, AlertTitle, Box, Button, Grid, } from '@mui/material'
import DashboardCard from '@/components/shared/DashboardCard';
import { IconPlus } from '@tabler/icons-react';
import { IconTrash } from '@tabler/icons-react';
import BookFormTableData from '@/components/admin/BookForm/BookFormTableData/BookFormTableData';
import CreateBookFormModal from '@/components/admin/BookForm/CreateBookFormModal/CreateBookFormModal';
import UpdateBookFormModal from '@/components/admin/BookForm/UpdateBookFormModal/UpdateBookFormModal';

const bookFormPage = () => {
    const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
    const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
    const [bookFormSelected, setBookFormSelected] = useState<IBookForm | null>(null);
    const confirm = useConfirm();

    const list = [
        {
            id: 8,
            name: "Form 1",
            created_at: "2023-10-03T11:40:29.000+07:00",
            updated_at: "2023-10-03T11:40:29.000+07:00",
            deleted_at: null
        },
        {
            id: 7,
            name: "Form 2",
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

                    toast.success("Delete form complete id: " + id)
                }
                catch (e) {
                    toast.error("Something when wrong, please try again")
                }
            })
    }

    return (
        <>
            <PageContainer title='Book Form CRUD' description='CRUD Operation for book form'>
                <Grid item xs={12} lg={8}>
                    <DashboardCard
                        title='Book Form List'
                        subtitle='Manage Book Form list'
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
                                href='/admin/manage/book-form/recycle-bin'
                            >
                                Recycle bin
                            </Button>
                            <BookFormTableData
                                bookFormList={list}
                                handleDeleteData={handleDeleteData}
                                setBookFormSelected={setBookFormSelected}
                                setShowModalUpdate={setShowModalUpdate}
                            />
                        </Box>
                    </DashboardCard>
                </Grid>
                <CreateBookFormModal
                    showModalCreate={showModalCreate}
                    setShowModalCreate={setShowModalCreate}
                />
                <UpdateBookFormModal
                    bookFormSelected={bookFormSelected}
                    setBookFormSelected={setBookFormSelected}
                    setShowModalUpdate={setShowModalUpdate}
                    showModalUpdate={showModalUpdate}
                />
            </PageContainer>
        </>
    )
}

export default bookFormPage
