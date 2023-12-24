'use client'
import React from 'react'
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { IconEdit, IconTrash } from '@tabler/icons-react'

interface IBookFormTableDataProps {
  bookFormList: IBookForm[]
  setShowModalUpdate: (value: boolean) => void;
  handleDeleteData: (id: number) => void;
  setBookFormSelected: (value: IBookForm | null) => void
}
const BookFormTableData = (props: IBookFormTableDataProps) => {
  const { bookFormList, handleDeleteData, setBookFormSelected, setShowModalUpdate } = props

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
          {bookFormList.length > 0 ? (
            (bookFormList.map((bookForm: IBookForm) => (
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
                    {bookForm.created_at}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Button
                    color='info'
                    size="small"
                    onClick={() => {
                      setBookFormSelected(bookForm);
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
                    onClick={() => handleDeleteData(bookForm.id)}
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

export default BookFormTableData
