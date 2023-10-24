'use client'
import PageContainer from '@/components/admin/container/PageContainer'
import DashboardCard from '@/components/shared/DashboardCard'
import { Box, Button, Grid, Alert, AlertTitle } from '@mui/material'
import { IconEdit, IconEye, IconTrash } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AdminSearchBar from '@/components/shared/AdminSearchBar/AdminSearchBar'
import { IconPlus } from '@tabler/icons-react'
import useAPIBook from '@/lib/hooks/api/useAPIBook'
import ProductTableData from '@/components/admin/Product/ProductTableData/ProductTableData'
import { toast } from 'react-toastify'
import { useConfirm } from 'material-ui-confirm'
import { IBook } from '../../../../../types/IBook'
import { useInView } from 'react-intersection-observer'
import CircularProgress from '@mui/material/CircularProgress';

const ProductManagementPage = () => {
    const confirm = useConfirm();
    const [bookLoaded, setBookLoaded] = useState<IBook[]>([]);
    const { ref, inView } = useInView(); // Gán ref theo dõi div Spinner
    const [isLastPage, setIsLastPage] = useState(false)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [filters, setFilters] = useState({
        search: '',
        fromTo: '',
        sortBy: '',
    });
    const { getBookList, deleteBook } = useAPIBook()
    const { data, error, isLoading, mutate } = getBookList(page, limit)

    const handleDeleteData = async (isbnCode: string) => {
        confirm({
            title: `Đồng ý xóa ${isbnCode} ?`,
            description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
        })
            .then(async () => {
                try {
                    await deleteBook(isbnCode)
                    mutate()
                    const updatedBooks: IBook[] = bookLoaded.filter((book) => book.isbn_code !== isbnCode);
                    setBookLoaded(updatedBooks);
                    toast.success("Delete book complete isbn Code: " + isbnCode)
                }
                catch (e) {
                    toast.error("Something when wrong, please try again")
                }
            })
    }

    const LoadProductNextPage = () => {
        const nextPage = page + 1;
        if (nextPage > 1 && !isLastPage) {
            setPage(nextPage)
        }
    };

    useEffect(() => {
        if (inView) {
            LoadProductNextPage();
        }
    }, [inView]);

    useEffect(() => {
        if (!isLoading && data) {
            setBookLoaded(prevProducts => {
                // Kiểm tra xem dữ liệu mới có thay đổi không
                if (JSON.stringify(prevProducts) === JSON.stringify([...prevProducts, ...data])) {
                    return prevProducts; // Không thay đổi, trả về state hiện tại
                }
                return [...prevProducts, ...data]; // Cập nhật state với dữ liệu mới
            });
            console.log(">>>>>>>>>>>>>>>PRODUCT " + bookLoaded)
            if (data?.length > 0) {
                setIsLastPage(false)
            } else {
                setIsLastPage(true);
            }
        }
    }, [data, isLoading]);


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
                            <AdminSearchBar />
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
                                bookListLoaded={bookLoaded}
                                handleDeleteData={handleDeleteData}
                                isLastPage={isLastPage}
                                isLoading={isLoading}
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
