import React from 'react'
import ClientNav from './components/client-nav';

const ClientLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>)  => {
  return (
    <>
        <ClientNav />
        <main>
            {children}
        </main>
    </>
  )
}

export default ClientLayout