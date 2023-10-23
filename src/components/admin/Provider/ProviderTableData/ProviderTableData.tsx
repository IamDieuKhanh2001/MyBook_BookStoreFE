'use client'
import React from 'react'
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { IconEdit, IconTrash } from '@tabler/icons-react'

interface IProviderTableDataProps {
    providerList: IProvider[]
    setShowModalUpdate: (value: boolean) => void;
    handleDeleteData: (id: number) => void;
    setProviderSelected: (value: IBookForm | null) => void
}
const ProviderTableData = (props: IProviderTableDataProps) => {
    const { providerList, handleDeleteData, setProviderSelected, setShowModalUpdate } = props

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
                                Ngày tạo
                            </Typography>
                        </TableCell>
                        <TableCell align='right'>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Sửa
                            </Typography>
                        </TableCell>
                        <TableCell align='right'>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Xóa
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {providerList.length > 0 ? (
                        (providerList.map((provider: IProvider) => (
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
                                        {provider.created_at}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        color='info'
                                        size="small"
                                        onClick={() => {
                                            setProviderSelected(provider);
                                            setShowModalUpdate(true);
                                        }}
                                    >
                                        <IconEdit />
                                    </Button>
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        color='error'
                                        size="small"
                                        onClick={() => handleDeleteData(provider.id)}
                                    >
                                        <IconTrash />
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

export default ProviderTableData
