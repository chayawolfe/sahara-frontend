import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// layouts
import OpenGameLayouts from 'src/layouts/opengame';
// components
import { LoadingScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

const VirtualPage = lazy(() => import('src/pages/virtual-game'));
const AviatorPage = lazy(() => import('src/pages/aviator-page'));
const ChickenPage = lazy(() => import('src/pages/chicken-page'));

const OpenGameCompoment = lazy(() => import('src/pages/open-game-compoment'));

// ----------------------------------------------------------------------

export const openGames = [
    {
        path: 'open',
        element: (
            <OpenGameLayouts>
                <Suspense fallback={<LoadingScreen />}>
                    <Outlet />
                </Suspense>
            </OpenGameLayouts>
        ),
        children: [
            {
                path: 'aviator',
                element: <AviatorPage />
            },
            {
                path: 'chicken',
                element: <ChickenPage />
            },
            {
                path: 'virtual',
                element: <VirtualPage />
            },
            {
                path: ':id',
                children: [
                    {
                        index: true,
                        element: <OpenGameCompoment />
                    },
                    {
                        path: ':id',
                        element: <OpenGameCompoment />
                    }
                ]
            }
        ]
    }
];
