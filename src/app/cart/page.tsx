import React from 'react'
import styles from './page.module.scss'
import ClientLayout from '@/layouts/ClientLayout/ClientLayout'
import ClientHeader from '@/components/ClientHeader/ClientHeader'

const ProductCartPage = () => {
    return (
        <>
            <ClientLayout>
                <ClientHeader />
                <div className="container-fluid py-5">
                    <div className="row px-xl-5">
                        <div className="col-lg-8 table-responsive mb-5">
                            <table className="table table-light table-borderless table-hover text-center mb-0">
                                <thead className="thead-dark table-dark">
                                    <tr>
                                        <th>Products</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody className="align-middle">
                                    <tr className='border border-1 border-top-0 border-end-0 border-start-0'>
                                        <td className="align-middle">
                                            <img src="/img/book/sach1.jpg" alt="" style={{ width: 50 }} />{" "}
                                            Product Name
                                        </td>
                                        <td className="align-middle">200.000VND</td>
                                        <td className="align-middle">
                                            <div
                                                className="input-group quantity mx-auto"
                                                style={{ width: 100 }}
                                            >
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-minus">
                                                        <i className="fa fa-minus" />
                                                    </button>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-sm bg-light border-top-1 border-bottom-1 text-center"
                                                    defaultValue={1}
                                                />
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-plus">
                                                        <i className="fa fa-plus" />
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">$150</td>
                                        <td className="align-middle">
                                            <button className="btn btn-sm btn-danger">
                                                <i className="fa fa-times" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className='border border-1 border-top-0 border-end-0 border-start-0'>
                                        <td className="align-middle">
                                            <img src="/img/book/sach2.jpg" alt="" style={{ width: 50 }} />{" "}
                                            Product Name
                                        </td>
                                        <td className="align-middle">200.000VND</td>
                                        <td className="align-middle">
                                            <div
                                                className="input-group quantity mx-auto"
                                                style={{ width: 100 }}
                                            >
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-minus">
                                                        <i className="fa fa-minus" />
                                                    </button>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-sm bg-light border-top-1 border-bottom-1 text-center"
                                                    defaultValue={1}
                                                />
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-plus">
                                                        <i className="fa fa-plus" />
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">$150</td>
                                        <td className="align-middle">
                                            <button className="btn btn-sm btn-danger">
                                                <i className="fa fa-times" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className='border border-1 border-top-0 border-end-0 border-start-0'>
                                        <td className="align-middle">
                                            <img src="/img/book/sach3.jpg" alt="" style={{ width: 50 }} />{" "}
                                            Product Name
                                        </td>
                                        <td className="align-middle">200.000VND</td>
                                        <td className="align-middle">
                                            <div
                                                className="input-group quantity mx-auto"
                                                style={{ width: 100 }}
                                            >
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-minus">
                                                        <i className="fa fa-minus" />
                                                    </button>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-sm bg-light border-top-1 border-bottom-1 text-center"
                                                    defaultValue={1}
                                                />
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-plus">
                                                        <i className="fa fa-plus" />
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">$150</td>
                                        <td className="align-middle">
                                            <button className="btn btn-sm btn-danger">
                                                <i className="fa fa-times" />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-lg-4">
                            <form className='mb-3' action="">
                                <div className={styles.inputGroup}>
                                    <input
                                        type="text"
                                        className={`${styles.formControl} p-2`}
                                        placeholder="Coupon Code"
                                    />
                                    <div className='d-flex'>
                                        <button className="btn btn-primary">Apply Coupon</button>
                                    </div>
                                </div>
                            </form>
                            <h5 className={`${styles.sectionTitle} position-relative text-uppercase mb-3`}>
                                <span className="bg-white pe-3">Cart Summary</span>
                            </h5>
                            <div className="bg-light p-4 mb-5">
                                <div className="border-bottom pb-2">
                                    <div className="d-flex justify-content-between mb-3">
                                        <h6>Subtotal</h6>
                                        <h6>$150</h6>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-medium">VAT (10%)</h6>
                                        <h6 className="font-weight-medium">$15</h6>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <div className="d-flex justify-content-between mt-2">
                                        <h5>Total</h5>
                                        <h5>$160</h5>
                                    </div>
                                    <button className="btn w-100 btn-primary font-weight-bold my-3 py-3">
                                        Proceed To Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ClientLayout>
        </>
    )
}

export default ProductCartPage
