'use client'

import React from 'react'
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import Collapse from '@mui/material/Collapse';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { IconTrash } from '@tabler/icons-react';
import { IconEdit } from '@tabler/icons-react';
import { Button, useTheme } from '@mui/material';
import PeriodsCollapseContent from './PeriodsCollapseContent/PeriodsCollapseContent';

interface IRowProps {
    flashSaleItem: IFlashSaleEventDay
}
const FlashSaleTableRow = (props: IRowProps) => {
    const { flashSaleItem } = props;
    const [open, setOpen] = React.useState(false);
    const theme = useTheme()

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        sx={{ color: theme.palette.secondary.dark }}
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell>
                    <Typography
                        sx={{
                            fontSize: "15px",
                            fontWeight: "500",
                        }}
                    >
                        {flashSaleItem.id}
                    </Typography>
                </TableCell>
                <TableCell align="right">
                    <Typography variant="subtitle2" fontWeight={500}>
                        {flashSaleItem.event_name}
                    </Typography>
                </TableCell>
                <TableCell align="right">
                    <Typography variant="subtitle2" fontWeight={500}>
                        {flashSaleItem.event_date}
                    </Typography>
                </TableCell>
                <TableCell align="right">
                    <Button
                        color='info'
                        size="small"
                    // onClick={() => {
                    //     setCategorySelected(category);
                    //     setShowModalUpdate(true);
                    // }}
                    >
                        <IconEdit />
                    </Button>
                </TableCell>
                <TableCell align="right">
                    <Button
                        color='error'
                        size="small"
                    // onClick={() => handleDeleteData(category.id)}
                    >
                        <IconTrash />
                    </Button>
                </TableCell>
            </TableRow>
            {/* Flash sale periods list  */}
            <TableRow>
                <TableCell sx={{ paddingBottom: 0, paddingTop: 0, borderBottom: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <PeriodsCollapseContent
                            flashSaleItem={flashSaleItem}
                        />
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

export default FlashSaleTableRow
