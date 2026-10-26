import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// layouts
import SportsLayouts from 'src/layouts/sports';
// components
import { LoadingScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

const Sports = lazy(() => import('src/pages/sports'));
const ESports = lazy(() => import('src/pages/esports'));
const VirtualPage = lazy(() => import('src/pages/virtual-game'));
// ----------------------------------------------------------------------

export const sportsRoutes = [
    {
        path: 'sports',
        element: (
            <SportsLayouts>
                <Suspense fallback={<LoadingScreen />}>
                    <Outlet />
                </Suspense>
            </SportsLayouts>
        ),
        children: [
            {
                index: true,
                element: <Sports />
            },

            {
                path: 'virtual',
                element: <VirtualPage />
            },
            {
                path: 'esports',
                element: <ESports />
            },
            {
                path: 'live-sports',
                element: <Sports />
            }
        ]
    }
];
