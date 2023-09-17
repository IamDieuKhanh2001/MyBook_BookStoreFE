"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from "./providers";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const applyBootstrapCSS = pathname && !pathname.startsWith('/admin'); //Boolean
  // Không cho phép BootstrapCSS sử dụng trong page có sử dụng MUI, Tránh gây xung đột về style của 2 UI lib này
  // Kiểm tra trang không là trang admin (đang Sử dụng MUI) sẽ cho phép dùng bootstrap css
  // BS class name sẽ ảnh hưởng đến MUI do 2 thư viện này có cùng class name có tên giống nhau, style css giống nhau 

  return (
    <html lang="en">
      <head>
        <title>Bookstore KLTN</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="" name="keywords" />
        <meta content="" name="description" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Lora:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        {applyBootstrapCSS && (
          <>
            <link href="/lib/animate/animate.min.css" rel="stylesheet" />
            <link href="/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
            <link href="/css/bootstrap.min.css" rel="stylesheet" />
            <link href="/css/style.css" rel="stylesheet" />
          </>
        )}
      </head>
      <body
        className={inter.className}
        suppressHydrationWarning={true}
      >
        <Providers>
          {children}
        </Providers>
        <ToastContainer
        // position="bottom-center"
        // autoClose={5000}
        // hideProgressBar={false}
        // newestOnTop={false}
        // closeOnClick
        // rtl={false}
        // pauseOnFocusLoss
        // draggable
        // pauseOnHover
        // theme="light"
        />
      </body>
    </html>
  )
}
