import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// auth
import { GuestGuard } from 'src/auth/guard';
// layouts
import AuthClassicLayout from 'src/layouts/auth/classic';
// components
import { SplashScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

// JWT
const JwtLoginPage = lazy(() => import('src/pages/auth/jwt/login'));
const JwtRegisterPage = lazy(() => import('src/pages/auth/jwt/register'));

// ----------------------------------------------------------------------

export const authRoutes = [
    {
        path: 'auth',
        element: (
            <GuestGuard>
                <Suspense fallback={<SplashScreen />}>
                    <Outlet />
                </Suspense>
            </GuestGuard>
        ),
        children: [
            {
                path: 'login',
                element: (
                    <AuthClassicLayout>
                        <JwtLoginPage />
                    </AuthClassicLayout>
                )
            },
            {
                path: 'register',
                element: (
                    <AuthClassicLayout title="You can enjoy with Our PlatForm">
                        <JwtRegisterPage />
                    </AuthClassicLayout>
                )
            }
        ]
    }
];
