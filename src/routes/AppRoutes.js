import { shallowEqual, useSelector } from 'react-redux';
import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import UnauthorizedLayout from '../components/layouts/UnauthorizedLayout'
import Signup from '../components/pages/Signup';
// ----------------------------------------------------------------------
export default function Router() {
  const auth = useSelector(state => state, shallowEqual);
  console.log(auth.data);
  return useRoutes(
     [
          {
            path: '/dashboard',
            element: auth.isLoggedIn ? <UnauthorizedLayout /> : <Navigate to="/" replace />,
            children: [
              {
                path: 'dashboard',
                element: <Navigate to="/dashboard/main" replace />,
              }
            ],
          },

          {
            path: '/',
            element: auth.isLoggedIn ?  <Navigate to="/dashboard/main" replace /> : <Signup />,
            
          },

          { path: '*', element: <Navigate to="/404" replace /> },
        ]
  );
}