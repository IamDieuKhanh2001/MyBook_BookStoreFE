'use client';

import React, { use, useEffect, useState } from 'react'
import styles from './Breadcrumb.module.scss'
import { usePathname, useRouter } from 'next/navigation';


interface IBreadcrumb {
    name: string,
    text: string,
    url: string,
}

const Breadcrumb = () => {
    const router = usePathname();
    const navigate = useRouter();


    const [hasMounted, setHasMounted] = useState(false);
    const [pathSegments, setPathSegments] = React.useState<string[]>([])

    const [breadcrumbs, setBreadcrumbs] = React.useState<IBreadcrumb[]>([{
        name: 'home',
        text: 'Home',
        url: '/'
    }])

    useEffect(() => {
        if (router) {
            setPathSegments(router.split('/').filter((segment) => segment !== ''))
            pushBreadcrumbs(pathSegments)
        }
        setHasMounted(true);
    }, [hasMounted])

    const pushBreadcrumbs = (pathSegments: string[]) => {
        if (pathSegments.length === 0) {
            return
        }

        for (let i = 0; i < pathSegments.length; i++) {
            const path = pathSegments[i]

            if (path === 'detail') {
                continue
            }

            let breadcrumb = {
                name: path,
                text: path,
                url: pathSegments.slice(0, i + 1).join('/')
            }

            switch (path) {
                case 'searchengine': {
                    breadcrumb = {
                        name: path,
                        text: 'Tìm kiếm',
                        url: pathSegments.slice(0, i + 1).join('/')
                    }
                    break
                }
                case 'product': {
                    breadcrumb = {
                        name: path,
                        text: 'Sản phẩm',
                        url: pathSegments.slice(0, i + 1).join('/')
                    }
                    break
                }
                case 'flashsale': {
                    breadcrumb = {
                        name: path,
                        text: 'Sự kiện khuyến mãi',
                        url: pathSegments.slice(0, i + 1).join('/')
                    }
                    break
                }
                case 'category': {
                    breadcrumb = {
                        name: path,
                        text: 'Thể loại',
                        url: pathSegments.slice(0, i + 1).join('/')
                    }
                    break
                }
                case 'detail': {
                    break
                }
            }
            setBreadcrumbs((breadcrumbs) => [...breadcrumbs, breadcrumb])
        }
    }

    const gotoBreadCrumb = (e: any, breadcrumb: IBreadcrumb) => {
        e.preventDefault()
        // navigate.push(breadcrumb.url)
    }


    return (
        <>
            <div className="container-xxl section-container">
                <div className='container'>
                    <div className="row">
                        <div className="col-12">
                            <nav className={`${styles.breadcrumb}`}>
                                {/* <a className={`${styles.breadcrumbItem} text-dark`} href="#">Home</a>
                                <a className={`${styles.breadcrumbItem} text-dark`} href="#">Home</a>
                                <a className={`${styles.breadcrumbItem} text-dark`} href="#">Home</a>
                                <span className={`${styles.breadcrumbItem} ${styles.active}`}>Checkout</span> */}
                                {
                                    breadcrumbs.map((breadcrumb, index) => {
                                        return (
                                            <a key={index} className={`${styles.breadcrumbItem} text-dark`} onClick={() => gotoBreadCrumb(event, breadcrumb)}>{breadcrumb.text}</a>
                                        )
                                    })
                                }
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Breadcrumb
