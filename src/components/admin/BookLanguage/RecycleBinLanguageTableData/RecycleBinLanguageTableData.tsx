'use client'
import React from 'react'
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { IconHistory, IconTrashX } from '@tabler/icons-react'
import { IBookLanguage } from '../../../../../types/IBookLanguage'

interface IProps {
    recycleBinList: IBookLanguage[]
    handleDestroyData: (id: number) => void;
    handleRestoreData: (id: number) => void;
}
const RecycleBinLanguageTableData = (props: IProps) => {
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
                                Tên danh mục
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
                        (recycleBinList.map((language: IBookLanguage) => (
                            <TableRow key={language.id}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {language.id}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="subtitle2" fontWeight={500}>
                                        {language.language_name}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="subtitle2" fontWeight={500}>
                                        {language.deleted_at}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        color='info'
                                        size="small"
                                        onClick={() => handleRestoreData(language.id)}
                                    >
                                        <IconHistory />
                                    </Button>
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        color='error'
                                        size="small"
                                        onClick={() => handleDestroyData(language.id)}
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
                </TableBody>
            </Table>
        </>
    )
}

export default RecycleBinLanguageTableData
