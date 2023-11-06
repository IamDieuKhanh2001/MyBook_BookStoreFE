'use client'
import React, { useState, useEffect } from 'react'
import styles from './page.module.scss'
import LoginForm from '@/components/authentication/LoginForm/LoginForm'
import RegisterForm from '@/components/authentication/Register/RegisterForm'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const AuthenticationPage = () => {
  const [activeTab, setActiveTab] = useState('login');
  const { data: session } = useSession();
  const router =  useRouter()

  const handleTabClick = (tab: 'login' | 'register') => {
    setActiveTab(tab);
  };

  useEffect(()=> {
    if(session) {
      router.push('/')
    }
  }, [session])

  return (
    <>
      <div className='container section-container'>
        <div className={styles.loginForm}>
          <div className={styles.loginFormContent}>
            <div className={styles.loginWindow}>
              <div>
                <ul className={styles.popupLoginTab}>
                  <li
                    className={`${styles.popupLoginTabLogin} ${activeTab === 'login' ? styles.active : ''}`}
                    onClick={() => handleTabClick('login')}
                  >
                    <a>Đăng nhập</a>
                    <hr />
                  </li>
                  <li
                    className={`${styles.popupLoginTabRegister} ${activeTab === 'register' ? styles.active : ''}`}
                    onClick={() => handleTabClick('register')}
                  >
                    <a>Đăng Ký</a>
                    <hr />
                  </li>
                </ul>
              </div>
              <div
                className={`${styles.popupLoginContent} ${activeTab === 'login' ? styles.show : styles.hide}`}
              >
                <LoginForm />
              </div>
              <div
                className={`${styles.popupRegisterContent} ${activeTab === 'register' ? styles.show : styles.hide}`}
              >
                <RegisterForm setActiveTab={setActiveTab} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthenticationPage
