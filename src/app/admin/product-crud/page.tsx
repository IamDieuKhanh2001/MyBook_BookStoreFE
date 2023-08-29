"use client"

import PageContainer from '@/components/container/PageContainer'
import DashboardCard from '@/components/shared/DashboardCard'
import { Box, Button, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { IconTrash } from '@tabler/icons-react'
import { IconEdit, IconEye } from '@tabler/icons-react'
import React from 'react'
import { categories as categoriesSample } from '../../../SampleData/categories'

const ProductCRUD = () => {
  return (
    <PageContainer title='Categories CRUD' description='My CRUD Operation for categories'>
      <Grid item xs={12} lg={8}>
        <DashboardCard
          title='Category List'
          subtitle='Manage category'
        >
          <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
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
                      Id
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Loại
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Name
                    </Typography>
                  </TableCell>
                  <TableCell align='right'>
                    <Typography variant="subtitle2" fontWeight={600}>
                      See Detail
                    </Typography>
                  </TableCell>
                  <TableCell align='right'>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Edit
                    </Typography>
                  </TableCell>
                  <TableCell align='right'>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Delete
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categoriesSample.length > 0 ? (
                  (categoriesSample.map((category: any) => (
                    <TableRow key={category.name}>
                      <TableCell>
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: "500",
                          }}
                        >
                          {category.id}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box>
                            <Typography variant="subtitle2" fontWeight={600}>
                              {category.name}
                            </Typography>
                            <Typography
                              color="textSecondary"
                              sx={{
                                fontSize: "13px",
                              }}
                            >
                              {category.post}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                          {category.pname}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Button color='success' size="small">
                          <IconEye />
                        </Button>
                      </TableCell>
                      <TableCell align="right">
                        <Button color='info' size="small">
                          <IconEdit />
                        </Button>
                      </TableCell>
                      <TableCell align="right">
                        <Button color='error' size="small">
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
          </Box>
        </DashboardCard>
      </Grid>
    </PageContainer>
  )
}

export default ProductCRUD
