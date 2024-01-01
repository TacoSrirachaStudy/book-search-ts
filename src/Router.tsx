import { createBrowserRouter } from 'react-router-dom';
import Error from '@components/Error';
import Onboarding from '@pages/Onboarding';
import Search from '@pages/Search';
import App from './App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Onboarding /> },
      {
        path: '/search',
        element: <Search />,
      },
    ],
  },
]);
