import React from 'react'
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import CustomTextField from '@/components/forms/theme-elements/CustomTextField';
import {
    Box,
    Stack,
    useTheme,
    Typography,
} from '@mui/material'
import CustomSelectBox from '@/components/forms/theme-elements/CustomSelectBox';
import CustomMenuItem from '@/components/forms/theme-elements/CustomMenuItem';

interface FormValues {
    categoryId: number,
    name: string,
    price: number,
    quantity: number,
    desc: string,
    weight: number,
    numberOfPages: number,
    publishingYear: number,
    //Other props bellow not require value (Allow null)
    authorId: number,
    publisherId: number,
    languageId: number,
    bookFormId: number,
}
interface IAddInfoProductProps {
    displayTab?: boolean
}
const AddInfoProduct = (props: IAddInfoProductProps) => {
    const { displayTab = false } = props
    const theme = useTheme();

    const initialValues: FormValues = {
        categoryId: 0,
        name: '',
        price: 0,
        quantity: 0,
        desc: '',
        weight: 0,
        numberOfPages: 0,
        publishingYear: new Date().getFullYear(), // current year
        authorId: 0,
        publisherId: 0,
        languageId: 0,
        bookFormId: 0,
    }
    const validationSchema = Yup.object().shape({
        categoryId: Yup.number()
            .notOneOf([0], '*Vui lòng chọn thể loại') // Không cho phép giá trị bằng 0
            .required('*Vui lòng chọn thể loại'),
        name: Yup.string()
            .max(50, "*tên không quá 50 ký tự")
            .required("*Tên không được để trống"),
        price: Yup.number()
            .typeError('*Giá tiền phải là số, không chứa chữ cái A-Z, a-z, các kí hiệu đặc biệt')
            .min(0, '*Giá tiền không được âm')
            .required('*Giá tiền không được để trống'),
        quantity: Yup.number()
            .typeError('*Số lượng phải là số, không chứa chữ cái A-Z, a-z, các kí hiệu đặc biệt')
            .min(0, 'Số lượng không được âm')
            .required('Số lượng không được để trống'),
        desc: Yup.string()
            .max(100, "*Mô tả không quá 100 ký tự")
            .required("*Mô tả không được để trống"),
        weight: Yup.number()
            .typeError('*Khối lượng phải là số, không chứa chữ cái A-Z, a-z, các kí hiệu đặc biệt')
            .min(0, '*Khối lượng không được âm')
            .required('*Khối lượng không được để trống'),
        numberOfPages: Yup.number()
            .typeError('*Số lượng trang phải là số, không chứa chữ cái A-Z, a-z, các kí hiệu đặc biệt')
            .min(0, '*Số lượng trang không được âm')
            .required('*Số lượng trang không được để trống'),
        publishingYear: Yup.number()
            .typeError('*Năm phát hành phải là số, không chứa chữ cái A-Z, a-z, các kí hiệu đặc biệt')
            .min(0, '*Năm phát hành không được âm')
            .required('*Năm phát hành không được để trống'),
        authorId: Yup.number()
            .notOneOf([0], '*Vui lòng chọn tác giả') // Không cho phép giá trị bằng 0
            .required('*Vui lòng chọn tác giả'),
        publisherId: Yup.number()
            .notOneOf([0], '*Vui lòng chọn nhà xuất bản') // Không cho phép giá trị bằng 0
            .required('*Vui lòng chọn nhà xuất bản'),
        languageId: Yup.number()
            .notOneOf([0], '*Vui lòng chọn ngôn ngữ sách') // Không cho phép giá trị bằng 0
            .required('*Vui lòng chọn ngôn ngữ sách'),
        bookFormId: Yup.number()
            .notOneOf([0], '*Vui lòng chọn hình thức sách') // Không cho phép giá trị bằng 0
            .required('*Vui lòng chọn hình thức sách'),
    });

    const handleSubmit = async (values: FormValues) => {
        try {

            toast.success("Thêm thông tin sách thành công!!")
        }
        catch (e) {
            toast.error("Có lỗi xảy ra, xin vui lòng thử lại sau!!")
        }
    }

    // const CustomSelect = styled(Select)(({ theme }) => ({
    //     ".MuiSelect-select": {
    //         color: 'black',
    //         background: theme.palette.grey[400],
    //         '&:focus': {
    //             background: theme.palette.grey[200],
    //         },
    //     },
    // }));

    // const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
    //     color: 'black', // Thay đổi màu sắc tại đây
    //     '&:focus': {
    //         backgroundColor: `${theme.palette.secondary.main} !important`, // Màu nền khi hover
    //         color: 'white', // Màu sắc khi hover
    //     },
    //     '&:hover': {
    //         backgroundColor: `${theme.palette.secondary.main} !important`, // Màu nền khi hover
    //         color: 'white', // Màu sắc khi hover
    //     },
    //     '&;disabled': {
    //         color: theme.palette.text.secondary, // Màu sắc khi hover
    //     }
    // }));
    return (
        <>
            <Stack style={{ display: displayTab ? 'block' : 'none' }}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ values, setFieldValue, isValid, handleChange, errors, touched, isSubmitting }) => (
                        <Form>
                            <Box sx={{ mt: 2 }}>
                                <Typography
                                    variant="subtitle1"
                                    fontWeight={600}
                                    component="label"
                                    htmlFor="name"
                                    mb="5px"
                                    style={{ color: theme.palette.text.primary }}
                                >
                                    Tên sản phẩm
                                </Typography>
                                <Field
                                    as={CustomTextField}
                                    id={"name"}
                                    name="name"
                                    onChange={handleChange}
                                    variant="outlined"
                                    fullWidth
                                />
                                {errors.name && touched.name && (
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                        {errors.name}
                                    </Typography>
                                )}
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography
                                    variant="subtitle1"
                                    fontWeight={600}
                                    component="label"
                                    htmlFor="price"
                                    mb="5px"
                                    style={{ color: theme.palette.text.primary }}
                                >
                                    Giá tiền
                                </Typography>
                                <Field
                                    as={CustomTextField}
                                    id={"price"}
                                    name="price"
                                    onChange={handleChange}
                                    variant="outlined"
                                    fullWidth
                                />
                                {errors.price && touched.price && (
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                        {errors.price}
                                    </Typography>
                                )}
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography
                                    variant="subtitle1"
                                    fontWeight={600}
                                    component="label"
                                    htmlFor="quantity"
                                    mb="5px"
                                    style={{ color: theme.palette.text.primary }}
                                >
                                    Số lượng
                                </Typography>
                                <Field
                                    as={CustomTextField}
                                    id={"quantity"}
                                    name="quantity"
                                    onChange={handleChange}
                                    variant="outlined"
                                    fullWidth
                                />
                                {errors.quantity && touched.quantity && (
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                        {errors.quantity}
                                    </Typography>
                                )}
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography
                                    variant="subtitle1"
                                    fontWeight={600}
                                    component="label"
                                    htmlFor="desc"
                                    mb="5px"
                                    style={{ color: theme.palette.text.primary }}
                                >
                                    Mô tả sản phẩm
                                </Typography>
                                <Field
                                    as={CustomTextField}
                                    id={"desc"}
                                    name="desc"
                                    onChange={handleChange}
                                    variant="outlined"
                                    fullWidth
                                />
                                {errors.desc && touched.desc && (
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                        {errors.desc}
                                    </Typography>
                                )}
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography
                                    variant="subtitle1"
                                    fontWeight={600}
                                    component="label"
                                    htmlFor="weight"
                                    mb="5px"
                                    style={{ color: theme.palette.text.primary }}
                                >
                                    Khối lượng
                                </Typography>
                                <Field
                                    as={CustomTextField}
                                    id={"weight"}
                                    name="weight"
                                    onChange={handleChange}
                                    variant="outlined"
                                    fullWidth
                                />
                                {errors.weight && touched.weight && (
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                        {errors.weight}
                                    </Typography>
                                )}
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography
                                    variant="subtitle1"
                                    fontWeight={600}
                                    component="label"
                                    htmlFor="numberOfPages"
                                    mb="5px"
                                    style={{ color: theme.palette.text.primary }}
                                >
                                    Tổng số trang (Cả bìa)
                                </Typography>
                                <Field
                                    as={CustomTextField}
                                    id={"numberOfPages"}
                                    name="numberOfPages"
                                    onChange={handleChange}
                                    variant="outlined"
                                    fullWidth
                                />
                                {errors.numberOfPages && touched.numberOfPages && (
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                        {errors.numberOfPages}
                                    </Typography>
                                )}
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography
                                    variant="subtitle1"
                                    fontWeight={600}
                                    component="label"
                                    htmlFor="publishingYear"
                                    mb="5px"
                                    style={{ color: theme.palette.text.primary }}
                                >
                                    Năm xuất bản
                                </Typography>
                                <Field
                                    as={CustomTextField}
                                    id={"publishingYear"}
                                    name="publishingYear"
                                    onChange={handleChange}
                                    variant="outlined"
                                    fullWidth
                                />
                                {errors.publishingYear && touched.publishingYear && (
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                        {errors.publishingYear}
                                    </Typography>
                                )}
                            </Box>
                            {/* <FormControl variant="filled" sx={{ mt: 3, minWidth: 120, width: '50%' }}>
                                <CustomSelect
                                    labelId="categoryId"
                                    id="categoryId"
                                    value={values.categoryId}
                                    name='categoryId'
                                    onChange={handleChange}
                                >
                                    <CustomMenuItem value={0} disabled={true}>
                                        <em>Hãy chọn thể loại</em>
                                    </CustomMenuItem>
                                    <CustomMenuItem value={10}>Khoa học</CustomMenuItem>
                                    <CustomMenuItem value={20}>Giáo khoa</CustomMenuItem>
                                    <CustomMenuItem value={30}>Manga</CustomMenuItem>
                                </CustomSelect>
                            </FormControl> */}
                            <Box sx={{ mt: 2 }}>
                                <CustomSelectBox
                                    labelId="categoryId"
                                    id="categoryId"
                                    value={values.categoryId}
                                    name='categoryId'
                                    onChange={handleChange}
                                >
                                    <CustomMenuItem value={0} disabled={true}>
                                        <em>Hãy chọn thể loại</em>
                                    </CustomMenuItem>
                                    <CustomMenuItem value={10}>Khoa học</CustomMenuItem>
                                    <CustomMenuItem value={20}>Giáo khoa</CustomMenuItem>
                                    <CustomMenuItem value={30}>Manga</CustomMenuItem>
                                </CustomSelectBox>
                                {errors.categoryId && touched.categoryId && (
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                        {errors.categoryId}
                                    </Typography>
                                )}
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <CustomSelectBox
                                    labelId="authorId"
                                    id="authorId"
                                    value={values.authorId}
                                    name='authorId'
                                    onChange={handleChange}
                                >
                                    <CustomMenuItem value={0} disabled={true}>
                                        <em>Hãy chọn tác giả</em>
                                    </CustomMenuItem>
                                    <CustomMenuItem value={10}>tg1</CustomMenuItem>
                                    <CustomMenuItem value={20}>tg2</CustomMenuItem>
                                    <CustomMenuItem value={30}>tg3</CustomMenuItem>
                                </CustomSelectBox>
                                {errors.authorId && touched.authorId && (
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                        {errors.authorId}
                                    </Typography>
                                )}
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <CustomSelectBox
                                    labelId="publisherId"
                                    id="publisherId"
                                    value={values.publisherId}
                                    name='publisherId'
                                    onChange={handleChange}
                                >
                                    <CustomMenuItem value={0} disabled={true}>
                                        <em>Hãy chọn nhà xuất bản</em>
                                    </CustomMenuItem>
                                    <CustomMenuItem value={10}>xb1</CustomMenuItem>
                                    <CustomMenuItem value={20}>xb3</CustomMenuItem>
                                    <CustomMenuItem value={30}>xb2</CustomMenuItem>
                                </CustomSelectBox>
                                {errors.publisherId && touched.publisherId && (
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                        {errors.publisherId}
                                    </Typography>
                                )}
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <CustomSelectBox
                                    labelId="languageId"
                                    id="languageId"
                                    value={values.languageId}
                                    name='languageId'
                                    onChange={handleChange}
                                >
                                    <CustomMenuItem value={0} disabled={true}>
                                        <em>Hãy chọn ngôn ngữ sách</em>
                                    </CustomMenuItem>
                                    <CustomMenuItem value={10}>Tiếng anh</CustomMenuItem>
                                    <CustomMenuItem value={20}>Tiếng nhật</CustomMenuItem>
                                    <CustomMenuItem value={30}>Tiếng việt</CustomMenuItem>
                                    <CustomMenuItem value={30}>Tiếng việt</CustomMenuItem>
                                </CustomSelectBox>
                                {errors.languageId && touched.languageId && (
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                        {errors.languageId}
                                    </Typography>
                                )}
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <CustomSelectBox
                                    labelId="bookFormId"
                                    id="bookFormId"
                                    value={values.bookFormId}
                                    name='bookFormId'
                                    onChange={handleChange}
                                >
                                    <CustomMenuItem value={0} disabled={true}>
                                        <em>Hãy chọn hình thức sách</em>
                                    </CustomMenuItem>
                                    <CustomMenuItem value={10}>Bộ hộp</CustomMenuItem>
                                    <CustomMenuItem value={20}>Bìa mềm</CustomMenuItem>
                                    <CustomMenuItem value={30}>Bìa cứng</CustomMenuItem>
                                </CustomSelectBox>
                                {errors.bookFormId && touched.bookFormId && (
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                        {errors.bookFormId}
                                    </Typography>
                                )}
                            </Box>
                            <button type="submit" className="btn btn-primary">save</button>
                        </Form>
                    )}
                </Formik>
            </Stack>
        </>
    )
}

export default AddInfoProduct
