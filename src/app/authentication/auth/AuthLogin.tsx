"use client"

import React from "react";
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import CircularProgress from '@mui/material/CircularProgress';
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
} from "@mui/material";
import Link from "next/link";
import dynamic from 'next/dynamic'
// const CustomTextField = dynamic(import('../../../components/forms/theme-elements/CustomTextField'), {
//   ssr: false
// })
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';

interface FormValues {
  username: string;
  password: string;
}

interface loginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
  setIsLoading: React.Dispatch<React.SetStateAction<Boolean>>;
}

const AuthLogin = ({ title, subtitle, subtext, setIsLoading }: loginType) => {

  const initialValues: FormValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .max(50, "Username must be <= 50 characters")
      .required("username not be empty"),
    password: Yup.string().required("Password not be empty"),
  });

  const handleSubmit = (values: FormValues) => {
    try {
      // Xử lý logic khi form được submit
      alert("Login with" + values.username + " " + values.password)
      setIsLoading(true);

      // Thực hiện công việc bất đồng bộ (ví dụ: fetch data, gửi request, ...)
      // Sau khi hoàn thành công việc, thay đổi trạng thái isLoading lại thành false
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);

    } catch (e) {
      console.log(e)
    }
  };

  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}
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
                  htmlFor="username"
                  mb="5px"
                >
                  Username
                </Typography>
                <CustomTextField
                  id={"username"}
                  name={"username"}
                  variant="outlined"
                  onChange={handleChange}
                  fullWidth
                />
                {/* <ErrorMessage name="username" component="div" /> */}
                {errors.username && touched.username && (
                  <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                    {errors.username}
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
                >
                  Password
                </Typography>
                <CustomTextField
                  id={"password"}
                  name="password"
                  type="password"
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                />
                {/* <ErrorMessage name="password" component="div" /> */}
                {errors.password && touched.password && (
                  <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                    {errors.password}
                  </Typography>
                )}
              </Box>
              <Stack
                justifyContent="space-between"
                direction="row"
                alignItems="center"
                my={2}
              >
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        disabled={true}
                      // defaultChecked 
                      />
                    }
                    label="Remeber this Device"
                  />
                </FormGroup>
                <Typography
                  component={Link}
                  href="/"
                  fontWeight="500"
                  sx={{
                    textDecoration: "none",
                    color: "primary.main",
                  }}
                >
                  Forgot Password ?
                </Typography>
              </Stack>
            </Stack>
            <Box>
              <Button
                color="primary"
                variant="contained"
                size="large"
                fullWidth
                type="submit"
                disabled={isSubmitting}
              >
                {
                  isSubmitting ?
                    (<CircularProgress color="inherit" size={25} />)
                    :
                    "Sign In"
                }
              </Button>
            </Box>
          </Form>
        )}
      </Formik>

      {subtitle}
    </>
  )
};

export default AuthLogin;
