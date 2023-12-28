import React from 'react'
import {
    Avatar,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material'

interface IUserDetailTableProps {
    data: UserInfo
}
const UserDetailTable = (props: IUserDetailTableProps) => {
    const { data } = props

    return (
        <>
            <Stack sx={{ width: '100%' }} justifyContent={'center'} alignItems={'center'}>
                <Avatar
                    sx={{ width: '150px', height: '150px' }}
                    alt={data.email}
                    src={data.profile?.avatar_source ? data.profile.avatar_source : '/img/avatar/default.png'}
                />
            </Stack>
            <Table
                aria-label="simple table"
                sx={{
                    whiteSpace: "nowrap",
                    mt: 2
                }}
            >
                <TableHead>
                    <TableRow>
                        <TableCell align='center' colSpan={2}>
                            <Typography variant="h4" fontWeight={600}>
                                {data?.email}
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Mã số tài khoản
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {data?.id}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Tên họ
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {data?.profile?.firstname ? data.profile.firstname : "(Chưa thêm)"}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Tên người dùng
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {data?.profile?.lastname ? data.profile.lastname : "(Chưa thêm)"}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Cấp bậc
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {data?.userLevel.level_name}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Quyền
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {data?.userRole.name}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Xác thực mail
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color={data?.is_email_verified ? "green" : "red"} variant="subtitle2" fontWeight={400}>
                                {data?.is_email_verified ? "(Đã xác thực)" : "(Chưa xác thực)"}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Điện thoại
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {data?.profile?.phone_number ? data.profile.phone_number : "(Chưa thêm)"}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left' sx={{ minWidth: '200px', width: '200px' }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Giới tính
                            </Typography>
                        </TableCell>
                        <TableCell align='left'>
                            <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                {
                                    data?.profile?.gender ?
                                        (data.profile.gender === 'male' ? "Nam" : "Nữ")
                                        :
                                        "(Chưa thêm)"
                                }
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}

export default UserDetailTable
