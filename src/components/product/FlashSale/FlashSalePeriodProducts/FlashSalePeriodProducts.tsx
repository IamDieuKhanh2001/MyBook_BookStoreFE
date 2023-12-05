import React from 'react'
import styles from './FlashSalePeriodProducts.module.scss'
import FlashSaleProduct from './FlashSaleProduct/FlashSaleProduct'
import LoadingList from '../../ProductList/LoadingList/LoadingList'
import { useInView } from 'react-intersection-observer'

const FlashSalePeriodProducts = () => {
  const { ref, inView } = useInView(); // Gán ref theo dõi div Spinner
  
  return (
    <>
      <div className={styles.flashSalePageProducts} style={{ display: 'block' }}>
        <div className='row g-2'>
          <FlashSaleProduct />
          <FlashSaleProduct />
          <FlashSaleProduct />
          <FlashSaleProduct />
          <FlashSaleProduct />
          <FlashSaleProduct />
          <FlashSaleProduct />
          <FlashSaleProduct />
        </div>
      </div>
      <LoadingList loadingRef={ref} />
    </>
  )
}

export default FlashSalePeriodProducts
