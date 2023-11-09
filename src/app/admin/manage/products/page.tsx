'use client'
import PageContainer from '@/components/admin/container/PageContainer'
import DashboardCard from '@/components/shared/DashboardCard'
import { Box, Button, Grid, Alert, AlertTitle } from '@mui/material'
import { IconTrash } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AdminSearchBar from '@/components/shared/AdminSearchBar/AdminSearchBar'
import { IconPlus } from '@tabler/icons-react'
import useAPIBook from '@/lib/hooks/api/useAPIBook'
import ProductTableData from '@/components/admin/Product/ProductTableData/ProductTableData'
import { toast } from 'react-toastify'
import { useConfirm } from 'material-ui-confirm'
import { useInView } from 'react-intersection-observer'

const ProductManagementPage = () => {
    const confirm = useConfirm();
    const { ref, inView } = useInView(); // Gán ref theo dõi div Spinner
    const [filters, setFilters] = useState({
        limit: '10',
        search: '',
    });
    const { getBookListPaginated, deleteBook } = useAPIBook()
    const { paginatedData, setSize, isReachedEnd, error, isLoading, mutate } = getBookListPaginated(filters.limit, filters.search)

    const handleDeleteData = async (isbnCode: string) => {
        confirm({
            title: `Đồng ý xóa ${isbnCode} ?`,
            description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
        })
            .then(async () => {
                try {
                    await deleteBook(isbnCode)
                    mutate()
                    toast.success("Delete book complete isbn Code: " + isbnCode)
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
            <PageContainer title='Categories CRUD' description='My CRUD Operation for categories'>
                <Grid item xs={12} lg={8}>
                    <DashboardCard
                        title='Product List'
                        subtitle='Manage product'
                    >
                        <Box sx={{ width: { xs: '280px', sm: 'auto' } }}>
                            {error && (
                                <Alert sx={{ mb: 2 }} severity="error">
                                    <AlertTitle>Error</AlertTitle>
                                    Something when wrong — <strong>check your connection and reload page!</strong>
                                </Alert>
                            )}
                            <AdminSearchBar
                                setSearchKeyWord={(value: string) => setFilters({ ...filters, search: value })}
                                placeholderText='Nhập mã ISBN hoặc tiêu đề sách'
                            />
                            <Button
                                sx={{ mt: 2 }}
                                startIcon={<IconPlus />}
                                color="success"
                                size='small'
                                disableElevation
                                variant="contained"
                                href='/admin/manage/products/add'>
                                Thêm sản phẩm mới
                            </Button>
                            <Button
                                sx={{ mt: 2, ml: 2 }}
                                startIcon={<IconTrash />}
                                color="error"
                                size='small'
                                disableElevation
                                variant="contained"
                                href='/admin/manage/products/recycle-bin'
                            >
                                Recycle bin
                            </Button>
                            <ProductTableData
                                bookListLoaded={paginatedData}
                                handleDeleteData={handleDeleteData}
                                isReachedEnd={isReachedEnd}
                                loadMoreRef={ref}
                            />
                        </Box>
                    </DashboardCard>
                </Grid>
            </PageContainer>
        </>
    )
}

export default ProductManagementPage
