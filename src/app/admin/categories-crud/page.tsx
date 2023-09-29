"use client"
import React, { ReactElement, useEffect, useState } from 'react'
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Button,
    Grid,
} from '@mui/material';
import { IconEye, IconEdit, IconTrash, IconPlus } from '@tabler/icons-react';
import PageContainer from '@/components/admin/container/PageContainer';
import DashboardCard from '@/components/shared/DashboardCard';
import { categories as categoriesSample } from '../../../SampleData/categories'
import Link from "next/link";
import { APIUserLogin } from '@/lib/axios/api/accountAPI';
import UpdateModal from '@/components/admin/categoryCRUD/update.modal';
import { useCustomSWR } from '@/lib/swr/useCustomSWR';
import { toast } from 'react-toastify';
import CreateModal from '@/components/admin/categoryCRUD/create.modal';
import { useConfirm } from 'material-ui-confirm';
import useAxiosAuth from '@/lib/hooks/useAxiosAuth';

const CategoriesCrudPage = () => {
    const [categorySelected, setCategorySelected] = useState<ICategory | null>(null);

    const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
    const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
    const confirm = useConfirm();
    const axiosAuth = useAxiosAuth();

    const headersCategoryAPI = {
        Authorization: `new header`
    }
    const { data, mutate, isLoading, isError } = useCustomSWR(`/api/Loai`, undefined, headersCategoryAPI);

    const handleDelete = async (id: string) => {
        confirm({
            title: 'Đồng ý xóa ?',
            description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
        })
            .then(async () => {
                // Thực hiện hành động xóa api ở đây
                try {
                    const url = `/api/Loai/${id}`;
                    const res = await axiosAuth.delete(url);
                    console.log(res)
                    mutate()
                    toast.success(`delete loai id: ${id}`)
                } catch (e) {
                    console.log("Something when wrong, Please try again!")
                    console.log("fetch fail")
                    toast.error("Something when wrong, Please try again!")
                }
            })
    };
    return (
        <PageContainer title='Categories CRUD' description='My CRUD Operation for categories'>
            <Grid container spacing={3}>
                <Grid item xs={12} lg={8}>
                    <DashboardCard
                        title='Category List'
                        subtitle='Manage category'
                    >
                        <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                            <Button
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
                                                Id
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                Loại
                                            </Typography>
                                        </TableCell>
                                        <TableCell align='right'>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                See Detail
                                            </Typography>
                                        </TableCell>
                                        <TableCell align='right'>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                Edit
                                            </Typography>
                                        </TableCell>
                                        <TableCell align='right'>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                Delete
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data?.length > 0 ? (
                                        (data?.map((category: any) => (
                                            <TableRow key={category.maLoai}>
                                                <TableCell>
                                                    <Typography
                                                        sx={{
                                                            fontSize: "15px",
                                                            fontWeight: "500",
                                                        }}
                                                    >
                                                        {category.maLoai}
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
                                                                {category.tenLoai}
                                                            </Typography>
                                                            <Typography
                                                                color="textSecondary"
                                                                sx={{
                                                                    fontSize: "13px",
                                                                }}
                                                            >
                                                                sub name
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Button color='success' size="small">
                                                        <IconEye />
                                                    </Button>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Button
                                                        color='info'
                                                        size="small"
                                                        onClick={() => {
                                                            setCategorySelected(category);
                                                            setShowModalUpdate(true);
                                                        }}>
                                                        <IconEdit />
                                                    </Button>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Button color='error' size="small"
                                                        onClick={() => handleDelete(category.maLoai)}
                                                    >
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
                <UpdateModal
                    showModalUpdate={showModalUpdate}
                    setShowModalUpdate={setShowModalUpdate}
                    categorySelected={categorySelected}
                    setCategorySelected={setCategorySelected}
                />
                <CreateModal
                    showModalCreate={showModalCreate}
                    setShowModalCreate={setShowModalCreate}
                />

                {/* Grid example */}
                <Grid item xs={12} lg={4}>
                    <DashboardCard
                        title='Other content'
                        subtitle='subtitle'
                    >
                        <Typography>Other content with col 4</Typography>
                    </DashboardCard>
                </Grid>
                <Grid item xs={12} lg={8}>
                    <DashboardCard
                        title='Category List'
                        subtitle='Manage category'
                    >
                        <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
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
                                                Id
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                Loại
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                Name
                                            </Typography>
                                        </TableCell>
                                        <TableCell align='right'>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                See Detail
                                            </Typography>
                                        </TableCell>
                                        <TableCell align='right'>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                Edit
                                            </Typography>
                                        </TableCell>
                                        <TableCell align='right'>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                Delete
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
                                                    <Button color='info' size="small">
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
                <Grid item xs={12} lg={2}>
                    <DashboardCard
                        title='Other content'
                        subtitle='subtitle'
                    >
                        <Typography>Other content with col 2</Typography>
                    </DashboardCard>
                </Grid>
                <Grid item xs={12} lg={2}>
                    <DashboardCard
                        title='Other content'
                        subtitle='subtitle'
                    >
                        <Typography>Other content with col 2</Typography>
                    </DashboardCard>
                </Grid>
                <Grid item xs={12} lg={1}>
                    <DashboardCard
                        title='Other content'
                        subtitle='subtitle'
                    >
                        <Typography>Other content with col 1</Typography>
                    </DashboardCard>
                </Grid>
                <Grid item xs={12} lg={2}>
                    <DashboardCard
                        title='Other content'
                        subtitle='subtitle'
                    >
                        <Typography>Other content with col 2</Typography>
                    </DashboardCard>
                </Grid>
                <Grid item xs={12} lg={3}>
                    <DashboardCard
                        title='Other content'
                        subtitle='subtitle'
                    >
                        <Typography>Other content with col 3</Typography>
                    </DashboardCard>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <DashboardCard
                        title='Other content'
                        subtitle='subtitle'
                    >
                        <Typography>Other content with col 4</Typography>
                    </DashboardCard>
                </Grid>
                <Grid item xs={12} lg={2}>
                    <DashboardCard
                        title='Other content'
                        subtitle='subtitle'
                    >
                        <Typography>Other content with col 2</Typography>
                    </DashboardCard>
                </Grid>
                <Grid item xs={12} lg={12}>
                    <DashboardCard
                        title='Other content'
                        subtitle='subtitle'
                    >
                        <Typography>Other content with col 12</Typography>
                    </DashboardCard>
                </Grid>
            </Grid>

        </PageContainer>
    )
}

export default CategoriesCrudPage
