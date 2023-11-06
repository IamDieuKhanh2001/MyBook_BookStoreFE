'use client'
import React, { useState } from 'react'
import styles from './ListImgModal.module.scss'

interface IListImgModalProps {
    imgList: IProductImage[]
    handleCloseModalAllImg: () => void;
}
const ListImgModal = ({ imgList, handleCloseModalAllImg }: IListImgModalProps) => {
    const [productImages, SetProductImages] = useState([
        '/img/book/sach1.jpg',
        '/img/book/sach2.jpg',
        '/img/book/sach3.jpg',
        '/img/book/sach4.jpg',
        '/img/book/sach5.jpg'
    ])
    const [currentActiveIndex, setCurrentActiveIndex] = useState(0);
    const handleThumbnailHover = (index: number) => {
        setCurrentActiveIndex(index); // Cập nhật currentActive khi nhấn vào thumbnail
    };
    return (
        <>
            <div
                className="modal d-block"
                tabIndex={-1}
                role="dialog"
            >
                <div className="modal-dialog modal-dialog-scrollable modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Các ảnh sản phẩm
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={() => handleCloseModalAllImg()}
                            />
                        </div>
                        <div className={`modal-body ${styles.modalBody}`}>
                            <div className={styles.imgMain}>
                                <img
                                    src={imgList && imgList.length > 0 ? imgList[currentActiveIndex].image_source : '/img/book/no-image.jpg'}
                                    alt={`product image`}
                                />
                            </div>
                            <div className={styles.imgListContainer} >
                                {imgList.map((imgItem, index) => (
                                    <img
                                        key={index}
                                        src={imgItem.image_source}
                                        alt={imgItem.id.toString()}
                                        onClick={() => handleThumbnailHover(index)}
                                        className={`${styles.imgListItem}  ${index === currentActiveIndex ? styles.imgThumbActive : ''}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal-backdrop show"
            ></div>
        </>
    )
}

export default ListImgModal
