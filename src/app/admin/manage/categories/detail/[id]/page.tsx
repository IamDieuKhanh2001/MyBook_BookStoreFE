'use client'
import PageContainer from '@/components/admin/container/PageContainer';
import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, Typography, ListItem, ListItemText } from '@mui/material'
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
    const { getParentCategoryDetail } = useAPIParentCategory()
    const [parentCategoryDetail, setParentCategoryDetail] = useState<IParentCategoryDetail | undefined>(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const fetchParentCategory = async () => {
        try {
            setIsLoading(true)
            const res = await getParentCategoryDetail(params.id)
            setParentCategoryDetail(res.data)
            setIsLoading(false)
        }
        catch (e) {
            toast.error("Something when wrong, data not found")
        }
    }
    useEffect(() => {
        fetchParentCategory()
    }, [])

    return (
        <>
            <PageContainer title='Category name: ' description='Category detail'>
                <Grid item xs={12} lg={8}>
                    <DashboardCard
                        title={`Danh mục: ${parentCategoryDetail?.name}`}
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
                            {!isLoading ? (
                                <>
                                    <Typography fontSize={20} paragraph>
                                        Ngày tạo: {parentCategoryDetail?.created_at}
                                    </Typography>
                                    <Typography fontSize={20} paragraph>
                                        Ngày chỉnh sửa: {parentCategoryDetail?.updated_at}
                                    </Typography>
                                    <Typography variant="h3" gutterBottom>
                                        Danh sách danh mục con của "{parentCategoryDetail?.name}"
                                    </Typography>   
                                    <ChildCategoriesTableData childCategoryList={parentCategoryDetail?.childrenCategory} />
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
