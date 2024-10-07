import React from 'react'
import ClientNavigation from './(routes)/components/client-navigation';

const ClientLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <>
        <ClientNavigation />
        {children}
    </>
  )
}

export default ClientLayout