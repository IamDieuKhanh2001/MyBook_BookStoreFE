'use client'
import PageContainer from '@/components/admin/container/PageContainer'
import DashboardCard from '@/components/shared/DashboardCard'
import { Alert, AlertTitle, Box, Button, Grid, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useConfirm } from 'material-ui-confirm'
import { toast } from 'react-toastify';
import { IconPlus, IconTrash } from '@tabler/icons-react'
import { IBookLanguage } from '../../../../../types/IBookLanguage'
import LanguageTableData from '@/components/admin/BookLanguage/LanguageTableData/LanguageTableData'
import CreateLanguageModal from '@/components/admin/BookLanguage/CreateLanguageModal/CreateLanguageModal'
import UpdateLanguageModal from '@/components/admin/BookLanguage/UpdateLanguageModal/UpdateLanguageModal'
import useAPIBookLanguage from '@/lib/hooks/api/useAPIBookLanguage'

const bookLanguagePage = () => {
    const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
    const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
    const [languageSelected, setLanguageSelected] = useState<IBookLanguage | null>(null);
    const confirm = useConfirm();

    const { getLanguageList, deleteLanguageById} = useAPIBookLanguage()
    const { data, mutate, isLoading, error } = getLanguageList()

    const handleDeleteData = async (id: number) => {
        confirm({
            title: `Đồng ý xóa ${id} ?`,
            description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
        })
            .then(async () => {
                try {
                    await deleteLanguageById(id)
                    mutate()
                    toast.success("Delete Language complete id: " + id)
                }
                catch (e) {
                    toast.error("Something when wrong, please try again")
                }
            })
    }

    return (
        <>
            <PageContainer title='language CRUD' description='CRUD Operation for language'>
                <Grid item xs={12} lg={8}>
                    <DashboardCard
                        title='Language List'
                        subtitle='Manage language list'
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
                                href='/admin/manage/book-lang/recycle-bin'
                            >
                                Recycle bin
                            </Button>
                            <LanguageTableData
                                languageList={data}
                                setShowModalUpdate={setShowModalUpdate}
                                setLanguageSelected={setLanguageSelected}
                                handleDeleteData={handleDeleteData}
                            />
                        </Box>
                    </DashboardCard>
                </Grid>
                <CreateLanguageModal
                    setShowModalCreate={setShowModalCreate}
                    showModalCreate={showModalCreate}
                />
                <UpdateLanguageModal
                    showModalUpdate={showModalUpdate}
                    setShowModalUpdate={setShowModalUpdate}
                    languageSelected={languageSelected}
                    setLanguageSelected={setLanguageSelected}
                />
            </PageContainer>
        </>
    )
}

export default bookLanguagePage