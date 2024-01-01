import { createBrowserRouter } from 'react-router-dom';
import Error from '@components/Error';
import Onboarding from '@pages/Onboarding';
import Search from '@pages/Search';
import App from './App';
import Detail from '@pages/Detail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Onboarding /> },
      {
        path: '/search',
        children: [
          {
            index: true,
            element: <Search />,
          },
          { path: ':title', element: <Detail /> },
        ],
      },
    ],
  },
]);
