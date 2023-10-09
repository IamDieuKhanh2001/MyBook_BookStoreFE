'use client'
import React from 'react'
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { IconEdit, IconTrash } from '@tabler/icons-react'

interface IAuthorTableDataProps {
  authorList: IAuthor[]
  setShowModalUpdate: (value: boolean) => void;
  handleDeleteData: (id: number) => void;
  setAuthorSelected: (value: IAuthor | null) => void
}
const AuthorTableData = (props: IAuthorTableDataProps) => {
  const { authorList, handleDeleteData, setAuthorSelected, setShowModalUpdate } = props

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
                Tên tác giả
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
          {authorList.length > 0 ? (
            (authorList.map((author: IAuthor) => (
              <TableRow key={author.id}>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    {author.id}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={500}>
                    {author.author_name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={500}>
                    {author.created_at}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Button
                    color='info'
                    size="small"
                    onClick={() => {
                      setAuthorSelected(author);
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
                    onClick={() => handleDeleteData(author.id)}
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

export default AuthorTableData
