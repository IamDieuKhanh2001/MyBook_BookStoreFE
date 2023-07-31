"use client"

import { Box } from "@mui/material";

interface BlankLayoutProps {
  children: React.ReactNode;
}

//Layout trống
//Sử dụng bằng phương thức getLayout
const BlankLayout = ({ children }: BlankLayoutProps) => {
  return (
    <Box>{children}</Box>
  )
};

export default BlankLayout;



