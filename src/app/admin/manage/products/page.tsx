'use client'
import PageContainer from '@/components/admin/container/PageContainer'
import DashboardCard from '@/components/shared/DashboardCard'
import { Box, Button, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography, } from '@mui/material'
import { IconEdit, IconEye, IconTrash } from '@tabler/icons-react'
import React, { useState } from 'react'
import { categories as categoriesSample } from '@/SampleData/categories'
import { useRouter } from 'next/navigation'
import AdminSearchBar from '@/components/shared/AdminSearchBar/AdminSearchBar'
import { IconPlus } from '@tabler/icons-react'

const ProductManagementPage = () => {
    const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
    const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
    const router = useRouter()
    const [searchKeyword, setSearchKeyword] = useState("")

    return (
        <>
            <PageContainer title='Categories CRUD' description='My CRUD Operation for categories'>
                <Grid item xs={12} lg={8}>
                    <DashboardCard
                        title='Product List'
                        subtitle='Manage product'
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
                                href='/admin/manage/products/add'>
                                Thêm sản phẩm mới
                            </Button>
                            <Table
                                aria-label="simple table"
                                sx={{
                                    whiteSpace: "nowrap",
                                    mt: 2
                                }}
                            >
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                Mã số
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                Tên
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                Phân loại
                                            </Typography>
                                        </TableCell>
                                        <TableCell align='right'>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                Xem chi tiết
                                            </Typography>
                                        </TableCell>
                                        <TableCell align='right'>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                Sửa
                                            </Typography>
                                        </TableCell>
                                        <TableCell align='right'>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                Xóa
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {categoriesSample.length > 0 ? (
                                        (categoriesSample.map((category: any) => (
                                            <TableRow key={category.name}>
                                                <TableCell>
                                                    <Typography
                                                        sx={{
                                                            fontSize: "15px",
                                                            fontWeight: "500",
                                                        }}
                                                    >
                                                        {category.id}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Box>
                                                            <Typography variant="subtitle2" fontWeight={600}>
                                                                {category.name}
                                                            </Typography>
                                                            <Typography
                                                                color="textSecondary"
                                                                sx={{
                                                                    fontSize: "13px",
                                                                }}
                                                            >
                                                                {category.post}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                                        {category.pname}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Button color='success' size="small">
                                                        <IconEye />
                                                    </Button>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Button color='info' size="small" onClick={() => {
                                                        router.push(`/admin/manage/products/edit/${category.id}`)
                                                    }}>
                                                        <IconEdit />
                                                    </Button>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Button color='error' size="small">
                                                        <IconTrash />
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        )))
                                    ) : (
                                        <TableRow>
                                            <TableCell colSpan={5}>
                                                <Typography align="center" variant="h4" mt={2}>
                                                    Empty data list
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </Box>
                    </DashboardCard>
                </Grid>
            </PageContainer>
        </>
    )
}

export default ProductManagementPage
