'use client'
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { IconHistory, IconTrashX } from '@tabler/icons-react';
import React from 'react'

interface IProps {
    recycleBinList: IBookForm[]
    handleDestroyData: (id: number) => void;
    handleRestoreData: (id: number) => void;
}
const RecycleBinBookFormTableData = (props: IProps) => {
    const { recycleBinList, handleDestroyData, handleRestoreData } = props

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
                                Mã số
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Tên hình thức
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Ngày xóa
                            </Typography>
                        </TableCell>
                        <TableCell align='right'>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Khôi phục
                            </Typography>
                        </TableCell>
                        <TableCell align='right'>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Xóa vĩnh viễn
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {recycleBinList.length > 0 ? (
                        (recycleBinList.map((bookForm: IBookForm) => (
                            <TableRow key={bookForm.id}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {bookForm.id}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="subtitle2" fontWeight={500}>
                                        {bookForm.name}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="subtitle2" fontWeight={500}>
                                        {bookForm.deleted_at}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        color='info'
                                        size="small"
                                        onClick={() => handleRestoreData(bookForm.id)}
                                    >
                                        <IconHistory />
                                    </Button>
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        color='error'
                                        size="small"
                                        onClick={() => handleDestroyData(bookForm.id)}
                                    >
                                        <IconTrashX />
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
        </>
    )
}

export default RecycleBinBookFormTableData
