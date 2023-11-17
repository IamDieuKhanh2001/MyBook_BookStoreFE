'use client'
import React from 'react'
import styles from './CartItem.module.scss'
import { useDispatch } from 'react-redux'
import useAPIUserCart from '@/lib/hooks/api/useAPIUserCart'
import { toast } from 'react-toastify'
import { errorHandler } from '@/lib/utils/ErrorHandler'
import { useConfirm } from 'material-ui-confirm'

interface ICartItemProps {
    productData: ICartItem
    itemSelected: number[]
    setItemSelected: React.Dispatch<React.SetStateAction<number[]>>
}
const CartItem = (props: ICartItemProps) => {
    const { productData, itemSelected, setItemSelected } = props
    const dispatch = useDispatch();
    const confirm = useConfirm();
    const { increaseQty, decreaseQty, deleteCartItem, getMyCartList } = useAPIUserCart()
    const { mutate, isLoading } = getMyCartList()

    const onImageError = (e: any) => {
        e.target.src = '/img/book/no-image.jpg'
    }

    const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked === true) {
            console.log("Choose this")
            const currentItems = [...itemSelected];
            currentItems.push(productData.id);
            setItemSelected(currentItems)
        } else {
            console.log("not choose this")
            const updatedItems = itemSelected.filter(item => item !== productData.id);
            setItemSelected(updatedItems)
        }
    }

    const checkProduct = () => {
        return itemSelected.some(item => item === productData.id);
    }

    const handleIncreaseCartQty = async () => {
        try {
            await increaseQty(productData.id)
            mutate()
        } catch (e) {
            errorHandler(e)
        }
    }

    const handleDecreaseCartQty = async () => {
        try {
            await decreaseQty(productData.id)
            mutate()
        } catch (e) {
            errorHandler(e)
        }
    }

    const handleDeleteItem = async () => {
        confirm({
            title: `Đồng ý xóa ${productData.isbn_code} ?`,
            description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
        })
            .then(async () => {
                try {
                    await deleteCartItem(productData.isbn_code)
                    toast.success("Xóa thành công")
                    mutate()
                }
                catch (e) {
                    toast.error("Something when wrong, please try again")
                }
            })
    }

    const getTotalItemPrice = () => {
        let totalItemPrice = 0
        totalItemPrice = productData.book_info.price * productData.quantity
        return totalItemPrice
    }

    return (
        <>
            <div className={styles.itemProductCart}>
                <div className={styles.checkedProductCart}>
                    <input
                        type="checkbox"
                        className={styles.checkboxAddCart}
                        onChange={(event) => handleChangeCheckBox(event)}
                        checked={checkProduct()}
                    />
                </div>
                <div className={styles.imgProductCart}>
                    <img
                        className={styles.productImage}
                        src={
                            productData.book_info.images && productData.book_info.images.length > 0 ?
                                productData.book_info.images[0].image_source : '/img/book/no-image.jpg'
                        }
                        onError={onImageError}
                        alt="img product"
                    />
                </div>
                <div className={styles.groupProductInfo}>
                    <div className={styles.infoProductCart}>
                        <div>
                            <h2>
                                {productData.book_info.name}
                            </h2>
                        </div>
                        <div className={styles.itemOptions}>
                            <dd>
                                Mã số: {productData.book_info.isbn_code}
                            </dd>
                            <dd>
                                Số lượng: {productData.quantity}
                            </dd>
                        </div>
                        <div className={styles.priceOriginal}>
                            <div className={styles.cartPrice}>
                                <div>
                                    <span className={styles.price}>
                                        {productData.book_info.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                    </span>
                                </div>
                                <div className={styles.priceOld}>
                                    <span className={styles.price}>
                                        290.000 VND
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.numberProductCart}>
                        <div className="input-group quantity" style={{ width: 130 }}>
                            <div className="input-group-btn">
                                <button
                                    className="btn btn-primary btn-minus"
                                    onClick={handleDecreaseCartQty}
                                >
                                    <i className="fa fa-minus" />
                                </button>
                            </div>
                            <input
                                type="text"
                                className="form-control bg-light border-1 text-center"
                                value={productData.quantity}
                                disabled={true}
                            />
                            <div className="input-group-btn">
                                <button
                                    className="btn btn-primary btn-plus"
                                    onClick={handleIncreaseCartQty}
                                >
                                    <i className="fa fa-plus" />
                                </button>
                            </div>
                        </div>
                        <div className={styles.cartPriceTotal}>
                            <span className={styles.cartPrice}>
                                <span className={styles.price}>
                                    {getTotalItemPrice().toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.btnRemoveCart}>
                    <a className={styles.btnRemoveDestopCart} onClick={handleDeleteItem}>
                        <i className="fa fa-trash" style={{ fontSize: '22px' }}></i>
                    </a>
                </div>
            </div>
        </>
    )
}

export default CartItem
