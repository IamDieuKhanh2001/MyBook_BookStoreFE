'use client'
import React from 'react'
import { Button, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { IconEdit, IconTrash } from '@tabler/icons-react'

interface IPublisherTableDataProps {
  publisherList: IPublisher[]
  setShowModalUpdate: (value: boolean) => void;
  handleDeleteData: (id: number) => void;
  setPublisherSelected: (value: IPublisher | null) => void
  isReachedEnd: boolean | undefined
  loadMoreRef: (node?: Element | null | undefined) => void
}
const PublisherTableData = (props: IPublisherTableDataProps) => {
  const {
    publisherList,
    handleDeleteData,
    setPublisherSelected,
    setShowModalUpdate,
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
                Tên nhà xuất bản
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
          {publisherList && publisherList.length > 0 ? (
            (publisherList.map((publisher) => (
              <TableRow key={publisher.id}>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    {publisher.id}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={500}>
                    {publisher.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={500}>
                    {publisher.created_at}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Button
                    color='info'
                    size="small"
                    onClick={() => {
                      setPublisherSelected(publisher);
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
                    onClick={() => handleDeleteData(publisher.id)}
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

export default PublisherTableData
