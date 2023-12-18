'use client'
import React from 'react'
import {
    Grid,
} from '@mui/material'
import styles from './ImageList.module.scss'

interface IImageListProps {
    imgList: IProductImage[]
}
const ImageList = (props: IImageListProps) => {
    const { imgList } = props

    return (
        <>
            <Grid container>
                {imgList.map((imgList) => (
                    <Grid key={imgList.id} item xs={2} lg={2}>
                        <div className={styles.previewFileItem}>
                            <img
                                src={imgList.image_source}
                                alt={`IDP_${imgList.isbn_code}_index_${imgList.id}`}
                                width={100}
                                height={100}
                            />
                            <p className={styles.fileOriginName}>
                                {`Img ID: ${imgList.id}`}
                            </p>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default ImageList
