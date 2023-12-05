'use client'
import React from 'react'
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { Box, CircularProgress, Modal, Typography, useTheme, Stack, Button } from '@mui/material';
import CustomTextField from '@/components/forms/theme-elements/CustomTextField';
import useAPIFlashSale from '@/lib/hooks/api/useAPIFlashSale';
import { errorHandler } from '@/lib/utils/ErrorHandler';
import { KeyedMutator } from 'swr';
import { AxiosResponse } from 'axios';

interface FormValues {
    isbnCode: string;
}
interface IAddProductEventModalProps {
    periodId: number
    showModalCreate: boolean;
    setShowModalCreate: (value: boolean) => void;
    mutate: KeyedMutator<AxiosResponse<any, any>>
}
const AddProductEventModal = (props: IAddProductEventModalProps) => {
    const { periodId, setShowModalCreate, showModalCreate, mutate } = props
    const theme = useTheme();
    const { addProductToHour } = useAPIFlashSale()

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
        isbnCode: ''
    };

    const validationSchema = Yup.object({
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
    });

    const handleCloseModal = () => {
        setShowModalCreate(false);
    }

    const handleSubmit = async (values: FormValues) => {
        try {
            await addProductToHour(periodId, values.isbnCode)
            mutate()
            handleCloseModal()
            toast.success("Thêm sách vào sự kiện thành công")
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
                        Thêm sản phẩm vào khung giờ sự kiện
                    </Typography>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ setFieldValue, handleChange, errors, touched, isSubmitting }) => (
                            <Form>
                                <Box sx={{ mt: 2 }}>
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight={600}
                                        component="label"
                                        htmlFor="password"
                                        mb="5px"
                                        style={{ color: theme.palette.text.primary }}
                                    >
                                        Mã số định danh sách (ISBN code)
                                    </Typography>
                                    <Field
                                        as={CustomTextField}
                                        id={"isbnCode"}
                                        name="isbnCode"
                                        // onChange={handleChange}
                                        variant="outlined"
                                        fullWidth
                                    />
                                    {errors.isbnCode && touched.isbnCode && (
                                        <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                            {errors.isbnCode}
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

export default AddProductEventModal
