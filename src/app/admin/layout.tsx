import React, { ReactNode, useEffect } from 'react';
import FullLayout from '@/layouts/full/FullLayout'
import { getSession } from 'next-auth/react';
import { GetServerSidePropsContext } from 'next';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {

  return (
    <FullLayout>
      {children}
    </FullLayout>
  );
};

// export const getServerSideProps = async (context : GetServerSidePropsContext) => {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/authentication/login',
//         permanent: false,
//       },
//     };
//   }
//   if (session.user.userInfo.roles[0].roleName !== 'admin') {
//     return {
//       redirect: {
//         destination: '/404',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// };


export default AdminLayout;
