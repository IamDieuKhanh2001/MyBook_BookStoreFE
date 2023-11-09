'use client'
import PageContainer from '@/components/admin/container/PageContainer';
import CustomButton from '@/components/forms/theme-elements/CustomButton';
import CustomMenuItem from '@/components/forms/theme-elements/CustomMenuItem';
import CustomSelectBox from '@/components/forms/theme-elements/CustomSelectBox';
import CustomTextField from '@/components/forms/theme-elements/CustomTextField';
import DashboardCard from '@/components/shared/DashboardCard';
import { Box, Typography, useTheme, Button, Grid, CircularProgress, } from '@mui/material'
import { IconArrowBackUp } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Field, Form, Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import CustomDateTimePicker from '@/components/forms/theme-elements/CustomDateTimePicker';

interface FormValues {
    voucherName: string,
    voucherType: string,
    voucherCode: string,
    discountPercentage: number,
    discountMaxPrice: number,
    limited: number,
    desc: string,
    startDate: string,
    endDate: string,
    status: string,
    userId: number,
    userLevelId: number,
}
const AddVoucherPage = () => {
    const theme = useTheme();
    const router = useRouter()

    const initialValues: FormValues = {
        voucherName: '',
        voucherType: 'none',
        voucherCode: '',
        discountPercentage: 10,
        discountMaxPrice: 0,
        limited: 1,
        desc: '',
        startDate: '',
        endDate: '',
        status: 'active',
        userId: 0,
        userLevelId: 0,
    }

    const validationSchema = Yup.object().shape({
        voucherName: Yup.string()
            .max(100, "*tên voucher không quá 100 ký tự")
            .required("*Tên voucher không được để trống"),
        voucherType: Yup.string()
            .notOneOf(['none'], "*Vui lòng chọn đối tượng sử dụng"), // Không cho phép giá trị bằng none
        voucherCode: Yup.string()
            .required("*Mã voucher không được để trống"),
        discountPercentage: Yup.number()
            .typeError('*Phần trăm giảm giá là số, không chứa chữ cái A-Z, a-z, các kí hiệu đặc biệt')
            .min(0, '*Phần trăm giảm giá không được âm')
            .required('*Phần trăm giảm giá không được để trống'),
        discountMaxPrice: Yup.number()
            .typeError('*Số tiền giảm tối đa, không chứa chữ cái A-Z, a-z, các kí hiệu đặc biệt')
            .min(0, '*Số tiền giảm tối đa không được âm')
            .required('*Số tiền giảm tối đa không được để trống'),
        limited: Yup.number()
            .typeError('*Số lượt sử dụng không chứa chữ cái A-Z, a-z, các kí hiệu đặc biệt')
            .min(0, '*Số lượt sử dụng không được âm')
            .required('*Số lượt sử dụng không được để trống'),
        desc: Yup.string()
            .max(100, "*Mô tả không quá 100 ký tự")
            .required("*Mô tả không được để trống"),
        startDate: Yup.string()
            .required("*Chọn ngày bắt đầu"),
        endDate: Yup.string()
            .required("*Chọn ngày kết thúc"),
    })

    const handleAddVoucher = async (values: FormValues) => {
        try {
            console.log(values)
            toast.success("Sửa thông tin thành công ")
        }
        catch (e) {
            toast.error("Có lỗi xảy ra, vui lòng thử lại")
        }
    }

    const handleChangeDateTimeFormat = (value: any) => { // value is ISO-8601 
        const date = dayjs(value);
        return date.format('DD-MM-YYYY HH:mm:ss')
    }

    return (
        <>
            <PageContainer title='Voucher CRUD' description='CRUD Operation for Voucher'>
                <Grid item xs={12} lg={8}>
                    <DashboardCard
                        title='Voucher List'
                        subtitle='Manage Voucher list'
                    >
                        <Box sx={{ width: { xs: '280px', sm: 'auto' } }}>
                            <CustomButton
                                startIcon={<IconArrowBackUp />}
                                color="secondary"
                                size='small' disableElevation variant="contained" href=""
                                sx={{ mb: 3 }}
                                onClick={() => {
                                    router.push('/admin/manage/voucher')
                                }}
                            >
                                Trở về
                            </CustomButton>
                            <Formik
                                enableReinitialize={true}
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleAddVoucher}
                            >
                                {({ isValid, setFieldValue, handleChange, errors, touched, isSubmitting, values }) => (
                                    <Form>
                                        <Box sx={{ mt: 2 }}>
                                            <Typography
                                                variant="subtitle1"
                                                fontWeight={600}
                                                component="label"
                                                htmlFor="voucherName"
                                                mb="5px"
                                                style={{ color: theme.palette.text.primary }}
                                            >
                                                Tên Voucher
                                            </Typography>
                                            <Field
                                                as={CustomTextField}
                                                id={"voucherName"}
                                                name="voucherName"
                                                onChange={handleChange}
                                                variant="outlined"
                                                fullWidth
                                                value={values.voucherName}
                                            />
                                            {errors.voucherName && touched.voucherName && (
                                                <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                                    {errors.voucherName}
                                                </Typography>
                                            )}
                                        </Box>
                                        <Box sx={{ mt: 2 }}>
                                            <Typography
                                                variant="subtitle1"
                                                fontWeight={600}
                                                component="label"
                                                htmlFor="voucherCode"
                                                mb="5px"
                                                style={{ color: theme.palette.text.primary }}
                                            >
                                                Mã code Voucher
                                            </Typography>
                                            <Field
                                                as={CustomTextField}
                                                id={"voucherCode"}
                                                name="voucherCode"
                                                onChange={handleChange}
                                                variant="outlined"
                                                fullWidth
                                                value={values.voucherCode}
                                            />
                                            {errors.voucherCode && touched.voucherCode && (
                                                <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                                    {errors.voucherCode}
                                                </Typography>
                                            )}
                                        </Box>
                                        <Box sx={{ mt: 2 }}>
                                            <CustomSelectBox
                                                labelId="voucherType"
                                                id="voucherType"
                                                value={values.voucherType}
                                                name='voucherType'
                                                onChange={handleChange}
                                            >
                                                <CustomMenuItem value={'none'} disabled={true}>
                                                    <em>Hãy chọn nhóm người có thể sử dụng mã này</em>
                                                </CustomMenuItem>
                                                <CustomMenuItem value={'General'}>
                                                    Sử dụng cho tất cả người dùng
                                                </CustomMenuItem>
                                                <CustomMenuItem value={'Member Exclusive'}>
                                                    Sử dụng cho các người dùng thành viên có bậc hạng
                                                </CustomMenuItem>
                                                <CustomMenuItem value={'Personalized'}>
                                                    Sử dụng cho riêng một cá nhân
                                                </CustomMenuItem>
                                            </CustomSelectBox>
                                            {errors.voucherType && touched.voucherType && (
                                                <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                                    {errors.voucherType}
                                                </Typography>
                                            )}
                                        </Box>
                                        <Box sx={{ mt: 2 }}>
                                            <Typography
                                                variant="subtitle1"
                                                fontWeight={600}
                                                component="label"
                                                htmlFor="discountPercentage"
                                                mb="5px"
                                                style={{ color: theme.palette.text.primary }}
                                            >
                                                Phần trăm giảm giá (%)
                                            </Typography>
                                            <Field
                                                as={CustomTextField}
                                                id={"discountPercentage"}
                                                name="discountPercentage"
                                                onChange={handleChange}
                                                variant="outlined"
                                                fullWidth
                                                value={values.discountPercentage}
                                            />

                                            {errors.discountPercentage && touched.discountPercentage && (
                                                <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                                    {errors.discountPercentage}
                                                </Typography>
                                            )}
                                        </Box>
                                        <Box sx={{ mt: 2 }}>
                                            <Typography
                                                variant="subtitle1"
                                                fontWeight={600}
                                                component="label"
                                                htmlFor="discountMaxPrice"
                                                mb="5px"
                                                style={{ color: theme.palette.text.primary }}
                                            >
                                                Cho phép giảm tối đa (VND)
                                            </Typography>
                                            <Field
                                                as={CustomTextField}
                                                id={"discountMaxPrice"}
                                                name="discountMaxPrice"
                                                onChange={handleChange}
                                                variant="outlined"
                                                fullWidth
                                                value={values.discountMaxPrice}
                                            />
                                            {errors.discountMaxPrice && touched.discountMaxPrice && (
                                                <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                                    {errors.discountMaxPrice}
                                                </Typography>
                                            )}
                                        </Box>
                                        <Box sx={{ mt: 2 }}>
                                            <Typography
                                                variant="subtitle1"
                                                fontWeight={600}
                                                component="label"
                                                htmlFor="limited"
                                                mb="5px"
                                                style={{ color: theme.palette.text.primary }}
                                            >
                                                Số lượt sử dụng
                                            </Typography>
                                            <Field
                                                as={CustomTextField}
                                                id={"limited"}
                                                name="limited"
                                                onChange={handleChange}
                                                variant="outlined"
                                                fullWidth
                                                value={values.limited}
                                            />
                                            {errors.limited && touched.limited && (
                                                <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                                    {errors.limited}
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
                                                Mô tả
                                            </Typography>
                                            <Field
                                                as={CustomTextField}
                                                id={"desc"}
                                                name="desc"
                                                onChange={handleChange}
                                                variant="outlined"
                                                fullWidth
                                                value={values.desc}
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
                                                htmlFor="startDate"
                                                mb="5px"
                                                style={{ color: theme.palette.text.primary }}
                                            >
                                                Ngày bắt đầu cho phép sử dụng
                                            </Typography>
                                            <CustomDateTimePicker
                                                value={values.startDate}
                                                onChangeEvent={
                                                    (value: any) => setFieldValue('startDate', handleChangeDateTimeFormat(value))
                                                }
                                            />
                                            {errors.startDate && touched.startDate && (
                                                <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                                    {errors.startDate}
                                                </Typography>
                                            )}
                                        </Box>
                                        <Box sx={{ mt: 2 }}>
                                            <Typography
                                                variant="subtitle1"
                                                fontWeight={600}
                                                component="label"
                                                htmlFor="endDate"
                                                mb="5px"
                                                style={{ color: theme.palette.text.primary }}
                                            >
                                                Ngày hết hiệu lực
                                            </Typography>
                                            <CustomDateTimePicker
                                                value={values.startDate}
                                                onChangeEvent={
                                                    (value: any) => setFieldValue('endDate', handleChangeDateTimeFormat(value))
                                                }
                                            />
                                            {errors.endDate && touched.endDate && (
                                                <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                                    {errors.endDate}
                                                </Typography>
                                            )}
                                        </Box>
                                        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                                            <CustomButton
                                                type='submit'
                                                variant="contained"
                                                color="secondary"
                                            >
                                                {/* {isLoading &&
                                                    (<CircularProgress color="inherit" size={25} />)
                                                } */}
                                                Lưu
                                            </CustomButton>
                                        </Box>
                                    </Form>
                                )}
                            </Formik>
                        </Box>
                    </DashboardCard>
                </Grid>
            </PageContainer>

        </>
    )
}

export default AddVoucherPage
