import React from 'react'
import {
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
                            Thông tin user {data?.email}
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
                            {data?.profile?.firstname}
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
                            {data?.profile?.lastname}
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
                            Xác thực mail
                        </Typography>
                    </TableCell>
                    <TableCell align='left'>
                        <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                            {data?.is_email_verified ? "(Đã xác thực)" : "(Chưa xác thực)"}
                        </Typography>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default UserDetailTable
