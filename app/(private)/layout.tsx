import React from 'react'
import PrivateNav from './components/private-nav';

const PrivateLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
  return (
    <>
        <PrivateNav />
        <main>
            {children}
        </main>
    </>
  )
}

export default PrivateLayout