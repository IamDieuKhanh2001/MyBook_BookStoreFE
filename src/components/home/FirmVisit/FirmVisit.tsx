
import React from 'react'
import styles from './FirmVisit.module.scss'

const FirmVisit = () => {
    return (
        <>
            {/* Firm Visit Start */}
            <div className="container-fluid bg-primary bg-icon mt-5 py-6">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-md-7 wow fadeIn" data-wow-delay="0.1s">
                            <h1 className="display-5 text-white mb-3">Về chúng tôi</h1>
                            <p className="text-white mb-0">Chào mừng đến với sachviet, nơi tinh tế của tri thức và sự đam mê. Chúng tôi tự hào là điểm đến lý tưởng cho những tâm hồn mê đọc, nơi mà từng trang sách là một cửa sổ mở ra thế giới vô tận.</p>
                        </div>
                        <div className="col-md-5 text-md-end wow fadeIn" data-wow-delay="0.5s">
                            <a className="btn btn-lg btn-secondary rounded-pill py-3 px-5" href="">Visit Now</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Firm Visit End */}
        </>
    )
}

export default FirmVisit
