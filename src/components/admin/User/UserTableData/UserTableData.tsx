import { Avatar, Button, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { IconEdit, IconEye, IconLock, IconLockOpen } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import React from 'react'

interface IUserTableDataProps {
    userListLoaded: UserInfo[]
    isReachedEnd: boolean | undefined
    loadMoreRef: (node?: Element | null | undefined) => void
    handleBlockUser: (id: number) => void
    handleUnblockUser: (id: number) => void
}
const UserTableData = (props: IUserTableDataProps) => {
    const router = useRouter()
    const {
        userListLoaded,
        isReachedEnd,
        loadMoreRef,
        handleBlockUser,
        handleUnblockUser,
    } = props

    return (
        <>
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
                                Ảnh đại diện
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Gmail đăng nhập
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Quyền
                            </Typography>
                        </TableCell>
                        <TableCell align='right'>
                            <Typography variant="subtitle2" fontWeight={600}>
                                xem chi tiết
                            </Typography>
                        </TableCell>
                        <TableCell align='right'>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Khóa tài khoản
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userListLoaded && userListLoaded.length > 0 ? (
                        (userListLoaded.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>
                                    <Avatar alt={user.email} src={user.profile?.avatar_source ? user.profile.avatar_source : '/img/avatar/default.png'} />
                                </TableCell>
                                <TableCell>
                                    <Typography variant="subtitle2" fontWeight={500}>
                                        {user.email}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="subtitle2" fontWeight={500}>
                                        {user.userRole.name}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        color='success'
                                        size="small"
                                        onClick={() => {
                                            router.push(`/admin/manage/user/detail/${user.id}`)
                                        }}
                                    >
                                        <IconEye />
                                    </Button>
                                </TableCell>
                                <TableCell align="right">
                                    {user.status === 'active' ? (
                                        <Button
                                            color='error'
                                            size="small"
                                            onClick={() => handleBlockUser(user.id)}
                                        >
                                            <IconLock />
                                        </Button>
                                    ) : (
                                        <Button
                                            color='success'
                                            size="small"
                                            onClick={() => handleUnblockUser(user.id)}
                                        >
                                            <IconLockOpen />
                                        </Button>
                                    )}
                                </TableCell>
                            </TableRow>
                        )))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={5}>
                                <Typography align="center" variant="h4" mt={2}>
                                    No data available
                                </Typography>
                            </TableCell>
                        </TableRow>
                    )}
                    {/* Load more user when scroll and see this element  */}
                    {
                        (isReachedEnd === false) && (
                            <TableRow
                                ref={loadMoreRef}
                            >
                                <TableCell align='center' colSpan={5}>
                                    <CircularProgress color="secondary" />
                                </TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </>
    )
}

export default UserTableData
