'use client'

import React from 'react'
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { IconEye, IconTrash } from '@tabler/icons-react';
import { IconEdit } from '@tabler/icons-react';
import { IconPlus } from '@tabler/icons-react';
import { Button, Stack } from '@mui/material';
import CreateFlashSalePeriodModal from '../CreateFlashSalePeriodModal/CreateFlashSalePeriodModal';

interface IPeriodsCollapsibleRowProps {
  open: boolean
  hours: {
    id: number,
    percent_discount: number,
    time_start: string,
    time_end: string,
    created_at: string,
    updated_at: string,
  }[]
}
const PeriodsCollapsibleRow = (props: IPeriodsCollapsibleRowProps) => {
  const { open, hours } = props
  const [showModalCreate, setShowModalCreate] = React.useState<boolean>(false)

  const handleShowModalCreatePeriod = () => {
    setShowModalCreate(true)
  }

  return (
    <>
      <TableRow>
        <TableCell sx={{ paddingBottom: 0, paddingTop: 0, borderBottom: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ marginX: 2, marginY: 1 }}>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
              >
                <Typography variant="h6" gutterBottom component="div">
                  Khung giờ sale ngày 2/9/2023
                </Typography>
                <Button
                  startIcon={<IconPlus />}
                  color="success"
                  size='small'
                  disableElevation
                  variant="contained"
                  onClick={handleShowModalCreatePeriod}
                >
                  Thêm khung giờ mới
                </Button>
              </Stack>
              <Table aria-label="flash-sale-periods">
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Phần trăm giảm</TableCell>
                    <TableCell align="right">Giờ bắt đầu</TableCell>
                    <TableCell align="right">Giờ kết thúc</TableCell>
                    <TableCell align="right">xem sản phẩm</TableCell>
                    <TableCell align="right">sửa khung giờ</TableCell>
                    <TableCell align="right">xóa</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {hours.map((period) => (
                    <TableRow key={period.id}>
                      <TableCell component="th" scope="row">
                        {period.id}
                      </TableCell>
                      <TableCell>
                        {period.percent_discount} (%)
                      </TableCell>
                      <TableCell align="right">
                        {period.time_start}
                      </TableCell>
                      <TableCell align="right">
                        {period.time_end}
                      </TableCell>
                      <TableCell align="right">
                        <Button color='success' size="small"
                        // onClick={() => {
                        //     router.push(`/admin/manage/categories/detail/${category.id}`)
                        // }}
                        >
                          <IconEye />
                        </Button>
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
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      {/* modal  */}
      <CreateFlashSalePeriodModal
        showModalCreate={showModalCreate}
        setShowModalCreate={setShowModalCreate}
      />
    </>
  )
}

export default PeriodsCollapsibleRow
