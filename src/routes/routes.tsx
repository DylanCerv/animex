import { RouterProvider, createBrowserRouter } from 'react-router-dom'


/** PATH ROUTES **/

/** PAGES **/
import Home from '../pages/Home/Home';
import Details from '../pages/Details/Details';
import { PUBLICS } from './paths';

/** COMPONENTS **/


const router = createBrowserRouter([
    {
        path: '/',
        element:<Home />
    },
    {
        path: PUBLICS.details,
        element: <Details />
    },

    {
        path: '*',
        element: <h1 className='text-3xl'>ERROR PAGINA NO ENCONTRADA</h1>
    }
])

export const Routes = () => (
    <>
        <RouterProvider router={router} />
    </>
)


