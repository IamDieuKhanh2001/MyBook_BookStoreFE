import React from 'react'
import {
    Box,
    Button,
    CircularProgress,
    Modal,
    Stack,
    Typography,
    useTheme
} from '@mui/material';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import CustomTextField from '@/components/forms/theme-elements/CustomTextField';
import { toast } from 'react-toastify';

interface FormValues {
    id: number;
    name: string;
}
interface IProps {
    showModalUpdate: boolean;
    setShowModalUpdate: (value: boolean) => void;
    publisherSelected: IPublisher | null;
    setPublisherSelected: (value: IPublisher | null) => void;
}
const UpdatePublisherModal = (props: IProps) => {
    const { showModalUpdate, setShowModalUpdate, publisherSelected, setPublisherSelected } = props;
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
        id: publisherSelected?.id || 0,
        name: publisherSelected?.name || "",
    };

    const validationSchema = Yup.object({
        id: Yup.string()
            .max(50, "ID must be <= 50 characters")
            .required("ID not be empty"),
        name: Yup.string()
            .max(50, "name must be <= 50 characters")
            .required("name not be empty"),
    });

    const handleCloseModal = () => {
        //cate selected clear
        setPublisherSelected(null)
        setShowModalUpdate(false);
    }

    const handleSubmit = async (values: FormValues) => {
        try {
            handleCloseModal()
            toast.success("update publisher complete id: " + values.id)
        }
        catch (e) {
            toast.error("Something when wrong, please try again")
        }
    }
    return (
        <>
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
                        Edit Publisher
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
                                            Mã số
                                        </Typography>
                                        <Field
                                            as={CustomTextField}
                                            id={"id"}
                                            name={"id"}
                                            variant="outlined"
                                            onChange={handleChange}
                                            disabled={true}
                                            fullWidth
                                        />
                                        {/* <ErrorMessage name="username" component="div" /> */}
                                        {errors.id && touched.id && (
                                            <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                                                {errors.id}
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
                                            Tên nhà xuất bản
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
        </>
    )
}

export default UpdatePublisherModal
