'use client'

import UserDetailTable from '@/components/admin/User/UserDetailTable/UserDetailTable';
import PageContainer from '@/components/admin/container/PageContainer';
import CustomButton from '@/components/forms/theme-elements/CustomButton';
import DashboardCard from '@/components/shared/DashboardCard';
import { Box, Grid } from '@mui/material';
import { IconArrowBackUp } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import React from 'react'

interface IUserDetailProps {
    params: {
        id: string;
    };
}
const UserDetail = ({ params }: IUserDetailProps) => {
    const { id } = params
    const router = useRouter()

    return (
        <PageContainer title='detail' description=''>
            <Grid item xs={12} lg={8}>
                <DashboardCard
                    title={`Người dùng aa`}
                    subtitle={`aaa`}
                >
                    <Box sx={{ width: { xs: '280px', sm: 'auto' } }}>
                        {/* {error && <Alert sx={{ mb: 2 }} severity="error">
                            <AlertTitle>Error</AlertTitle>
                            Something when wrong — <strong>check your connection and reload page!</strong>
                        </Alert>} */}
                        <CustomButton
                            startIcon={<IconArrowBackUp />}
                            color="secondary"
                            size='small' disableElevation variant="contained" href=""
                            sx={{ mr: 2 }}
                            onClick={() => {
                                router.push('/admin/manage/user')
                            }}
                        >
                            Trở về
                        </CustomButton>
                        {/* {!error && !isLoading && (
                            <>
                                
                            </>
                        )} */}
                        {/* <UserDetailTable /> */}
                    </Box>
                </DashboardCard>
            </Grid>
        </PageContainer>
    )
}

export default UserDetail
