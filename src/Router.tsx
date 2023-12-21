import { createBrowserRouter } from 'react-router-dom';
import Error from '@components/Error';
import Layout from '@components/Layout';
import Main from '@pages/Main';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Main /> },
    ]
  },
]);
