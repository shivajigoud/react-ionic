import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AddUser from '../components/AddUser';
import UserTable from '../components/UserTable';
import EditUser from '../components/EditUser';
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className="container">
        <AddUser></AddUser>
        <UserTable></UserTable>
      </div>
    ),
  },
  {
    path: '/editUser/:id',
    element: <EditUser></EditUser>,
  },
]);
export default router;
