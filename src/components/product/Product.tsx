import React from 'react'
import ProductList from './ProductList/ProductList'
import SortSideBar from './SortSideBar/SortSideBar'
import styles from "./Product.module.scss"
import MainSectionTitle from '../shared/MainSectionTitle/MainSectionTitle'
import FilterCurrentActive from './FilterCurrentActive/FilterCurrentActive'

const Product = () => {
    return (
        <>
            {/* Product Start */}
            <div className="container-xxl py-4">
                <div className="container">
                    {/* Title start */}
                    {/* <MainSectionTitle title='Tên Category' shortDescription='Short des cho category' /> */}
                    <div className='row'>
                        <div className='col-xl-3 col-sm-12 filterProduct'>
                            <SortSideBar />
                        </div>
                        <div className='col-xl-9 col-sm-12'>
                            <FilterCurrentActive />
                            <ProductList />
                        </div>
                    </div>
                    {/* Title End */}
                </div>
            </div>
            {/* Product End */}
        </>
    )
}

export default Product
