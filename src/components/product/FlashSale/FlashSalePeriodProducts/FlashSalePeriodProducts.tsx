import React from 'react'
import styles from './FlashSalePeriodProducts.module.scss'
import FlashSaleProduct from './FlashSaleProduct/FlashSaleProduct'

const FlashSalePeriodProducts = () => {
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
    </>
  )
}

export default FlashSalePeriodProducts
