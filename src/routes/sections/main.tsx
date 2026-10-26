import { lazy, Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// layouts
import MainLayout from 'src/layouts/main';
// components
import { LoadingScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

// HOME
const HomePage = lazy(() => import('src/pages/home'));
// USER
const UserProfilePage = lazy(() => import('src/pages/profile'));
const CasinoPage = lazy(() => import('src/pages/casino'));
const LiveCasinoPage = lazy(() => import('src/pages/live-casino'));
const VipCasinoPage = lazy(() => import('src/pages/vip-casino'));
const ChickenPage = lazy(() => import('src/pages/chicken-page'));
const AviatorPage = lazy(() => import('src/pages/aviator-page'));
const RacingPage = lazy(() => import('src/pages/racing-page'));
const Tournaments = lazy(() => import('src/pages/tournaments'));
// const TurboGame = lazy(() => import('src/pages/turbo-page'));
const ContactUsPage = lazy(() => import('src/pages/contact-us'));
const ItalianLottery = lazy(() => import('src/pages/italian-lottery'));

// game play component
const GamePlayLiveCasino = lazy(() => import('src/pages/game-play-live-casino'));
const GamePlay = lazy(() => import('src/pages/game-play'));
const RacingPlay = lazy(() => import('src/pages/racing-play'));
const ChickenPlay = lazy(() => import('src/pages/chicken-play'));
const AviatorPlay = lazy(() => import('src/pages/aviator-play'));
const VipCasinoPlay = lazy(() => import('src/pages/vip-casino-play'));
// ----------------------------------------------------------------------

export const mainRoutes = [
    {
        element: (
            <MainLayout>
                <Suspense fallback={<LoadingScreen />}>
                    <Outlet />
                </Suspense>
            </MainLayout>
        ),
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'download',
                element: <HomePage />
            },
            {
                path: 'casino',
                children: [
                    {
                        index: true,
                        element: <CasinoPage />
                    },
                    {
                        path: ':id',
                        children: [
                            {
                                index: true,
                                element: <CasinoPage />
                            },
                            {
                                path: ':id',
                                element: <GamePlay />
                            }
                        ]
                    }
                ]
            },
            {
                path: 'live-casino',
                children: [
                    {
                        index: true,
                        element: <LiveCasinoPage />
                    },
                    {
                        path: ':id',
                        children: [
                            {
                                index: true,
                                element: <LiveCasinoPage />
                            },
                            {
                                path: ':id',
                                element: <GamePlayLiveCasino />
                            }
                        ]
                    }
                ]
            },
            {
                path: 'vip-casino',
                children: [
                    {
                        index: true,
                        element: <VipCasinoPage />
                    },
                    {
                        path: ':id',
                        children: [
                            {
                                index: true,
                                element: <VipCasinoPage />
                            },
                            {
                                path: ':id',
                                element: <VipCasinoPlay />
                            }
                        ]
                    }
                ]
            },
            {
                path: 'chicken',
                children: [
                    {
                        index: true,
                        element: <ChickenPage />
                    },
                    {
                        path: ':id',
                        children: [
                            {
                                index: true,
                                element: <ChickenPage />
                            },
                            {
                                path: ':id',
                                element: <ChickenPlay />
                            }
                        ]
                    }
                ]
            },
            {
                path: 'aviator',
                children: [
                    {
                        index: true,
                        element: <AviatorPage />
                    },
                    {
                        path: ':id',
                        children: [
                            {
                                index: true,
                                element: <AviatorPage />
                            },
                            {
                                path: ':id',
                                element: <AviatorPlay />
                            }
                        ]
                    }
                ]
            },
            {
                path: 'racing',
                children: [
                    {
                        index: true,
                        element: <RacingPage />
                    },
                    {
                        path: ':id',
                        children: [
                            {
                                index: true,
                                element: <RacingPage />
                            },
                            {
                                path: ':id',
                                element: <RacingPlay />
                            }
                        ]
                    }
                ]
            },
            {
                path: 'tournaments',
                children: [
                    {
                        index: true,
                        element: <Tournaments />
                    }
                ]
            },
            {
                path: 'contact-us',
                children: [
                    {
                        index: true,
                        element: <Navigate to="contacts" />
                    },
                    {
                        path: ':id',
                        element: <ContactUsPage />
                    }
                ]
            },
            {
                path: 'user',
                children: [
                    { element: <Navigate to="deposit" />, index: true },
                    { path: ':id', element: <UserProfilePage /> }
                ]
            },
            // {
            //     path: 'sports',
            //     element: <Sports />
            // },
            {
                path: 'italianlottery',
                element: <ItalianLottery />
            }
        ]
    }
];
