'use client'
import React, { useEffect } from 'react'
import styles from './ProductReview.module.scss'
import ReviewItem from './ReviewItem/ReviewItem';
import CreateReviewForm from './CreateReviewForm/CreateReviewForm';
import LoadingReviewList from './LoadingReviewList/LoadingReviewList';
import { useInView } from 'react-intersection-observer';
import { useConfirm } from 'material-ui-confirm';
import { toast } from 'react-toastify';

interface IProductReviewProps {
    isbnCode: string
}
const ProductReview = (props: IProductReviewProps) => {
    const { isbnCode } = props
    const { ref, inView } = useInView(); // Gán ref theo dõi div Spinner
    const confirm = useConfirm();

    useEffect(() => {
        // if (inView) {
        //   setSize((previousSize) => previousSize + 1)
        // }
    }, [inView]);

    const handleDeleteComment = async (id: number) => {
        confirm({
            title: `Đồng ý xóa ${id} ?`,
            description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
        })
            .then(async () => {
                try {

                    toast.success("Delete comment complete id: " + id)
                }
                catch (e) {
                    toast.error("Something when wrong, please try again")
                }
            })
    }

    return (
        <>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <h4 className="my-3">1 review for "Dummy Book Tilte"</h4>
                    <ReviewItem handleDeleteComment={handleDeleteComment} />
                    <ReviewItem handleDeleteComment={handleDeleteComment} />
                    <LoadingReviewList loadingRef={ref} />
                </div>
                <CreateReviewForm isbnCode={isbnCode} />
            </div>
        </>
    )
}

export default ProductReview
