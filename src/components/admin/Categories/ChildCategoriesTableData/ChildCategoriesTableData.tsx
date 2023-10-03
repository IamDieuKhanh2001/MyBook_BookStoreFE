'use client'
import React, { useState } from 'react'
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { IconEdit, IconTrash } from '@tabler/icons-react'
import { IconPlus } from '@tabler/icons-react'
import { toast } from 'react-toastify'
import { useConfirm } from 'material-ui-confirm'
import CreateChildCategoryModal from '../CreateChildCategoryModal/CreateChildCategoryModal'
import UpdateChildCategoryModal from '../UpdateChildCategoryModal/UpdateChildCategoryModal'
import useAPIChildCategory from '@/lib/hooks/api/useAPIChildCategory'
import useAPIParentCategory from '@/lib/hooks/api/useAPIParentCategory'

interface IChildCategoriesTableDataProps {
    childCategoryList: IChildCategory[] | undefined
    parentCategoryId: number
}
const ChildCategoriesTableData = (props: IChildCategoriesTableDataProps) => {
    const { childCategoryList, parentCategoryId } = props
    const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
    const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
    const [childCategorySelected, setChildCategorySelected] = useState<IChildCategory | null>(null);
    const confirm = useConfirm();
    const { getParentCategoryDetail } = useAPIParentCategory()
    const { mutate } = getParentCategoryDetail(parentCategoryId)
    const { deleteChildCategoryById } = useAPIChildCategory()

    const handleDeleteData = async (id: number) => {
        confirm({
            title: `Đồng ý xóa ${id} ?`,
            description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
        })
            .then(async () => {
                try {
                    await deleteChildCategoryById(id)
                    mutate()
                    toast.success("Delete child category complete id: " + id)
                }
                catch (e) {
                    toast.error("Something when wrong, please try again")
                }
            })
    }
    return (
        <>
            <Button
                sx={{ mt: 2 }}
                startIcon={<IconPlus />}
                color="success"
                size='small'
                disableElevation
                variant="contained"
                onClick={() => {
                    setShowModalCreate(true);
                }}
            >
                Add new
            </Button>
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
                                Tên danh mục con
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
                    {childCategoryList && childCategoryList.length > 0 ? (
                        (childCategoryList.map((childCategory: IChildCategory) => (
                            <TableRow key={childCategory.id}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {childCategory.id}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="subtitle2" fontWeight={500}>
                                        {childCategory.name}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="subtitle2" fontWeight={500}>
                                        {childCategory.created_at}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        color='info'
                                        size="small"
                                        onClick={() => {
                                            setChildCategorySelected(childCategory)
                                            setShowModalUpdate(true)
                                        }}
                                    >
                                        <IconEdit />
                                    </Button>
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        color='error'
                                        size="small"
                                        onClick={() => handleDeleteData(childCategory.id)}
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
                                    Chưa thêm danh mục con nào ...
                                </Typography>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <CreateChildCategoryModal
                setShowModalCreate={setShowModalCreate}
                showModalCreate={showModalCreate}
                parentCategoryId={parentCategoryId}
            />
            <UpdateChildCategoryModal
                showModalUpdate={showModalUpdate}
                setShowModalUpdate={setShowModalUpdate}
                childCategorySelected={childCategorySelected}
                setChildCategorySelected={setChildCategorySelected}
                parentCategoryId={parentCategoryId}
            />
        </>
    )
}

export default ChildCategoriesTableData
