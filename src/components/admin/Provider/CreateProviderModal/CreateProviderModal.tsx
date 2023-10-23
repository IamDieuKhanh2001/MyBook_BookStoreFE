import React from 'react'
import { Box, CircularProgress, Modal, Typography, useTheme, Stack, Button } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import CustomTextField from '@/components/forms/theme-elements/CustomTextField';
import useAPIBookProvider from '@/lib/hooks/api/useAPIBookProvider';
import { errorHandler } from '@/lib/utils/ErrorHandler';

interface FormValues {
    name: string;
}
interface ICreateProviderModalProps {
    showModalCreate: boolean;
    setShowModalCreate: (value: boolean) => void;
}
const CreateProviderModal = (props: ICreateProviderModalProps) => {
    const { showModalCreate, setShowModalCreate } = props;
    const theme = useTheme();
    const { createNewProvider, getProviderList } = useAPIBookProvider()
    const { mutate } = getProviderList()

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
        name: "",
    };
    const validationSchema = Yup.object({
        name: Yup.string()
            .max(50, "Name must be <= 50 characters")
            .required("Name not be empty"),
    });

    const handleCloseModal = () => {
        setShowModalCreate(false);
    }

    const handleSubmit = async (values: FormValues) => {
        try {
            const { name } = values
            await createNewProvider(name)
            handleCloseModal()
            mutate()
            toast.success("Create provider complete with name: " + values.name)
        }
        catch (e: any) {
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
                        Create new provider
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
                                            Tên nhà cung cấp
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
                                </Stack>
                                <Box>
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

export default CreateProviderModal
