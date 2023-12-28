'use client'
import PageContainer from '@/components/admin/container/PageContainer'
import DashboardCard from '@/components/shared/DashboardCard'
import React from 'react'
import { Alert, AlertTitle, Box, Button, Grid, } from '@mui/material'
import RecycleBinParentCategoryTableData from '@/components/admin/Categories/RecycleBinParentCategoryTableData/RecycleBinParentCategoryTableData'
import { IconArrowBackUp } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { useConfirm } from 'material-ui-confirm'
import useAPIParentCategory from '@/lib/hooks/api/useAPIParentCategory'

const recycleBinParentCategoryPage = () => {
  const router = useRouter()
  const confirm = useConfirm();
  const { getCategoryTrashList, destroyCategoryById, restoreCategoryById } = useAPIParentCategory()
  const { data, isLoading, error, mutate } = getCategoryTrashList()

  const handleDestroyData = async (id: number) => {
    confirm({
      title: `Đồng ý xóa ${id} ?`,
      description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
    })
      .then(async () => {
        try {
          const res = await destroyCategoryById(id)
          mutate()
          toast.success("Delete category complete id: " + id)
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
          const res = await restoreCategoryById(id)
          mutate()
          toast.success("Restore category complete id: " + id)
        }
        catch (e) {
          toast.error("Something when wrong, please try again")
        }
      })
  }
  return (
    <>
      <PageContainer title='recycle bin' description='recycle bin'>
        <Grid item xs={12} lg={8}>
          <DashboardCard
            title='Danh sách các danh mục đã xóa'
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
              <RecycleBinParentCategoryTableData
                recycleBinList={data}
                handleDestroyData={handleDestroyData}
                handleRestoreData={handleRestoreData}
              />
            </Box>
          </DashboardCard>
        </Grid>
      </PageContainer>
    </>
  )
}

export default recycleBinParentCategoryPage
