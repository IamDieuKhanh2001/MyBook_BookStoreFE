'use client'

import UserTableData from '@/components/admin/User/UserTableData/UserTableData'
import PageContainer from '@/components/admin/container/PageContainer'
import AdminSearchBar from '@/components/shared/AdminSearchBar/AdminSearchBar'
import DashboardCard from '@/components/shared/DashboardCard'
import useAPIUser from '@/lib/hooks/api/useAPIUser'
import { Alert, AlertTitle, Box, Button, Grid } from '@mui/material'
import { useConfirm } from 'material-ui-confirm'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { toast } from 'react-toastify'

const UserPage = () => {
    const [filters, setFilters] = useState({
        limit: '10',
        email: '',
        status: '',
    });
    const confirm = useConfirm();
    const { ref, inView } = useInView();
    const { getUserListPaginated, blockUser, unblockUser } = useAPIUser()
    const {
        paginatedData,
        setSize,
        error,
        isReachedEnd,
        mutate
    } = getUserListPaginated(filters.limit, filters.email, filters.status)

    const handleBlockUser = async (id: number) => {
        confirm({
            title: `Đồng ý khóa người dùng mã số: ${id} ?`,
            description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
        })
            .then(async () => {
                try {
                    blockUser(id)
                    mutate()
                    toast.success("Khóa hoàn tất: " + id)
                }
                catch (e) {
                    toast.error("Something when wrong, please try again")
                }
            })
    }

    const handleUnblockUser = async (id: number) => {
        confirm({
            title: `Đồng ý mở khóa người dùng mã số: ${id} ?`,
            description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
        })
            .then(async () => {
                try {
                    unblockUser(id)
                    mutate()
                    toast.success("Mở khóa hoàn tất: " + id)
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
            <PageContainer title='User CRUD' description='My CRUD Operation for Product'>
                <Grid item xs={12} lg={8}>
                    <DashboardCard
                        title='User List'
                        subtitle='Manage user'
                    >
                        <Box sx={{ width: { xs: '280px', sm: 'auto' } }}>
                            {error && (
                                <Alert sx={{ mb: 2 }} severity="error">
                                    <AlertTitle>Error</AlertTitle>
                                    Something when wrong — <strong>check your connection and reload page!</strong>
                                </Alert>
                            )}
                            <AdminSearchBar
                                setSearchKeyWord={(value: string) => setFilters({ ...filters, email: value })}
                                placeholderText='Tìm kiếm gmail tài khoản'
                            />
                            <UserTableData
                                userListLoaded={paginatedData}
                                isReachedEnd={isReachedEnd}
                                loadMoreRef={ref}
                                handleBlockUser={handleBlockUser}
                                handleUnblockUser={handleUnblockUser}
                            />
                        </Box>
                    </DashboardCard>
                </Grid>
            </PageContainer>
        </>
    )
}

export default UserPage
