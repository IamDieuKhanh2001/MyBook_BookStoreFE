'use client'
import React from 'react'
import styles from './VoucherBackground.module.scss'

const VoucherBackground = () => {
    return (
        <>
            <svg
                className={styles.voucherBg}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink='http://www.w3.org/1999/xlink'
                viewBox="7.5 -2 478.7 148"
                style={{ filter: 'drop-shadow(rgba(0, 0, 0, 0.15) 0px 1px 3px)' }}
            >
                <g fill="none" fillRule="evenodd">
                    <g>
                        <g>
                            <g>
                                <g transform="translate(-544 -3050) translate(80 2072) translate(0 930) translate(464 48)">
                                    <path
                                        id="Frame_voucher_Web"
                                        d="M 110 144 h -98 a 12 12 0 0 1 -12 -12 v -122 a 12 12 0 0 1 12 -12 H 110 a 12.02 12 0 0 0 24 0 H 480.7 a 12 12 0 0 1 12 12 V 132 a 12 12 0 0 1 -12 12 H 134 v 0 a 12 12 0 0 0 -24 0 v 0 Z"
                                        transform="translate(0.5 0.5)"
                                        fill="#fff"
                                        stroke="rgba(0,0,0,0)"
                                        strokeMiterlimit={10}
                                        strokeWidth={1}
                                    >
                                    </path>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </>
    )
}

export default VoucherBackground
