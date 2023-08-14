"use client"
import { Box, Button, CircularProgress, FormControlLabel, FormGroup, Modal, Stack, Typography, useTheme } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import CustomTextField from '../forms/theme-elements/CustomTextField';
import { APIGetAllCategory, APIUpdateCategory } from '@/lib/axios/api/categoryAPI';
import { useSession } from 'next-auth/react';

interface FormValues {
    maLoai: string;
    tenLoai: string;
}
interface IProps {
    showModalUpdate: boolean;
    setShowModalUpdate: (value: boolean) => void;
    categorySelected: ICategory | null;
    setCategorySelected: (value: ICategory | null) => void;
}
const UpdateModal = (props: IProps) => {
    const { showModalUpdate, setShowModalUpdate, categorySelected, setCategorySelected } = props;
    const theme = useTheme();
    const { data: session } = useSession();
    const { mutate } = APIGetAllCategory();

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
        maLoai: categorySelected?.maLoai || "",
        tenLoai: categorySelected?.tenLoai || "",
        // maLoai: "",
        // tenLoai: "",
    };
    const validationSchema = Yup.object({
        maLoai: Yup.string()
            .max(50, "ma loai must be <= 50 characters")
            .required("ma loai not be empty"),
        tenLoai: Yup.string()
            .max(50, "ten loai must be <= 50 characters")
            .required("ten loai not be empty"),
    });
    const handleCloseModal = () => {
        //cate selected clear
        setCategorySelected(null)
        setShowModalUpdate(false);
    }
    const handleSubmit = async (values: FormValues) => {
        try {
            const res = await APIUpdateCategory(values.maLoai, values.tenLoai, session);
            console.log(res)
            mutate()
        } catch (e) {
            console.log("fetch fail")
        }
    };
    return (
        <Modal
            open={showModalUpdate}
            onClose={() => handleCloseModal()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2"
                    style={{ color: theme.palette.text.primary }}
                >
                    Edit category
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
                                        style={{ color: theme.palette.text.primary }}
                                        variant="subtitle1"
                                        fontWeight={600}
                                        component="label"
                                        htmlFor="maLoai"
                                        mb="5px"
                                    >
                                        Ma loai
                                    </Typography>
                                    <Field
                                        as={CustomTextField}
                                        id={"maLoai"}
                                        name={"maLoai"}
                                        variant="outlined"
                                        onChange={handleChange}
                                        disabled={true}
                                        fullWidth
                                    />
                                    {/* <ErrorMessage name="username" component="div" /> */}
                                    {errors.maLoai && touched.maLoai && (
                                        <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                            {errors.maLoai}
                                        </Typography>
                                    )}
                                </Box>
                                <Box mt="25px">
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

export default UpdateModal
