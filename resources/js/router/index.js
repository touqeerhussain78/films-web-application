import MovieDetails from '../views/MovieDetails'
import Movies from '../views/Movies'
import Login from '../views/Login'
import Register from '../views/Register'
import Logout from '../views/Logout'
import NewMovie from '../views/NewMovie'

const routes = [
    {
        path: '/movies/:id/:slug',
        name: 'movieDetails',
        component: MovieDetails,
    },
    {
        path: '/',
        name: 'movies',
        component: Movies,
    },
    {
        path: '/movies/:page',
        name: 'moviesPaged',
        component: Movies,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { 
            guard: 'guest',
        },
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: { 
            guard: 'guest',
        },
    },
    {
        path: '/logout',
        name: 'logout',
        component: Logout,
        meta: { 
            guard: 'auth:api',
        },
    },
    {
        path: '/movie/new',
        name: 'new-movie',
        component: NewMovie,
        meta: { 
            guard: 'auth:api',
        }
    }
]

export default routes