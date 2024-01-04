'use client'
import Link from 'next/link'
import React from 'react'
import styles from './ClientNavBar.module.scss'
import CategoryOffCanvas from './CategoryOffCanvas/CategoryOffCanvas';
import {
    IconCategory,
} from '@tabler/icons-react';
import TopBar from './TopBar/TopBar';
import CartDropdown from './CartDropdown/CartDropdown';
import UserDropdown from './UserDropdown/UserDropdown';
import SearchBarInput from './SearchBarInput/SearchBarInput';
import { useSession } from 'next-auth/react';
import AlertConfirmEmail from '../AlertConfirmEmail/AlertConfirmEmail';
import useAPIAuthentication from '@/lib/hooks/api/useAPIAuthentication';
import NotificationDropdown from './NotificationDropdown/NotificationDropdown';

function ClientNavBar() {
    const { data: session, update, status } = useSession();
    const { checkIsVerifiedEmail } = useAPIAuthentication()
    const [isVerified, setIsVerified] = React.useState(true)

    const updateSessionVerifyStatus = async () => {
        try {
            await update({
                ...session,
                user: {
                    ...session?.user,
                    userInfo: {
                        ...session?.user.userInfo,
                        is_email_verified: 1
                    }
                }
            });
        } catch (e) {
        }
    }
    React.useEffect(() => {
        const handleCallCHeckMail = async () => {
            try {
                let allowCall = session?.user.userInfo.is_email_verified === 0 ? true : false
                if (allowCall) {
                    const res = await checkIsVerifiedEmail()
                    if (res.status === 200) {
                        setIsVerified(true)
                        updateSessionVerifyStatus()
                    }
                }
            } catch (e: any) {
                if (e?.response.status === 400) {
                    setIsVerified(false)
                }
            }
        }
        if (status === 'authenticated' && session) {
            handleCallCHeckMail()
        }
    }, [session, status])

    console.log("NEXTAUTH_URL " + process.env.NEXTAUTH_URL)
    console.log("NEXT_PUBLIC_BACKEND_DOMAIN " + process.env.NEXT_PUBLIC_BACKEND_DOMAIN)
    return (
        <>
            <div
                className={`${styles.fixedTop} container-fluid px-0 wow fadeIn fixed-top`}
                data-wow-delay="0.1s"
            >
                <TopBar />
                <nav
                    className={`${styles.navbar} navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn`}
                    data-wow-delay="0.1s"
                >
                    <Link href="/" className="navbar-brand ms-4 ms-lg-0" scroll={false}>
                        <h1 className="fw-bold text-primary m-0">
                            Sá<span className="text-secondary">ch</span>Vi<span className="text-secondary">ệt</span>
                        </h1>
                    </Link>
                    <button
                        type="button"
                        className="navbar-toggler me-4"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse h-100" id="navbarCollapse">
                        <div className={`${styles.navbarNav} navbar-nav ms-auto p-4 p-lg-0 align-items-lg-center`}>
                            <Link href={"#"} className={`${styles.navLink} ${styles.navItem} nav-item nav-link`} data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                                <IconCategory />
                            </Link>
                            <CategoryOffCanvas />
                            <Link href="/product/searchengine" className={`${styles.navLink} ${styles.navItem} nav-item nav-link`}>
                                Sản phẩm
                            </Link>
                            <SearchBarInput />
                            {session && (
                                <>
                                    <NotificationDropdown />
                                    <CartDropdown />
                                </>
                            )}
                            <UserDropdown />
                        </div>
                    </div>
                </nav>
                {!isVerified && (
                    <AlertConfirmEmail emailAddress={session?.user.userInfo.email} />
                )}
            </div>
            {/* Navbar End */}
        </>
    )
}

export default ClientNavBar