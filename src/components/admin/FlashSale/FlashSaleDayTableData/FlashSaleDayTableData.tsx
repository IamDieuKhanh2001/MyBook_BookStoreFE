'use client'

import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation'
import FlashSaleTableRow from './FlashSaleTableRow/FlashSaleTableRow'

interface IFlashSaleDayTableDataProps {
    flashSaleDayList: {
        id: number;
        event_name: string;
        hours: {
            id: number,
            percent_discount: number,
            time_start: string,
            time_end: string,
            created_at: string,
            updated_at: string,
        }[]
    }[]
}
const FlashSaleDayTableData = (props: IFlashSaleDayTableDataProps) => {
    const { flashSaleDayList } = props

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
                </TableBody>
            </Table>
        </>
    )
}

export default FlashSaleDayTableData
