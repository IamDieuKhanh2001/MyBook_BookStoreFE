"use client"
import { Box, Button, CircularProgress, FormControlLabel, FormGroup, Modal, Stack, Typography, useTheme } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import CustomTextField from '../forms/theme-elements/CustomTextField';
import { useSession } from 'next-auth/react';
import useAxiosAuth from '@/lib/hooks/useAxiosAuth';
import { toast } from 'react-toastify';
import { useCustomSWR } from '@/lib/swr/useCustomSWR';

interface FormValues {
    tenLoai: string;
}
interface IProps {
    showModalCreate: boolean;
    setShowModalCreate: (value: boolean) => void;
}
const CreateModal = (props: IProps) => {
    const { showModalCreate, setShowModalCreate } = props;
    const theme = useTheme();
    const { data: session } = useSession();
    const { mutate } = useCustomSWR(`/api/Loai`);
    const axiosAuth = useAxiosAuth();

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
        tenLoai: "",
    };
    const validationSchema = Yup.object({
        tenLoai: Yup.string()
            .max(50, "ten loai must be <= 50 characters")
            .required("ten loai not be empty"),
    });
    const handleCloseModal = () => {
        //cate selected clear
        setShowModalCreate(false);
    }
    const handleSubmit = async (values: FormValues) => {
        try {
            toast.success("Add loai complete")

            const url = `/api/Loai`;
            const body = {
                tenLoai: values?.tenLoai,
            };
            const res = await axiosAuth.post(url, body);
            console.log(res)
            mutate()
            handleCloseModal()
            toast.success("Add loai complete name: " + values?.tenLoai)
        } catch (e) {
            console.log("Something when wrong, Please try again!")
            console.log("fetch fail")
            toast.error("Something when wrong, Please try again!")
        }
    };
    return (
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
                    Create category
                </Typography>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ setFieldValue, handleChange, errors, touched, isSubmitting }) => (
                        <Form>
                            <Stack>
                                <Box>
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight={600}
                                        component="label"
                                        htmlFor="password"
                                        mb="5px"
                                        style={{ color: theme.palette.text.primary }}
                                    >
                                        Ten loai
                                    </Typography>
                                    <Field
                                        as={CustomTextField}
                                        id={"tenLoai"}
                                        name="tenLoai"
                                        onChange={handleChange}
                                        variant="outlined"
                                        fullWidth
                                    />
                                    {errors.tenLoai && touched.tenLoai && (
                                        <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                            {errors.tenLoai}
                                        </Typography>
                                    )}
                                </Box>
                            </Stack>
                            <Box>
                                <Button
                                    variant="contained"
                                    color="success"
                                    size="large"
                                    fullWidth
                                    type="submit"
                                    disabled={isSubmitting}
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
    )
}

export default CreateModal
