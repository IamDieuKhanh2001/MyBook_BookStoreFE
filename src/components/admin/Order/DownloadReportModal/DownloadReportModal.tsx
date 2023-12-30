'use client'

import CustomButton from '@/components/forms/theme-elements/CustomButton'
import { IconPrinter } from '@tabler/icons-react'
import React, { useState } from 'react'
import {
    Box,
    CircularProgress,
    Modal,
    Typography,
    useTheme,
    Stack,
    Button
} from '@mui/material';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import { errorHandler } from '@/lib/utils/ErrorHandler';
import CustomDatePicker from '@/components/forms/theme-elements/CustomDatePicker';
import Domain from '@/enum/Domain';

interface FormValues {
    dateFrom: string,
    dateTo: string;
}
const DownloadReportModal = () => {
    const [showModalCreate, setShowModalCreate] = useState<boolean>(false)

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

    const handleCloseModal = () => {
        setShowModalCreate(false);
    }

    const handleOpenModal = () => {
        setShowModalCreate(true);
    }

    const handleChangeDateFormat = (value: any) => { // value is ISO-8601 
        const date = dayjs(value);
        return date.format('DD-MM-YYYY')
    }

    //Formik init
    const initialValues: FormValues = {
        dateFrom: '',
        dateTo: '',
    };
    const validationSchema = Yup.object({
        dateFrom: Yup.string()
            .required("*Chọn ngày diễn ra sự kiện"),
        dateTo: Yup.string()
            .required("*Chọn ngày diễn ra sự kiện"),
    });


    const handleSubmit = async (values: FormValues) => {
        try {
            const { dateFrom, dateTo } = values
            const newTabUrl = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/statistic/revenue/export?from=${dateFrom}&to=${dateTo}`;
            window.open(newTabUrl, '_blank');
            toast.success("Đã tạo xong báo cáo")
            handleCloseModal()
        }
        catch (e) {
            toast.error("Không thể tạo báo cáo, vui lòng thử lại!")
        }
    };
    return (
        <>
            <CustomButton
                startIcon={<IconPrinter />}
                color="secondary"
                size='small' disableElevation variant="contained" href=""
                sx={{ mr: 2 }}
                onClick={() => handleOpenModal()}
            >
                Xuất báo cáo
            </CustomButton>
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
                        Xuất báo cáo
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
                                        htmlFor="dateFrom"
                                        mb="5px"
                                        style={{ color: theme.palette.text.primary }}
                                    >
                                        Từ ngày
                                    </Typography>
                                    <CustomDatePicker
                                        value={values.dateFrom}
                                        onChangeEvent={
                                            (value: any) => setFieldValue('dateFrom', handleChangeDateFormat(value))
                                        }
                                        disableFuture={true}
                                    />
                                    {errors.dateFrom && touched.dateFrom && (
                                        <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                            {errors.dateFrom}
                                        </Typography>
                                    )}
                                </Box>
                                <Box sx={{ mt: 2 }}>
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight={600}
                                        component="label"
                                        htmlFor="dateTo"
                                        mb="5px"
                                        style={{ color: theme.palette.text.primary }}
                                    >
                                        Đến ngày
                                    </Typography>
                                    <CustomDatePicker
                                        value={values.dateTo}
                                        onChangeEvent={
                                            (value: any) => setFieldValue('dateTo', handleChangeDateFormat(value))
                                        }
                                        disableFuture={true}
                                    />
                                    {errors.dateTo && touched.dateTo && (
                                        <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                            {errors.dateTo}
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
                                        style={{
                                            marginBottom: '10px'
                                        }}
                                    >
                                        {
                                            isSubmitting ?
                                                (<CircularProgress color="inherit" size={25} />)
                                                :
                                                "Tạo báo cáo"
                                        }
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        size="large"
                                        fullWidth
                                        onClick={() => handleCloseModal()}
                                    >
                                        Hủy
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

export default DownloadReportModal
