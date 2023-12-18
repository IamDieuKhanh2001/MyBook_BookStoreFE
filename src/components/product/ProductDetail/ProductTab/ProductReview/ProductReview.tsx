'use client'
import React, { useEffect } from 'react'
import styles from './ProductReview.module.scss'
import ReviewItem from './ReviewItem/ReviewItem';
import CreateReviewForm from './CreateReviewForm/CreateReviewForm';
import LoadingReviewList from './LoadingReviewList/LoadingReviewList';
import { useInView } from 'react-intersection-observer';
import { useConfirm } from 'material-ui-confirm';
import { toast } from 'react-toastify';
import useAPIGuest from '@/lib/hooks/api/useAPIGuest';
import { useSession } from 'next-auth/react';
import useAPIProductComment from '@/lib/hooks/api/useAPIProductComment';
import { errorHandler } from '@/lib/utils/ErrorHandler';

interface IProductReviewProps {
    totalReview: number
    productName: string
    isbnCode: string
}
const ProductReview = (props: IProductReviewProps) => {
    const { data: session } = useSession()
    const { isbnCode, totalReview, productName } = props
    const { ref, inView } = useInView(); // Gán ref theo dõi div Spinner
    const confirm = useConfirm();
    const { getProductCommentPaginated } = useAPIGuest()
    const { paginatedData: commentPaginatedData, error, isReachedEnd, mutate, setSize } = getProductCommentPaginated(isbnCode)
    const { deleteComment } = useAPIProductComment()

    useEffect(() => {
        if (inView) {
            setSize((previousSize) => previousSize + 1)
        }
    }, [inView]);

    const handleDeleteComment = async (id: number) => {
        confirm({
            title: `Đồng ý xóa ${id} ?`,
            description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
        })
            .then(async () => {
                try {
                    await deleteComment(id)
                    mutate()
                    toast.success("Delete comment complete id: " + id)
                }
                catch (e) {
                    errorHandler(e)
                }
            })
    }

    return (
        <>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <h4 className="my-3">{totalReview} lượt bình luận cho "{productName}"</h4>
                    {commentPaginatedData.map((commnent) => (
                        <ReviewItem
                            key={commnent.id}
                            data={commnent}
                            handleDeleteComment={handleDeleteComment}
                            mutate={mutate}
                        />
                    ))}
                    {!isReachedEnd && <LoadingReviewList loadingRef={ref} />}
                </div>
                {session && (<CreateReviewForm isbnCode={isbnCode} mutate={mutate} />)}
            </div>
        </>
    )
}

export default ProductReview
