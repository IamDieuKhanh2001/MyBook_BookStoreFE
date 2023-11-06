'use client'
import React from 'react'
import styles from './ProductInfo.module.scss'
import { IBook } from '../../../../../../types/IBook'

interface IProductInfoProps {
    product: IBook
}
const ProductInfo = (props: IProductInfoProps) => {
    const { product } = props

    return (
        <>
            <div className={styles.productInfo}>
                <h4 className='my-3'>Thông tin sản phẩm</h4>
                <div className={styles.productInfoContent}>
                    <table className={styles.productInfoTable}>
                        <tbody>
                            <tr>
                                <th className={styles.tableLabel}>
                                    Mã hàng
                                </th>
                                <td className={styles.dataValue}>
                                    {product.isbn_code}
                                </td>
                            </tr>
                            <tr>
                                <th className={styles.tableLabel}>
                                    Số lượng
                                </th>
                                <td className={styles.dataValue}>
                                    {product.quantity}
                                </td>
                            </tr>
                            <tr>
                                <th className={styles.tableLabel}>
                                    Thể loại
                                </th>
                                <td className={styles.dataValue}>
                                    {product.ccategory?.name}
                                </td>
                            </tr>
                            <tr>
                                <th className={styles.tableLabel}>
                                    Nhà cung cấp
                                </th>
                                <td className={styles.dataValue}>
                                    {product.provider?.name}
                                </td>
                            </tr>
                            <tr>
                                <th className={styles.tableLabel}>
                                    Nhà xuất bản
                                </th>
                                <td className={styles.dataValue}>
                                    {product.publisher?.name}
                                </td>
                            </tr>
                            <tr>
                                <th className={styles.tableLabel}>
                                    Năm xuất bản
                                </th>
                                <td className={styles.dataValue}>
                                    {product.publishing_year}
                                </td>
                            </tr>
                            <tr>
                                <th className={styles.tableLabel}>
                                    Số trang
                                </th>
                                <td className={styles.dataValue}>
                                    {product.number_of_pages} trang
                                </td>
                            </tr>
                            <tr>
                                <th className={styles.tableLabel}>
                                    Trọng lượng
                                </th>
                                <td className={styles.dataValue}>
                                    {product.weight} g
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ProductInfo
