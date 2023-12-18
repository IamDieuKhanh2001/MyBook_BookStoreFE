'use client'
import React from 'react'
import { useConfirm } from 'material-ui-confirm';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { Alert, AlertTitle, Box, Grid, Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import PageContainer from '@/components/admin/container/PageContainer'
import DashboardCard from '@/components/shared/DashboardCard'
import { IconArrowBackUp, IconHistory } from '@tabler/icons-react';
import { IconTrashX } from '@tabler/icons-react';

const ProductRecycleBinPage = () => {
    const router = useRouter()
    const confirm = useConfirm();

    const handleDestroyData = async (id: number) => {
        confirm({
            title: `Đồng ý xóa ${id} ?`,
            description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
        })
            .then(async () => {
                try {

                    toast.success("Delete book complete id: " + id)
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

                    toast.success("Restore book complete id: " + id)
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
                        title='Recycle bin book List'
                        subtitle='Manage recycle bin book List'
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
                            {/* {error && (
                                <Alert sx={{ mb: 2 }} severity="error">
                                    <AlertTitle>Error</AlertTitle>
                                    Something when wrong — <strong>check your connection and reload page!</strong>
                                </Alert>
                            )} */}
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
                                                Tên danh mục
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                Ngày xóa
                                            </Typography>
                                        </TableCell>
                                        <TableCell align='right'>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                Khôi phục
                                            </Typography>
                                        </TableCell>
                                        <TableCell align='right'>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                Xóa vĩnh viễn
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <Typography
                                                sx={{
                                                    fontSize: "15px",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                1
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="subtitle2" fontWeight={500}>
                                                sss
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="subtitle2" fontWeight={500}>
                                                
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="right">
                                            <Button
                                                color='info'
                                                size="small"
                                                // onClick={() => handleRestoreData(language.id)}
                                            >
                                                <IconHistory />
                                            </Button>
                                        </TableCell>
                                        <TableCell align="right">
                                            <Button
                                                color='error'
                                                size="small"
                                                // onClick={() => handleDestroyData(language.id)}
                                            >
                                                <IconTrashX />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Typography
                                                sx={{
                                                    fontSize: "15px",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                2
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="subtitle2" fontWeight={500}>
                                                aaa
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="subtitle2" fontWeight={500}>
                                                
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="right">
                                            <Button
                                                color='info'
                                                size="small"
                                            >
                                                <IconHistory />
                                            </Button>
                                        </TableCell>
                                        <TableCell align="right">
                                            <Button
                                                color='error'
                                                size="small"
                                            >
                                                <IconTrashX />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </DashboardCard>
                </Grid>
            </PageContainer>
        </>
    )
}

export default ProductRecycleBinPage
