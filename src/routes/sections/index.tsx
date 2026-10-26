import { Navigate, useRoutes } from 'react-router-dom';
//
import { mainRoutes } from './main';
import { extraRoutes } from './extra';

import { authRoutes } from './auth';
import { sportsRoutes } from './sports';
import { openGames } from './opengame';

// ----------------------------------------------------------------------

export default function Router() {
    return useRoutes([
        // Main routes
        ...mainRoutes,

        // Auth routes
        ...authRoutes,

        // Extra routes
        ...extraRoutes,

        // Sports routes
        ...sportsRoutes,

        // Open Game routes
        ...openGames,

        // No match 404
        { path: '*', element: <Navigate to="/404" replace /> }
    ]);
}
