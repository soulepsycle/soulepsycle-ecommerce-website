import React from 'react'

const ClientLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <>
        <main>{children}</main>
    </>
  )
}

export default ClientLayout