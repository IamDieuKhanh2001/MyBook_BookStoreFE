'use client'
import AccountSideBar from '@/components/account/AccountSideBar/AccountSideBar';
import UpdateInfoNotification from '@/components/account/UpdateInfoNotification/UpdateInfoNotification';
import ClientLayout from '@/layouts/ClientLayout/ClientLayout'
import { useSession } from 'next-auth/react';
import React, { ReactNode } from 'react'

interface AccountManagementLayoutProps {
  children: ReactNode;
}

const AccountManagementLayout: React.FC<AccountManagementLayoutProps> = ({ children }) => {
  const { data: session } = useSession();

  return (
    <ClientLayout>
      <section style={{ backgroundColor: '#eee' }}>
        <div className="container-xxl py-5">
          <div className="row">
            <div className="col-lg-3">
              <AccountSideBar />
            </div>
            <div className="col-lg-9">
              {session?.user.userInfo.profile === null && (
                <UpdateInfoNotification />
              )}
              {children}
            </div>
          </div>
        </div>
      </section>
    </ClientLayout>
  );
};

export default AccountManagementLayout
