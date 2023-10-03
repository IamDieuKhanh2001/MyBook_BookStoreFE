import CustomTextField from '@/components/forms/theme-elements/CustomTextField';
import useAPIParentCategory from '@/lib/hooks/api/useAPIParentCategory';
import { Box, CircularProgress, Modal, Typography, useTheme, Stack, Button } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React from 'react'
import { toast } from 'react-toastify';
import * as Yup from 'yup';

interface FormValues {
  name: string;
}
interface ICreateCategoriesModalProps {
  showModalCreate: boolean;
  setShowModalCreate: (value: boolean) => void;
}
const CreateCategoriesModal = (props: ICreateCategoriesModalProps) => {
  const { showModalCreate, setShowModalCreate } = props;
  const theme = useTheme();
  const { createNewCategory, getParentCategoryList } = useAPIParentCategory()
  const { mutate } = getParentCategoryList()

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
      await createNewCategory(values.name)
      handleCloseModal()
      mutate()
      toast.success("Create category complete with name: " + values.name)
    }
    catch (e) {
      toast.error("Something when wrong, please try again")
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
                      id={"name"}
                      name="name"
                      // onChange={handleChange}
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

export default CreateCategoriesModal