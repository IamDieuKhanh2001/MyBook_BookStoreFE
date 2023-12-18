'use client'

import React from 'react'
import SectionTitle from '@/components/shared/sectionTitle/SectionTitle'

interface IOrderNoteProps {
    noteMessage: string
    setNoteMessage: React.Dispatch<React.SetStateAction<string>>
}
const OrderNote = (props: IOrderNoteProps) => {
    const { noteMessage, setNoteMessage } = props

    return (
        <>
            <div className='row'>
                <div className="col-12">
                    <SectionTitle title='Ghi chú cho đơn hàng (Không bắt buộc)' />
                    <div className="form-floating">
                        <textarea
                            className="form-control"
                            placeholder="Leave a comment here"
                            id="noteTextArea"
                            value={noteMessage}
                            style={{ height: 200 }}
                            onChange={(e) => setNoteMessage(e.target.value)}
                        />
                        <label htmlFor="noteTextArea">Ghi chú</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderNote
