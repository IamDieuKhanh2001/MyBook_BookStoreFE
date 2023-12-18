'use client'

import CustomTextField from '@/components/forms/theme-elements/CustomTextField';
import CustomTimePicker from '@/components/forms/theme-elements/CustomTimePicker';
import useAPIFlashSale from '@/lib/hooks/api/useAPIFlashSale';
import { errorHandler } from '@/lib/utils/ErrorHandler';
import { Box, CircularProgress, Modal, Typography, useTheme, Stack, Button } from '@mui/material';
import { AxiosResponse } from 'axios';
import dayjs from 'dayjs';
import { Field, Form, Formik } from 'formik';
import React from 'react'
import { toast } from 'react-toastify';
import { KeyedMutator } from 'swr';
import * as Yup from 'yup';
import { IFlashSaleEventDay } from '../../../../../../../types/IFlashSaleEventDay';

interface FormValues {
    percentDiscount: number;
    timeStart: string;
    timeEnd: string;
}
interface ICreateFlashSalePeriodModalProps {
    showModalCreate: boolean;
    setShowModalCreate: (value: boolean) => void;
    flashSaleItem: IFlashSaleEventDay;
    mutate: KeyedMutator<AxiosResponse<any, any>>
}
const CreateFlashSalePeriodModal = (props: ICreateFlashSalePeriodModalProps) => {
    const { showModalCreate, setShowModalCreate, flashSaleItem, mutate } = props;
    const { getFlashSaleDayListPaginated, createNewFlashSalePeriod } = useAPIFlashSale()
    const { mutate: mutateData } = getFlashSaleDayListPaginated()

    const theme = useTheme();

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: theme.palette.primary.light,
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    //Formik init
    const initialValues: FormValues = {
        percentDiscount: 10,
        timeStart: "",
        timeEnd: "",
    };
    const validationSchema = Yup.object({
        percentDiscount: Yup.number()
            .typeError('*Phần trăm giảm giá là số, không chứa chữ cái A-Z, a-z, các kí hiệu đặc biệt')
            .min(0, '*Phần trăm giảm giá không được âm')
            .required('*Phần trăm giảm giá không được để trống'),
        timeStart: Yup.string()
            .required("*Chọn thời gian bắt đầu khung giờ sale"),
        timeEnd: Yup.string()
            .required("*Chọn thời gian kết thúc khung giờ sale"),
    });

    const handleCloseModal = () => {
        setShowModalCreate(false);
    }

    const handleChangeTimeFormat = (value: any) => { // value is ISO-8601 
        const date = dayjs(value);
        return date.format('HH:mm:ss')
    }

    const handleSubmit = async (values: FormValues) => {
        try {
            const { percentDiscount, timeEnd, timeStart } = values
            await createNewFlashSalePeriod(flashSaleItem.id, percentDiscount, timeStart, timeEnd)
            handleCloseModal()
            mutate()
            // mutateData(['/admin/flash-sale/all']) // key API mutate
            toast.success("Tạo khung giờ sự kiện <" + values.timeStart + '-' + values.timeEnd + '> thành công cho ngày <' + flashSaleItem.event_date + '>')
        }
        catch (e) {
            errorHandler(e)
        }
    };

    return (
        <>
            <Modal
                open={showModalCreate}
                onClose={() => handleCloseModal()}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2"
                        style={{ color: theme.palette.text.primary }}
                    >
                        Tạo mới khung giờ cho ngày {flashSaleItem.event_date}
                    </Typography>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ values, setFieldValue, handleChange, errors, touched, isSubmitting }) => (
                            <Form>
                                <Box sx={{ mt: 2 }}>
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight={600}
                                        component="label"
                                        htmlFor="timeStart"
                                        mb="5px"
                                        style={{ color: theme.palette.text.primary }}
                                    >
                                        Giờ bắt đầu
                                    </Typography>
                                    <CustomTimePicker
                                        value={values.timeStart}
                                        onChangeEvent={
                                            (value: any) => setFieldValue('timeStart', handleChangeTimeFormat(value))
                                        }
                                    />
                                    {errors.timeStart && touched.timeStart && (
                                        <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                            {errors.timeStart}
                                        </Typography>
                                    )}
                                </Box>
                                <Box sx={{ mt: 2 }}>
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight={600}
                                        component="label"
                                        htmlFor="timeEnd"
                                        mb="5px"
                                        style={{ color: theme.palette.text.primary }}
                                    >
                                        Giờ kết thúc
                                    </Typography>
                                    <CustomTimePicker
                                        value={values.timeEnd}
                                        onChangeEvent={
                                            (value: any) => setFieldValue('timeEnd', handleChangeTimeFormat(value))
                                        }
                                    />
                                    {errors.timeEnd && touched.timeEnd && (
                                        <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                            {errors.timeEnd}
                                        </Typography>
                                    )}
                                </Box>
                                <Box sx={{ mt: 2 }}>
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight={600}
                                        component="label"
                                        htmlFor="percentDiscount"
                                        mb="5px"
                                        style={{ color: theme.palette.text.primary }}
                                    >
                                        Phần trăm giảm (%)
                                    </Typography>
                                    <Field
                                        as={CustomTextField}
                                        id={"percentDiscount"}
                                        name="percentDiscount"
                                        value={values.percentDiscount}
                                        onChange={handleChange}
                                        variant="outlined"
                                        fullWidth
                                    />
                                    {errors.percentDiscount && touched.percentDiscount && (
                                        <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                            {errors.percentDiscount}
                                        </Typography>
                                    )}
                                </Box>
                                <Box sx={{ mt: 2 }}>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        size="large"
                                        fullWidth
                                        type="submit"
                                        disabled={false}
                                    >
                                        {
                                            isSubmitting ?
                                                (<CircularProgress color="inherit" size={25} />)
                                                :
                                                "Save"
                                        }
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        size="large"
                                        fullWidth
                                        onClick={() => handleCloseModal()}
                                    >
                                        Cancel
                                    </Button>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Modal>
        </>
    )
}

export default CreateFlashSalePeriodModal

