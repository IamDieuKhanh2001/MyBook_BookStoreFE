'use client'

import UserAddress from '@/components/admin/User/UserAddress/UserAddress';
import UserDetailTable from '@/components/admin/User/UserDetailTable/UserDetailTable';
import PageContainer from '@/components/admin/container/PageContainer';
import CustomButton from '@/components/forms/theme-elements/CustomButton';
import DashboardCard from '@/components/shared/DashboardCard';
import useAPIUser from '@/lib/hooks/api/useAPIUser';
import { Alert, AlertTitle, Box, Grid, Typography } from '@mui/material';
import { IconArrowBackUp, IconLocation } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import React from 'react'

interface IUserDetailProps {
    params: {
        id: number;
    };
}
const UserDetail = ({ params }: IUserDetailProps) => {
    const { id } = params
    const router = useRouter()
    const { getUserDetail } = useAPIUser()
    const { data, error, isLoading, mutate } = getUserDetail(id)

    return (
        <PageContainer title='detail' description=''>
            <Grid item xs={12} lg={8}>
                <DashboardCard
                    title={`Người dùng ${data.email}`}
                    subtitle={`Thông tin chi tiết id: ${data.id}`}
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
                                router.push('/admin/manage/user')
                            }}
                        >
                            Trở về
                        </CustomButton>
                        {!error && !isLoading && (
                            <UserDetailTable
                                data={data}
                            />
                        )}
                    </Box>
                </DashboardCard>
                <Box sx={{ mt: 2 }}>
                    <DashboardCard
                        title={`Địa chỉ ${data.email}`}
                        subtitle={`Địa chỉ user id: ${data.id}`}
                    >
                        <>
                            {
                                !error && data.addresses && data.addresses?.length > 0
                                &&
                                (
                                    data.addresses.map((address) => (
                                        <UserAddress key={address.id} address={address} />
                                    ))
                                )
                            }
                        </>
                    </DashboardCard>
                </Box>
            </Grid>
        </PageContainer>
    )
}

export default UserDetail
