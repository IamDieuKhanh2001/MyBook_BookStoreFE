'use client'
import React, { useState } from 'react'
import { Field, Form, Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import CustomTextField from '@/components/forms/theme-elements/CustomTextField';
import {
    Box,
    Stack,
    useTheme,
    Typography,
    CircularProgress,
} from '@mui/material'
import CustomSelectBox from '@/components/forms/theme-elements/CustomSelectBox';
import CustomMenuItem from '@/components/forms/theme-elements/CustomMenuItem';
import CustomButton from '@/components/forms/theme-elements/CustomButton';
import useAPIBookLanguage from '@/lib/hooks/api/useAPIBookLanguage';
import useAPIAuthor from '@/lib/hooks/api/useAPIAuthor';
import useAPIBookProvider from '@/lib/hooks/api/useAPIBookProvider';
import useAPIBookPublisher from '@/lib/hooks/api/useAPIBookPublisher';
import useAPIBookForm from '@/lib/hooks/api/useAPIBookForm';
import useAPIParentCategory from '@/lib/hooks/api/useAPIParentCategory';
import { IBookLanguage } from '../../../../../../types/IBookLanguage';
import useAPIBook from '@/lib/hooks/api/useAPIBook';
import { errorHandler } from '@/lib/utils/ErrorHandler';
import { IBook } from '../../../../../../types/IBook';
import CustomAutoComplete from '@/components/forms/theme-elements/CustomAutoComplete';

interface FormValues {
    pcategoryId: number,
    ccategoryId: number,
    name: string,
    isbnCode: string,
    price: number,
    quantity: number,
    desc: string,
    weight: number,
    numberOfPages: number,
    publishingYear: number,
    //Other props bellow not require value (Allow null)
    authorId: number,
    providerId: number,
    publisherId: number,
    languageId: number,
    bookFormId: number,
}
interface IAddInfoProductProps {
    displayTab?: boolean,
    setCurrentStepCompleted: () => void,
    stepCompleted?: boolean,
    setProductCreated: React.Dispatch<React.SetStateAction<IBook | null>>
}
const AddInfoProduct = (props: IAddInfoProductProps) => {
    const {
        displayTab = false,
        setCurrentStepCompleted,
        stepCompleted = false,
        setProductCreated,
    } = props
    const theme = useTheme();
    const [selectedPCategoryId, setSelectedPCategoryId] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { getLanguageList } = useAPIBookLanguage()
    const { getProviderListPaginated } = useAPIBookProvider()
    const { getPublisherListPaginated } = useAPIBookPublisher()
    const { getBookFormList } = useAPIBookForm()
    const { getAuthorListPaginated } = useAPIAuthor()
    const { getParentCategoryList, getParentCategoryDetail } = useAPIParentCategory()
    const { createNewBook } = useAPIBook()
    const { paginatedData: authorList } = getAuthorListPaginated('999999')
    const { data: languageList } = getLanguageList()
    const { paginatedData: providerList } = getProviderListPaginated('999999')
    const { paginatedData: publisherList } = getPublisherListPaginated('999999')
    const { data: bookFormList } = getBookFormList()
    const { data: pCatgoryList } = getParentCategoryList()
    const { data: pCategoryDetail } = getParentCategoryDetail(selectedPCategoryId)

    const initialValues: FormValues = {
        pcategoryId: 0,
        ccategoryId: 0,
        name: '',
        isbnCode: '',
        price: 0,
        quantity: 1,
        desc: 'aaa',
        weight: 0,
        numberOfPages: 0,
        publishingYear: new Date().getFullYear(), // current year
        authorId: 0,
        providerId: 0,
        publisherId: 0,
        languageId: 0,
        bookFormId: 0,
    }
    const validationSchema = Yup.object().shape({
        pcategoryId: Yup.number()
            .notOneOf([0], '*Vui lòng chọn loại sách') // Không cho phép giá trị bằng 0
            .required('*Vui lòng chọn loại sách'),
        ccategoryId: Yup.number()
            .notOneOf([0], '*Vui lòng chọn thể loại') // Không cho phép giá trị bằng 0
            .required('*Vui lòng chọn thể loại'),
        name: Yup.string()
            .required("*Tên không được để trống"),
        isbnCode: Yup.string()
            .matches(/^[0-9]+$/, '*Chỉ được chứa các số')
            .test(
                'isbnCode',
                '*Phải là mã số dài 10 kí tự (Quy chuẩn cũ), hoặc 13 kí tự (Quy chuẩn mới)',
                (value: string | undefined) => {
                    if (!value) return false;
                    return value.length === 10 || value.length === 13
                })
            .required("*Mã định danh sách không được để trống"),
        price: Yup.number()
            .typeError('*Giá tiền phải là số, không chứa chữ cái A-Z, a-z, các kí hiệu đặc biệt')
            .min(0, '*Giá tiền không được âm')
            .required('*Giá tiền không được để trống'),
        quantity: Yup.number()
            .typeError('*Số lượng phải là số, không chứa chữ cái A-Z, a-z, các kí hiệu đặc biệt')
            .min(0, 'Số lượng không được âm')
            .required('Số lượng không được để trống'),
        desc: Yup.string()
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
        providerId: Yup.number()
            .notOneOf([0], '*Vui lòng chọn nhà cung cấp') // Không cho phép giá trị bằng 0
            .required('*Vui lòng chọn nhà cung cấp'),
        languageId: Yup.number()
            .notOneOf([0], '*Vui lòng chọn ngôn ngữ sách') // Không cho phép giá trị bằng 0
            .required('*Vui lòng chọn ngôn ngữ sách'),
        bookFormId: Yup.number()
            .notOneOf([0], '*Vui lòng chọn hình thức sách') // Không cho phép giá trị bằng 0
            .required('*Vui lòng chọn hình thức sách'),
    });

    const handleChangeParentCategory = (e: any, setFieldValue: any) => {
        const selectedValue = e.target.value;
        setFieldValue('pcategoryId', selectedValue);
        setFieldValue('ccategoryId', 0);
        setSelectedPCategoryId(selectedValue);
    }

    const handleSubmit = async (values: FormValues) => {
        try {
            setIsLoading(true)
            const {
                pcategoryId,
                ccategoryId,
                name,
                isbnCode,
                price,
                quantity,
                desc,
                weight,
                numberOfPages,
                publishingYear,
                authorId,
                providerId,
                publisherId,
                languageId,
                bookFormId
            } = values
            setIsLoading(true)
            const res = await createNewBook(
                ccategoryId,
                isbnCode,
                name,
                price,
                quantity,
                desc,
                weight,
                numberOfPages,
                publishingYear,
                authorId,
                providerId,
                publisherId,
                languageId,
                bookFormId
            )
            setProductCreated(res.data)
            toast.success("Thêm thông tin sách thành công!!")
            setCurrentStepCompleted()
            setIsLoading(false)
        } catch (e: any) {
            errorHandler(e)
            setIsLoading(false)
            toast.error("Thêm thông tin sách thất bại!!")
        }
    }

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
                                    value={values.name}
                                    disabled={stepCompleted}
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
                                    htmlFor="isbnCode"
                                    mb="5px"
                                    style={{ color: theme.palette.text.primary }}
                                >
                                    Mã số định danh quốc tế
                                </Typography>
                                <Field
                                    as={CustomTextField}
                                    id={"isbnCode"}
                                    name="isbnCode"
                                    onChange={handleChange}
                                    variant="outlined"
                                    fullWidth
                                    value={values.isbnCode}
                                    disabled={stepCompleted}
                                />
                                {errors.isbnCode && touched.isbnCode && (
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                        {errors.isbnCode}
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
                                    disabled={stepCompleted}
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
                                    disabled={stepCompleted}
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
                                    disabled={stepCompleted}
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
                                    disabled={stepCompleted}
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
                                    disabled={stepCompleted}
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
                                    disabled={stepCompleted}
                                />
                                {errors.publishingYear && touched.publishingYear && (
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                        {errors.publishingYear}
                                    </Typography>
                                )}
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <CustomAutoComplete
                                    disabled={stepCompleted}
                                    disablePortal
                                    id="pcategoryId"
                                    options={pCatgoryList || []}
                                    getOptionLabel={(option: IParentCategory) => option.name}
                                    value={pCatgoryList.find((option: IParentCategory) => option.id === values.pcategoryId) || null}
                                    onChange={(event: any, newValue) => {
                                        const selectedId = newValue ? newValue.id : 0;
                                        setFieldValue('pcategoryId', selectedId);
                                        setFieldValue('ccategoryId', 0);
                                        setSelectedPCategoryId(selectedId);
                                    }}
                                    sx={{ width: '100%' }}
                                    renderInput={
                                        (params) =>
                                            <CustomTextField
                                                {...params}
                                                name='pcategoryId'
                                                label="Chọn loại sách"
                                            />
                                    }
                                    renderOption={(props, option: IParentCategory) => {
                                        return (
                                            <li {...props} key={`pcategory__id_${option.id}`}>
                                                {option.name}
                                            </li>
                                        );
                                    }}
                                />
                                {errors.pcategoryId && touched.pcategoryId && (
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                        {errors.pcategoryId}
                                    </Typography>
                                )}
                            </Box>
                            {/* <Box sx={{ mt: 2 }}>
                                <CustomSelectBox
                                    disabled={stepCompleted}
                                    labelId="pcategoryId"
                                    id="pcategoryId"
                                    value={values.pcategoryId}
                                    name='pcategoryId'
                                    onChange={
                                        (e: any) => handleChangeParentCategory(e, setFieldValue)
                                    }
                                >
                                    <CustomMenuItem value={0} disabled={true}>
                                        <em>Hãy chọn phân loại sách</em>
                                    </CustomMenuItem>
                                    {pCatgoryList?.map((pcategoryItem: IParentCategory) => (
                                        <CustomMenuItem key={pcategoryItem.id} value={pcategoryItem.id}>{pcategoryItem.name}</CustomMenuItem>
                                    ))}
                                </CustomSelectBox>
                                {errors.pcategoryId && touched.pcategoryId && (
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                        {errors.pcategoryId}
                                    </Typography>
                                )}
                            </Box> */}
                            <Box sx={{ mt: 2 }}>
                                <CustomAutoComplete
                                    disabled={stepCompleted}
                                    disablePortal
                                    id="ccategoryId"
                                    options={pCategoryDetail.childrenCategory || []}
                                    getOptionLabel={(option: IChildCategory) => option.name}
                                    value={pCategoryDetail.childrenCategory?.find((option: IChildCategory) => option.id === values.ccategoryId) || null}
                                    onChange={(event: any, newValue) => {
                                        const selectedId = newValue ? newValue.id : 0;
                                        setFieldValue('ccategoryId', selectedId);
                                    }}
                                    sx={{ width: '100%' }}
                                    renderInput={
                                        (params) =>
                                            <CustomTextField
                                                {...params}
                                                name='ccategoryId'
                                                label="Hãy chọn thể loại"
                                            />
                                    }
                                    renderOption={(props, option: IChildCategory) => {
                                        return (
                                            <li {...props} key={`ccategory__id_${option.id}`}>
                                                {option.name}
                                            </li>
                                        );
                                    }}
                                />
                                {errors.ccategoryId && touched.ccategoryId && (
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                        {errors.ccategoryId}
                                    </Typography>
                                )}
                            </Box>
                            {/* <Box sx={{ mt: 2 }}>
                                <CustomSelectBox
                                    disabled={stepCompleted}
                                    labelId="ccategoryId"
                                    id="ccategoryId"
                                    value={values.ccategoryId}
                                    name='ccategoryId'
                                    onChange={handleChange}
                                >
                                    <CustomMenuItem value={0} disabled={true}>
                                        <em>Hãy chọn thể loại</em>
                                    </CustomMenuItem>
                                    {pCategoryDetail.childrenCategory?.map((ccategoryItem: IParentCategory) => (
                                        <CustomMenuItem key={ccategoryItem.id} value={ccategoryItem.id}>{ccategoryItem.name}</CustomMenuItem>
                                    ))}
                                </CustomSelectBox>
                                {errors.ccategoryId && touched.ccategoryId && (
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                        {errors.ccategoryId}
                                    </Typography>
                                )}
                            </Box> */}
                            <Box sx={{ mt: 2 }}>
                                <CustomAutoComplete
                                    disabled={stepCompleted}
                                    disablePortal
                                    id="authorId"
                                    options={authorList || []}
                                    getOptionLabel={(option: IAuthor) => option.author_name}
                                    value={authorList.find((option: IAuthor) => option.id === values.authorId) || null}
                                    onChange={(event: any, newValue) => {
                                        const selectedId = newValue ? newValue.id : 0;
                                        setFieldValue('authorId', selectedId);
                                    }}
                                    sx={{ width: '100%' }}
                                    renderInput={
                                        (params) =>
                                            <CustomTextField
                                                {...params}
                                                name='authorId'
                                                label="Hãy chọn tác giả"
                                            />
                                    }
                                    renderOption={(props, option: IAuthor) => {
                                        return (
                                            <li {...props} key={`author__id_${option.id}`}>
                                                {option.author_name}
                                            </li>
                                        );
                                    }}
                                />
                                {errors.authorId && touched.authorId && (
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                        {errors.authorId}
                                    </Typography>
                                )}
                            </Box>
                            {/* <Box sx={{ mt: 2 }}>
                                <CustomSelectBox
                                    disabled={stepCompleted}
                                    labelId="authorId"
                                    id="authorId"
                                    value={values.authorId}
                                    name='authorId'
                                    onChange={handleChange}
                                >
                                    <CustomMenuItem value={0} disabled={true}>
                                        <em>Hãy chọn tác giả</em>
                                    </CustomMenuItem>
                                    {authorList.map((item: IAuthor) => (
                                        <CustomMenuItem key={item.id} value={item.id}>{item.author_name}</CustomMenuItem>
                                    ))}
                                </CustomSelectBox>
                                {errors.authorId && touched.authorId && (
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                        {errors.authorId}
                                    </Typography>
                                )}
                            </Box> */}
                            <Box sx={{ mt: 2 }}>
                                <CustomAutoComplete
                                    disabled={stepCompleted}
                                    disablePortal
                                    id="publisherId"
                                    options={publisherList || []}
                                    getOptionLabel={(option: IPublisher) => option.name}
                                    value={publisherList.find((option: IPublisher) => option.id === values.publisherId) || null}
                                    onChange={(event: any, newValue) => {
                                        const selectedId = newValue ? newValue.id : 0;
                                        setFieldValue('publisherId', selectedId);
                                    }}
                                    sx={{ width: '100%' }}
                                    renderInput={
                                        (params) =>
                                            <CustomTextField
                                                {...params}
                                                name='publisherId'
                                                label="Hãy chọn nhà xuất bản"
                                            />
                                    }
                                    renderOption={(props, option: IPublisher) => {
                                        return (
                                            <li {...props} key={`publisher__id_${option.id}`}>
                                                {option.name}
                                            </li>
                                        );
                                    }}
                                />
                                {errors.publisherId && touched.publisherId && (
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                        {errors.publisherId}
                                    </Typography>
                                )}
                            </Box>
                            {/* <Box sx={{ mt: 2 }}>
                                <CustomSelectBox
                                    disabled={stepCompleted}
                                    labelId="publisherId"
                                    id="publisherId"
                                    value={values.publisherId}
                                    name='publisherId'
                                    onChange={handleChange}
                                >
                                    <CustomMenuItem value={0} disabled={true}>
                                        <em>Hãy chọn nhà xuất bản</em>
                                    </CustomMenuItem>
                                    {publisherList?.map((item: IPublisher) => (
                                        <CustomMenuItem key={item.id} value={item.id}>{item.name}</CustomMenuItem>
                                    ))}
                                </CustomSelectBox>
                                {errors.publisherId && touched.publisherId && (
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                        {errors.publisherId}
                                    </Typography>
                                )}
                            </Box> */}
                            <Box sx={{ mt: 2 }}>
                                <CustomAutoComplete
                                    disabled={stepCompleted}
                                    disablePortal
                                    id="providerId"
                                    options={providerList || []}
                                    getOptionLabel={(option: IProvider) => option.name}
                                    value={providerList.find((option: IProvider) => option.id === values.providerId) || null}
                                    onChange={(event: any, newValue) => {
                                        const selectedId = newValue ? newValue.id : 0;
                                        setFieldValue('providerId', selectedId);
                                    }}
                                    sx={{ width: '100%' }}
                                    renderInput={
                                        (params) =>
                                            <CustomTextField
                                                {...params}
                                                name='providerId'
                                                label="Hãy chọn nhà cung cấp"
                                            />
                                    }
                                    renderOption={(props, option: IProvider) => {
                                        return (
                                            <li {...props} key={`provider__id_${option.id}`}>
                                                {option.name}
                                            </li>
                                        );
                                    }}
                                />
                                {errors.providerId && touched.providerId && (
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                        {errors.providerId}
                                    </Typography>
                                )}
                            </Box>
                            {/* <Box sx={{ mt: 2 }}>
                                <CustomSelectBox
                                    disabled={stepCompleted}
                                    labelId="providerId"
                                    id="providerId"
                                    value={values.providerId}
                                    name='providerId'
                                    onChange={handleChange}
                                >
                                    <CustomMenuItem value={0} disabled={true}>
                                        <em>Hãy chọn nhà cung cấp</em>
                                    </CustomMenuItem>
                                    {providerList?.map((item: IProvider) => (
                                        <CustomMenuItem key={item.id} value={item.id}>{item.name}</CustomMenuItem>
                                    ))}
                                </CustomSelectBox>
                                {errors.providerId && touched.providerId && (
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                        {errors.providerId}
                                    </Typography>
                                )}
                            </Box> */}
                            <Box sx={{ mt: 2 }}>
                                <CustomAutoComplete
                                    disabled={stepCompleted}
                                    disablePortal
                                    id="languageId"
                                    options={languageList || []}
                                    getOptionLabel={(option: IBookLanguage) => option.language_name}
                                    value={languageList.find((option: IBookLanguage) => option.id === values.languageId) || null}
                                    onChange={(event: any, newValue) => {
                                        const selectedId = newValue ? newValue.id : 0;
                                        setFieldValue('languageId', selectedId);
                                    }}
                                    sx={{ width: '100%' }}
                                    renderInput={
                                        (params) =>
                                            <CustomTextField
                                                {...params}
                                                name='languageId'
                                                label="Hãy chọn ngôn ngữ sách"
                                            />
                                    }
                                    renderOption={(props, option: IBookLanguage) => {
                                        return (
                                            <li {...props} key={`language__id_${option.id}`}>
                                                {option.language_name}
                                            </li>
                                        );
                                    }}
                                />
                                {errors.languageId && touched.languageId && (
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                        {errors.languageId}
                                    </Typography>
                                )}
                            </Box>
                            {/* <Box sx={{ mt: 2 }}>
                                <CustomSelectBox
                                    disabled={stepCompleted}
                                    labelId="languageId"
                                    id="languageId"
                                    value={values.languageId}
                                    name='languageId'
                                    onChange={handleChange}
                                >
                                    <CustomMenuItem value={0} disabled={true}>
                                        <em>Hãy chọn ngôn ngữ sách</em>
                                    </CustomMenuItem>
                                    {languageList?.map((item: IBookLanguage) => (
                                        <CustomMenuItem key={item.id} value={item.id}>{item.language_name}</CustomMenuItem>
                                    ))}
                                </CustomSelectBox>
                                {errors.languageId && touched.languageId && (
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                        {errors.languageId}
                                    </Typography>
                                )}
                            </Box> */}
                            <Box sx={{ mt: 2 }}>
                                <CustomAutoComplete
                                    disabled={stepCompleted}
                                    disablePortal
                                    id="bookFormId"
                                    options={bookFormList || []}
                                    getOptionLabel={(option: IBookForm) => option.name}
                                    value={bookFormList.find((option: IBookForm) => option.id === values.bookFormId) || null}
                                    onChange={(event: any, newValue) => {
                                        const selectedId = newValue ? newValue.id : 0;
                                        setFieldValue('bookFormId', selectedId);
                                    }}
                                    sx={{ width: '100%' }}
                                    renderInput={
                                        (params) =>
                                            <CustomTextField
                                                {...params}
                                                name='bookFormId'
                                                label="Hãy chọn hình thức sách"
                                            />
                                    }
                                    renderOption={(props, option: IBookForm) => {
                                        return (
                                            <li {...props} key={`form__id_${option.id}`}>
                                                {option.name}
                                            </li>
                                        );
                                    }}
                                />
                                {errors.bookFormId && touched.bookFormId && (
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                        {errors.bookFormId}
                                    </Typography>
                                )}
                            </Box>
                            {/* <Box sx={{ mt: 2 }}>
                                <CustomSelectBox
                                    disabled={stepCompleted}
                                    labelId="bookFormId"
                                    id="bookFormId"
                                    value={values.bookFormId}
                                    name='bookFormId'
                                    onChange={handleChange}
                                >
                                    <CustomMenuItem value={0} disabled={true}>
                                        <em>Hãy chọn hình thức sách</em>
                                    </CustomMenuItem>
                                    {bookFormList?.map((item: IBookForm) => (
                                        <CustomMenuItem key={item.id} value={item.id}>{item.name}</CustomMenuItem>
                                    ))}
                                </CustomSelectBox>
                                {errors.bookFormId && touched.bookFormId && (
                                    <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                        {errors.bookFormId}
                                    </Typography>
                                )}
                            </Box> */}
                            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                                {!stepCompleted ? (
                                    <CustomButton
                                        type='submit'
                                        variant="contained"
                                        color="secondary"
                                        disabled={isLoading}
                                    >
                                        {isLoading &&
                                            (<CircularProgress color="inherit" size={25} />)
                                        }
                                        Lưu và tiếp tục
                                    </CustomButton>
                                ) : (
                                    <Typography variant="caption" sx={{ display: 'inline-block' }}>
                                        Bước 1 đã hoàn thành
                                    </Typography>
                                )}
                            </Box>
                        </Form>
                    )}
                </Formik>
            </Stack>
        </>
    )
}

export default AddInfoProduct
