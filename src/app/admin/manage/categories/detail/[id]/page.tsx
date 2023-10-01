import PageContainer from '@/components/admin/container/PageContainer';
import React from 'react'
import { Box, Button, Grid, Typography, ListItem, ListItemText } from '@mui/material'
import DashboardCard from '@/components/shared/DashboardCard'
import { IconArrowBackUp } from '@tabler/icons-react';

interface CategoryDetailPageProps {
    params: {
        id: number;
    };
}
const CategoryDetailPage = (props: CategoryDetailPageProps) => {
    const { params } = props

    

    return (
        <>
            <PageContainer title='Category name: ' description='Category detail'>
                <Grid item xs={12} lg={8}>
                    <DashboardCard
                        title={`Category id: ${params?.id}`}
                        subtitle='View detail category'
                    >
                        <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                            <Button
                                startIcon={<IconArrowBackUp />}
                                color="secondary"
                                size='small' disableElevation variant="contained" href=""
                                sx={{ marginBottom: 2 }}
                            >
                                Trở về
                            </Button>
                            <Typography fontSize={20} paragraph>
                                Id: 1
                            </Typography>
                            <Typography fontSize={20} paragraph>Tên danh mục cha: Kinh tế</Typography>
                            <Typography fontSize={20} paragraph>Ngày tạo: 2023-09-29T19:20:45.000+07:00</Typography>
                            <Typography fontSize={20} paragraph>Ngày chỉnh sửa: 2023-09-29T19:20:45.000+07:00</Typography>
                            <Typography variant="h3" gutterBottom>
                                Danh sách danh mục con
                            </Typography>
                            
                        </Box>
                    </DashboardCard>
                </Grid>
            </PageContainer>

        </>
    )
}

export default CategoryDetailPage
