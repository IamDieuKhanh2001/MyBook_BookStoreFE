'use client'

import React from 'react'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { IconEye, IconTrash } from '@tabler/icons-react';
import { IconEdit } from '@tabler/icons-react';
import { IconPlus } from '@tabler/icons-react';
import { Button, Stack } from '@mui/material';
import CreateFlashSalePeriodModal from '../CreateFlashSalePeriodModal/CreateFlashSalePeriodModal';
import CustomButton from '@/components/forms/theme-elements/CustomButton';
import useAPIFlashSale from '@/lib/hooks/api/useAPIFlashSale';
import { useRouter } from 'next/navigation';

interface IPeriodsCollapseContentProps {
  flashSaleItem: IFlashSaleEventDay
}
const PeriodsCollapseContent = (props: IPeriodsCollapseContentProps) => {
  const { flashSaleItem } = props
  const router = useRouter()
  const [showModalCreate, setShowModalCreate] = React.useState<boolean>(false)
  const { getFlashSalePeriods } = useAPIFlashSale()
  const { data: flashSaleDayPeriodsData, error, isLoading, mutate } = getFlashSalePeriods(flashSaleItem.id)

  const handleShowModalCreatePeriod = () => {
    setShowModalCreate(true)
  }

  return (
    <>
      <Box sx={{ marginX: 2, marginY: 1 }}>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="h6" gutterBottom component="div">
            Các khung giờ sale ngày {flashSaleItem.event_date}
          </Typography>
          <CustomButton
            startIcon={<IconPlus />}
            color="success"
            size='small'
            disableElevation
            variant="contained"
            disabled={false}
            onClick={handleShowModalCreatePeriod}
          >
            Thêm khung giờ mới
          </CustomButton>
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
            {flashSaleDayPeriodsData.length > 0 ? (
              flashSaleDayPeriodsData.map((period) => (
                <TableRow key={`period_id_${period.id}`}>
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
                      onClick={() => {
                        router.push(`/admin/manage/flash-sale/period/${period.id}`)
                      }}
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
              ))
            ) : (
              isLoading ? (
                <TableRow>
                  <TableCell colSpan={7} sx={{ textAlign: 'center' }}>
                    <CircularProgress color="secondary" />
                  </TableCell>
                </TableRow>
              ) : (
                <TableRow>
                  <TableCell colSpan={7} sx={{ textAlign: 'center' }}>
                    Ngày {flashSaleItem.event_date} hiện chưa có khung giờ sale
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </Box>
      {/* modal  */}
      <CreateFlashSalePeriodModal
        showModalCreate={showModalCreate}
        setShowModalCreate={setShowModalCreate}
        flashSaleItem={flashSaleItem}
        mutate={mutate}
      />
    </>
  )
}

export default PeriodsCollapseContent
