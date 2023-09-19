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
  AlertTitle,
  Alert,
  colors,
} from "@mui/material";
import Link from "next/link";
import dynamic from 'next/dynamic'
// const CustomTextField = dynamic(import('../../../components/forms/theme-elements/CustomTextField'), {
//   ssr: false
// })
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { useTheme } from '@mui/material/styles';
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

interface FormValues {
  email: string;
  password: string;
}

interface loginProps {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
  isLoading: Boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<Boolean>>;
}

const AuthLogin = ({ title, subtitle, subtext, isLoading, setIsLoading }: loginProps) => {
  const searchParams = useSearchParams();
  const isError = searchParams && searchParams.get('error') === "CredentialsSignin" ? true : false;
  const isSessionExpired = searchParams ? searchParams.get("isSessionExpired") === "true" : false;
  const theme = useTheme()
  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("email not be empty"),
    password: Yup.string().required("Password not be empty"),
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      // Xử lý logic khi form được submit
      toast.warning("Login with" + values.email)
      setIsLoading(true);
      const result = await signIn("credentials", {
        email: values?.email,
        password: values?.password,
        redirect: true,
        callbackUrl: "/",
      });
      setIsLoading(false);
    } catch (e) {
      console.log(e)
      setIsLoading(false);
      toast.error("Can not Login with" + values.email)
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
      {isError === true && (
        <Alert severity="error" >
          <AlertTitle>Login Error!</AlertTitle>
          Something went wrong — <strong>Please try again!</strong>
        </Alert>
      )}
      {isSessionExpired === true && (
        <Alert severity="warning" >
          <AlertTitle>Session Has expired!</AlertTitle>
          Your session not available — <strong>Please login again!</strong>
        </Alert>
      )}
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
                  htmlFor="email"
                  mb="5px"
                  style={{color: theme.palette.grey[600]}}
                >
                  Username
                </Typography>
                <Field
                  as={CustomTextField}
                  id={"email"}
                  name={"email"}
                  variant="outlined"
                  onChange={handleChange}
                  fullWidth
                  InputProps={{
                    style: { color: '#000' }, // Màu chữ đen
                  }}
                />
                {/* <ErrorMessage name="username" component="div" /> */}
                {errors.email && touched.email && (
                  <Typography variant="body1" sx={{ color: (theme) => theme.palette.error.main }}>
                    {errors.email}
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
                  style={{color: theme.palette.grey[600]}}
                >
                  Password
                </Typography>
                <Field
                  as={CustomTextField}
                  id={"password"}
                  name="password"
                  type="password"
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: { color: '#000' }, // Màu chữ đen
                  }}
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
                disabled={!!isLoading}
              >
                {
                  isLoading ?
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
