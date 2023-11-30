'use client'

import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import FlashSaleTableRow from './FlashSaleTableRow/FlashSaleTableRow'

interface IFlashSaleDayTableDataProps {
    flashSaleDayList: IFlashSaleEventDay[]
    isReachedEnd: boolean | undefined
    loadMoreRef: (node?: Element | null | undefined) => void
}
const FlashSaleDayTableData = (props: IFlashSaleDayTableDataProps) => {
    const { flashSaleDayList, isReachedEnd, loadMoreRef } = props

    return (
        <>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>
                            <Typography variant="subtitle2" fontWeight={600}>
                                id
                            </Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="subtitle2" fontWeight={600}>
                                Tên sự kiện
                            </Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="subtitle2" fontWeight={600}>
                                Ngày diễn ra
                            </Typography>
                        </TableCell>
                        <TableCell align='right'>
                            <Typography variant="subtitle2" fontWeight={600}>
                                Sửa
                            </Typography>
                        </TableCell>
                        <TableCell align='right'>
                            <Typography variant="subtitle2" fontWeight={600}>
                                xóa
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {flashSaleDayList.map((flashSaleDay) => (
                        <FlashSaleTableRow key={flashSaleDay.id} flashSaleItem={flashSaleDay} />
                    ))}
                    {
                        (isReachedEnd === false) && (
                            <TableRow
                                key={'reload-spinner'}
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

export default FlashSaleDayTableData
