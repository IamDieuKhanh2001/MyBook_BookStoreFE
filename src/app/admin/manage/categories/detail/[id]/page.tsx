'use client'
import PageContainer from '@/components/admin/container/PageContainer';
import React from 'react'
import { Box, Button, Grid, Typography, ListItem, ListItemText, Alert, AlertTitle } from '@mui/material'
import DashboardCard from '@/components/shared/DashboardCard'
import { IconArrowBackUp } from '@tabler/icons-react';
import ChildCategoriesTableData from '@/components/admin/Categories/ChildCategoriesTableData/ChildCategoriesTableData';
import useAPIParentCategory from '@/lib/hooks/api/useAPIParentCategory';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

interface CategoryDetailPageProps {
    params: {
        id: number;
    };
}
const CategoryDetailPage = (props: CategoryDetailPageProps) => {
    const { params } = props
    const router = useRouter()
    const { getParentCategoryDetail } = useAPIParentCategory()
    const { data, isLoading, error, mutate } = getParentCategoryDetail(params.id)

    return (
        <>
            <PageContainer title='Category name: ' description='Category detail'>
                <Grid item xs={12} lg={8}>
                    <DashboardCard
                        title={`Danh mục: ${data?.name}`}
                        subtitle={`Mã số danh mục: ${params.id}`}
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
                            {!isLoading && !error ? (
                                <>
                                    <Typography fontSize={20} paragraph>
                                        Ngày tạo: {data?.created_at}
                                    </Typography>
                                    <Typography fontSize={20} paragraph>
                                        Ngày chỉnh sửa: {data?.updated_at}
                                    </Typography>
                                    <Typography variant="h3" gutterBottom>
                                        Danh sách danh mục con của "{data?.name}"
                                    </Typography>
                                    <ChildCategoriesTableData
                                        childCategoryList={data?.childrenCategory}
                                        parentCategoryId={data?.id}
                                    />
                                </>
                            ) : (
                                <>
                                    <Typography variant="h2" gutterBottom>
                                        Loading data ...
                                    </Typography>
                                </>
                            )}
                        </Box>
                    </DashboardCard>
                </Grid>
            </PageContainer>

        </>
    )
}

export default CategoryDetailPage
