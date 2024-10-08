import React from 'react'
import AdminNavigation from './admin/components/admin-navigation';

const AdminLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <>
        <AdminNavigation />
        {children}
    </>
  )
}

export default AdminLayout