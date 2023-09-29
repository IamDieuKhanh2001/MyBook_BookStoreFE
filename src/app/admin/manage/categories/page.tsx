'use client'

import PageContainer from '@/components/admin/container/PageContainer'
import AdminSearchBar from '@/components/shared/AdminSearchBar/AdminSearchBar'
import DashboardCard from '@/components/shared/DashboardCard'
import { Box, Button, Grid, } from '@mui/material'
import { IconPlus, } from '@tabler/icons-react'
import React, { useState } from 'react'
import { useConfirm } from 'material-ui-confirm'
import useAxiosAuth from '@/lib/hooks/useAxiosAuth'
import CreateCategoriesModal from '@/components/admin/Categories/CreateCategoriesModal/CreateCategoriesModal'
import UpdateCategoriesModal from '@/components/admin/Categories/UpdateCategoriesModal/UpdateCategoriesModal'
import { toast } from 'react-toastify';
import CategoriesTableData from '@/components/admin/Categories/CategoriesTableData/CategoriesTableData'

const categoriesManagementPage = () => {
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
  const [categorySelected, setCategorySelected] = useState<IParentCategory | null>(null);
  const confirm = useConfirm();
  const axiosAuth = useAxiosAuth();

  const handleDeleteData = async (id: number) => {
    confirm({
      title: `Đồng ý xóa ${id} ?`,
      description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
    })
      .then(async () => {
        // Thực hiện hành động xóa api ở đây
        try {

          toast.success(`delete loai id: ${id}`)
        } catch (e) {
          console.log("Something when wrong, Please try again!")
          console.log("fetch fail")
          toast.error("Something when wrong, Please try again!")
        }
      })
  }

  return (
    <>
      <PageContainer title='Categories CRUD' description='My CRUD Operation for categories'>
        <Grid item xs={12} lg={8}>
          <DashboardCard
            title='Parent categories List'
            subtitle='Manage parent categories list'
          >
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
              <AdminSearchBar />
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
              <CategoriesTableData
                setShowModalUpdate={setShowModalUpdate}
                handleDeleteData={handleDeleteData}
              />
            </Box>
          </DashboardCard>
        </Grid>
        <CreateCategoriesModal
          setShowModalCreate={setShowModalCreate}
          showModalCreate={showModalCreate}
        />
        <UpdateCategoriesModal
          showModalUpdate={showModalUpdate}
          setShowModalUpdate={setShowModalUpdate}
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
        />
      </PageContainer>
    </>
  )
}

export default categoriesManagementPage
