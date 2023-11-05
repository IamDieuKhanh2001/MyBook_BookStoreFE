"use client"
import Script from "next/script";
import React from "react";
import ClientNavBar from "./ClientNavBar/ClientNavBar";
import ClientFooter from "./ClientFooter/ClientFooter";
import BtnBackToTop from "./BtnBackToTop/BtnBackToTop";
import NavBarPlaceholder from "./NavBarPlaceholder/NavBarPlaceholder";

//Layout for Normal user
interface Props {
    children: React.ReactNode;
}
const ClientLayout: React.FC<Props> = ({ children }) => {

    return (
        <>
            <ClientNavBar />
            <NavBarPlaceholder />
            {children}
            <ClientFooter />
            <BtnBackToTop />
            {/* JavaScript Libraries */}
            <Script src="/lib/jquery/jquery-3.4.1.min.js"></Script>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></Script>
            <Script src="/lib/owlcarousel/owl.carousel.min.js"></Script>
            <Script src="/lib/wow/wow.min.js"></Script>
            <Script src="/lib/easing/easing.min.js"></Script>
            <Script src="/lib/waypoints/waypoints.min.js"></Script>
            {/* Template JavaScript */}
            <Script src="/js/main.js"></Script>
            {/*End JavaScript Libraries */}
        </>
    )
}

export default ClientLayout