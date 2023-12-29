import { createBrowserRouter } from 'react-router-dom';
import Error from '@components/Error';
import App from './App';
import Search from '@pages/Search';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [{ index: true, element: <Search /> }],
  },
]);
