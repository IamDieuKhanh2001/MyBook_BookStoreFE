'use client'
import { Button, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { IconHistory, IconTrashX } from '@tabler/icons-react';
import React from 'react'

interface IProps {
    recycleBinList: IBookForm[]
    handleDestroyData: (id: number) => void;
    handleRestoreData: (id: number) => void;
    isReachedEnd: boolean | undefined
    loadMoreRef: (node?: Element | null | undefined) => void
}
const RecycleBinProviderTableData = (props: IProps) => {
    const {
        recycleBinList,
        handleDestroyData,
        handleRestoreData,
        isReachedEnd,
        loadMoreRef
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
                                Mã số
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Tên nhà cung cấp
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
                    {recycleBinList && recycleBinList.length > 0 ? (
                        (recycleBinList.map((provider: IProvider) => (
                            <TableRow key={provider.id}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {provider.id}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="subtitle2" fontWeight={500}>
                                        {provider.name}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="subtitle2" fontWeight={500}>
                                        {provider.deleted_at}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        color='info'
                                        size="small"
                                        onClick={() => handleRestoreData(provider.id)}
                                    >
                                        <IconHistory />
                                    </Button>
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        color='error'
                                        size="small"
                                        onClick={() => handleDestroyData(provider.id)}
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
                                    Danh sách rỗng
                                </Typography>
                            </TableCell>
                        </TableRow>
                    )}
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

export default RecycleBinProviderTableData
