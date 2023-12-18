import React, { useEffect } from 'react'
import styles from './FlashSalePeriodProducts.module.scss'
import FlashSaleProduct from './FlashSaleProduct/FlashSaleProduct'
import LoadingList from '../../ProductList/LoadingList/LoadingList'
import { useInView } from 'react-intersection-observer'
import useAPIGuest from '@/lib/hooks/api/useAPIGuest'
import { IFlashSalePeriod } from '../../../../../types/IFlashSalePeriod'

interface IFlashSalePeriodProductsProps {
  periodActive: IFlashSalePeriod | undefined
  flashSalePeriodId: number;
}
const FlashSalePeriodProducts = (props: IFlashSalePeriodProductsProps) => {
  const { ref, inView } = useInView(); // Gán ref theo dõi div Spinner
  const { periodActive, flashSalePeriodId } = props
  const { getFlashSaleProductPaginated } = useAPIGuest()
  const { paginatedData: flashSaleProducts, isReachedEnd, isLoading, setSize } = getFlashSaleProductPaginated(flashSalePeriodId)

  useEffect(() => {
    if (inView) {
      setSize((previousSize) => previousSize + 1)
    }
  }, [inView]);

  return (
    <>
      <div className={styles.flashSalePageProducts} style={{ display: periodActive?.id === flashSalePeriodId ? 'block' : 'none' }}>
        <div className='row g-2'>
          {flashSaleProducts.map((product) => (
            <FlashSaleProduct key={product.id} data={product} />
          ))}
        </div>
        {isReachedEnd === false && <LoadingList loadingRef={ref} />}
      </div>
    </>
  )
}

export default FlashSalePeriodProducts
