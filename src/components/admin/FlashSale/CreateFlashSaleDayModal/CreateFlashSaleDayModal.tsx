'use client'

import CustomDatePicker from '@/components/forms/theme-elements/CustomDatePicker';
import CustomTextField from '@/components/forms/theme-elements/CustomTextField';
import useAPIFlashSale from '@/lib/hooks/api/useAPIFlashSale';
import { errorHandler } from '@/lib/utils/ErrorHandler';
import { Box, CircularProgress, Modal, Typography, useTheme, Stack, Button } from '@mui/material';
import dayjs from 'dayjs';
import { Field, Form, Formik } from 'formik';
import React from 'react'
import { toast } from 'react-toastify';
import { KeyedMutator } from 'swr';
import * as Yup from 'yup';

interface FormValues {
    eventDate: string,
    eventName: string;
}
interface ICreateFlashSaleDayModalProps {
    showModalCreate: boolean;
    setShowModalCreate: (value: boolean) => void;
    mutate: KeyedMutator<any[]>;
}
const CreateFlashSaleDayModal = (props: ICreateFlashSaleDayModalProps) => {
    const { showModalCreate, setShowModalCreate, mutate } = props;
    const theme = useTheme();
    const { createNewFlashSaleEvent, } = useAPIFlashSale()

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
        eventDate: '',
        eventName: '',
    };
    const validationSchema = Yup.object({
        eventName: Yup.string()
            .max(50, "*Tên sự kiện không quá 50 kí tự")
            .required("*Tên sự kiện không được trống"),
        eventDate: Yup.string()
            .required("*Chọn ngày diễn ra sự kiện"),
    });

    const handleCloseModal = () => {
        setShowModalCreate(false);
    }

    const handleChangeDateFormat = (value: any) => { // value is ISO-8601 
        const date = dayjs(value);
        return date.format('DD-MM-YYYY')
    }

    const handleSubmit = async (values: FormValues) => {
        try {
            const { eventDate, eventName } = values
            await createNewFlashSaleEvent(eventName, eventDate)
            handleCloseModal()
            mutate(); 
            toast.success("Tạo sự kiện <" + values.eventName + '> thành công cho ngày <' + values.eventDate + '>')
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
                        Tạo mới ngày sự kiện
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
                                        htmlFor="eventDate"
                                        mb="5px"
                                        style={{ color: theme.palette.text.primary }}
                                    >
                                        Ngày diễn ra sự kiện
                                    </Typography>
                                    <CustomDatePicker
                                        value={values.eventDate}
                                        onChangeEvent={
                                            (value: any) => setFieldValue('eventDate', handleChangeDateFormat(value))
                                        }
                                    />
                                    {errors.eventDate && touched.eventDate && (
                                        <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                            {errors.eventDate}
                                        </Typography>
                                    )}
                                </Box>
                                <Box sx={{ mt: 2 }}>
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight={600}
                                        component="label"
                                        htmlFor="password"
                                        mb="5px"
                                        style={{ color: theme.palette.text.primary }}
                                    >
                                        Tên sự kiện
                                    </Typography>
                                    <Field
                                        as={CustomTextField}
                                        id={"eventName"}
                                        name="eventName"
                                        value={values.eventName}
                                        onChange={handleChange}
                                        variant="outlined"
                                        fullWidth
                                    />
                                    {errors.eventName && touched.eventName && (
                                        <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                            {errors.eventName}
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

export default CreateFlashSaleDayModal
