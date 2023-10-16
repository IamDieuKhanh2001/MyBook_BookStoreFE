'use client'
import React, { useState } from 'react'
import styles from './ListImgModal.module.scss'

interface IListImgModalProps {
    handleCloseModalAllImg: () => void;
}
const ListImgModal = ({ handleCloseModalAllImg }: IListImgModalProps) => {
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
                <div className="modal-dialog  modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Hình ảnh
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={() => handleCloseModalAllImg()}
                            />
                        </div>
                        <div className="modal-body d-flex" style={{ gap: '20px' }}>
                            <div className={styles.imgMain}>
                                <img
                                    src={productImages[currentActiveIndex]}
                                    alt={`product image`}
                                />
                            </div>
                            <div className={styles.imgListContainer} >
                                {productImages.map((imgItem, index) => (
                                    <img
                                        key={index}
                                        src={imgItem}
                                        alt="product item"
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
