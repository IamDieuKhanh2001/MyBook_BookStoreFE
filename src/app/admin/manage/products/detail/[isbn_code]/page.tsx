'use client'
import React from 'react'
import {
  Grid,
  Box,
  Alert,
  AlertTitle,
} from '@mui/material'
import PageContainer from '@/components/admin/container/PageContainer';
import DashboardCard from '@/components/shared/DashboardCard';
import CustomButton from '@/components/forms/theme-elements/CustomButton';
import { IconArrowBackUp, IconEdit } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import useAPIBook from '@/lib/hooks/api/useAPIBook';
import ProductDetailTable from '@/components/admin/Product/ProductDetailTable/ProductDetailTable';
import ImageList from '@/components/admin/Product/ImageList/ImageList';

interface IProductManagementDetailPageProps {
  params: {
    isbn_code: string;
  };
}
const ProductManagementDetailPage = ({ params }: IProductManagementDetailPageProps) => {
  const router = useRouter()
  const { isbn_code } = params
  const { getBookDetail } = useAPIBook()
  const { data, isLoading, error, mutate } = getBookDetail(isbn_code)

  return (
    <>
      <PageContainer title='detail' description=''>
        <Grid item xs={12} lg={8}>
          <DashboardCard
            title={`Sản phẩm: ${data.name}`}
            subtitle={`ISBN ID: ${isbn_code}`}
          >
            <Box sx={{ width: { xs: '280px', sm: 'auto' } }}>
              {error && <Alert sx={{ mb: 2 }} severity="error">
                <AlertTitle>Error</AlertTitle>
                Something when wrong — <strong>check your connection and reload page!</strong>
              </Alert>}
              <CustomButton
                startIcon={<IconArrowBackUp />}
                color="secondary"
                size='small' disableElevation variant="contained" href=""
                sx={{ mr: 2 }}
                onClick={() => {
                  router.push('/admin/manage/products')
                }}
              >
                Trở về
              </CustomButton>
              {!error && !isLoading && (
                <>
                  <CustomButton
                    startIcon={<IconEdit />}
                    color="success"
                    size='small'
                    disableElevation
                    variant="contained"
                    href={`/admin/manage/products/edit/${data.isbn_code}`}>
                    Chỉnh sửa thông tin
                  </CustomButton>
                  <ProductDetailTable
                    data={data}
                  />
                </>
              )}
            </Box>
          </DashboardCard>
          <Box sx={{ mt: 4 }}>
            <DashboardCard
              title={`Danh sách ảnh`}
            >
              {
                !error && data.images && data.images.length > 0
                  ?
                  (<ImageList
                    imgList={data.images}
                  />) : (
                    <></>
                  )
              }
            </DashboardCard>
          </Box>
        </Grid>
      </PageContainer>

    </>
  )
}

export default ProductManagementDetailPage
