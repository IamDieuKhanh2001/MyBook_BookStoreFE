'use client'
import React from 'react'
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import dayjs from 'dayjs';
import CustomDateTimePicker from '@/components/forms/theme-elements/CustomDateTimePicker';
import { toast } from 'react-toastify';
import CustomButton from '@/components/forms/theme-elements/CustomButton';
import CustomMenuItem from '@/components/forms/theme-elements/CustomMenuItem';
import CustomSelectBox from '@/components/forms/theme-elements/CustomSelectBox';
import CustomTextField from '@/components/forms/theme-elements/CustomTextField';
import { Box, Typography, useTheme } from '@mui/material'
import useAPIVoucher from '@/lib/hooks/api/useAPIVoucher';
import { errorHandler } from '@/lib/utils/ErrorHandler';
import { useRouter } from 'next/navigation';

interface FormValues {
    voucherName: string,
    voucherType: string,
    voucherCode: string,
    requireOrderMinPrice: number,
    discountPercentage: number,
    discountMaxPrice: number,
    limited: number,
    desc: string,
    startDate: string,
    endDate: string,
    status: string,
    userEmail: string,
    userLevelId: number,
}
const AddVoucherForm = () => {
    const theme = useTheme();
    const { createVoucherGeneral, createVoucherPersonalized, createVoucherMemberExclusive } = useAPIVoucher()
    const router = useRouter()

    const initialValues: FormValues = {
        voucherName: '',
        voucherType: 'none',
        voucherCode: '',
        requireOrderMinPrice: 50000,
        discountPercentage: 10,
        discountMaxPrice: 100000,
        limited: 1,
        desc: '',
        startDate: '',
        endDate: '',
        status: 'active',
        userEmail: '',
        userLevelId: 0,
    }

    let validationShape = {
        voucherName: Yup.string()
            .max(100, "*tên voucher không quá 100 ký tự")
            .required("*Tên voucher không được để trống"),
        voucherType: Yup.string()
            .notOneOf(['none'], "*Vui lòng chọn đối tượng sử dụng"), // Không cho phép giá trị bằng none
        voucherCode: Yup.string()
            .required("*Mã voucher không được để trống"),
        requireOrderMinPrice: Yup.number()
            .typeError('*Giá tối thiểu phải là số, không chứa chữ cái A-Z, a-z, các kí hiệu đặc biệt')
            .min(0, '*Giá tối thiểu không được âm')
            .required('*Giá tối thiểu không được để trống'),
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
        userEmail: Yup.string().when("voucherType", ([voucherType], sch) => {
            return voucherType === 'Personalized' ? sch.required("Vui lòng không để trống") : sch.notRequired()
        }),
        userLevelId: Yup.number().when("voucherType", ([voucherType], sch) => {
            return voucherType === 'Member Exclusive' ? sch.notOneOf([0], "*Vui lòng chọn bậc hạng người dùng có thể sử dụng") : sch.notRequired()
        })
    }
    const validationSchema = Yup.object().shape(validationShape)

    const handleAddVoucher = async (values: FormValues) => {
        try {
            console.log(values)
            const {
                voucherName,
                voucherType,
                desc,
                discountMaxPrice,
                discountPercentage,
                endDate,
                limited,
                requireOrderMinPrice,
                startDate,
                status,
                userLevelId,
                userEmail,
                voucherCode
            } = values
            switch (voucherType) {
                case 'General': {
                    toast.success("Save general")
                    await createVoucherGeneral(
                        voucherName,
                        voucherCode,
                        requireOrderMinPrice,
                        discountPercentage,
                        discountMaxPrice,
                        limited,
                        desc,
                        startDate,
                        endDate,
                        status
                    )
                    break;
                }
                case 'Member Exclusive': {
                    toast.success("Save Member exx")
                    await createVoucherMemberExclusive(
                        voucherName,
                        voucherCode,
                        requireOrderMinPrice,
                        discountPercentage,
                        discountMaxPrice,
                        limited,
                        desc,
                        startDate,
                        endDate,
                        status,
                        userLevelId
                    )
                    break;
                }
                case 'Personalized': {
                    toast.success("Save Personalized")
                    await createVoucherPersonalized(
                        voucherName,
                        voucherCode,
                        requireOrderMinPrice,
                        discountPercentage,
                        discountMaxPrice,
                        limited,
                        desc,
                        startDate,
                        endDate,
                        status,
                        userEmail
                    )
                    break;
                }
            }
            toast.success("Thêm voucher thành công ")
            router.push('/admin/manage/voucher')
        }
        catch (e) {
            errorHandler(e)
        }
    }

    const handleChangeDateTimeFormat = (value: any) => { // value is ISO-8601 
        const date = dayjs(value);
        return date.format('DD-MM-YYYY HH:mm:ss')
    }

    let levelUser = [
        {
            id: 1,
            level_name: 'Basic',
            discount: '0',
        },
        {
            id: 2,
            level_name: 'Bronze',
            discount: '3',
        },
        {
            id: 3,
            level_name: 'Silver',
            discount: '8',
        },
        {
            id: 4,
            level_name: 'Golden',
            discount: '15',
        },
        {
            id: 5,
            level_name: 'Diamond',
            discount: '24',
        },
    ]

    return (
        <>
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
                        {/* Personalized voucher  */}
                        {values.voucherType === 'Personalized' && (
                            <Box sx={{ mt: 2 }}>
                                <Typography
                                    variant="subtitle1"
                                    fontWeight={600}
                                    component="label"
                                    htmlFor="userEmail"
                                    mb="5px"
                                    style={{ color: theme.palette.text.primary }}
                                >
                                    Tên người dùng
                                </Typography>
                                <Field
                                    as={CustomTextField}
                                    id={"userEmail"}
                                    name="userEmail"
                                    onChange={handleChange}
                                    variant="outlined"
                                    fullWidth
                                    value={values.userEmail}
                                />
                                {errors.userEmail && touched.userEmail && (
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                        {errors.userEmail}
                                    </Typography>
                                )}
                            </Box>
                        )}
                        {/* Member Exclusive */}
                        {values.voucherType === 'Member Exclusive' && (
                            <Box sx={{ mt: 2 }}>
                                <CustomSelectBox
                                    labelId="voucherType"
                                    id="userLevelId"
                                    value={values.userLevelId}
                                    name='userLevelId'
                                    onChange={handleChange}
                                >
                                    <CustomMenuItem value={0} disabled={true}>
                                        <em>Hãy chọn bậc hạng có thể sử dụng voucher</em>
                                    </CustomMenuItem>
                                    {levelUser.map((levelUserItem) => (
                                        <CustomMenuItem key={levelUserItem.id} value={levelUserItem.id}>
                                            {levelUserItem.level_name}
                                        </CustomMenuItem>
                                    ))}
                                </CustomSelectBox>
                                {errors.userLevelId && touched.userLevelId && (
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                        {errors.userLevelId}
                                    </Typography>
                                )}
                            </Box>
                        )}
                        <Box sx={{ mt: 2 }}>
                            <Typography
                                variant="subtitle1"
                                fontWeight={600}
                                component="label"
                                htmlFor="requireOrderMinPrice"
                                mb="5px"
                                style={{ color: theme.palette.text.primary }}
                            >
                                Giá tối thiểu
                            </Typography>
                            <Field
                                as={CustomTextField}
                                id={"requireOrderMinPrice"}
                                name="requireOrderMinPrice"
                                onChange={handleChange}
                                variant="outlined"
                                fullWidth
                                value={values.requireOrderMinPrice}
                            />

                            {errors.requireOrderMinPrice && touched.requireOrderMinPrice && (
                                <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                    {errors.requireOrderMinPrice}
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
                                Ngày bắt đầu hiệu lực
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
                                value={values.endDate}
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
        </>
    )
}

export default AddVoucherForm
