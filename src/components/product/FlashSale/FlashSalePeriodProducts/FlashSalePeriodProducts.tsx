import React, { useEffect } from 'react'
import styles from './FlashSalePeriodProducts.module.scss'
import FlashSaleProduct from './FlashSaleProduct/FlashSaleProduct'
import LoadingList from '../../ProductList/LoadingList/LoadingList'
import { useInView } from 'react-intersection-observer'
import useAPIGuest from '@/lib/hooks/api/useAPIGuest'

interface IFlashSalePeriodProductsProps {
  flashSalePeriodId: number;
}
const FlashSalePeriodProducts = (props: IFlashSalePeriodProductsProps) => {
  const { ref, inView } = useInView(); // Gán ref theo dõi div Spinner
  const { flashSalePeriodId } = props
  const { getFlashSaleProductPaginated } = useAPIGuest()
  const { paginatedData: flashSaleProducts, isReachedEnd, isLoading, setSize } = getFlashSaleProductPaginated(flashSalePeriodId)

  useEffect(() => {
    if (inView) {
      setSize((previousSize) => previousSize + 1)
    }
  }, [inView]);

  return (
    <>
      <div className={styles.flashSalePageProducts} style={{ display: 'block' }}>
        <div className='row g-2'>
          {flashSaleProducts.map((product) => (
            <FlashSaleProduct key={product.id} data={product} />
          ))}
        </div>
      </div>
      <LoadingList loadingRef={ref} />
    </>
  )
}

export default FlashSalePeriodProducts
