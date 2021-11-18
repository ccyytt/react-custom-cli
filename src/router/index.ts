import React from 'react';
export interface RouterFace {
    title: string;
    path: string;
    component: React.LazyExoticComponent<React.ComponentType>,
    icon: string;
    routes: RouterFace[],
    redirect?: string;
}

const router: RouterFace[] = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        component: React.lazy(() => import('views/dashboard')),
        icon: '',
        redirect: '/dashboard/1',
        routes: [
            {
                title: 'Dashboard-1',
                path: '/dashboard/1',
                component: React.lazy(() => import('views/dashboard')),
                icon: '',
                routes: [],
            },
            {
                title: 'Dashboard-2',
                path: '/dashboard/2',
                component: React.lazy(() => import('views/dashboard')),
                icon: '',
                routes: [],
            }
        ],
    },
    {
        title: 'Nested',
        path: '/nested',
        component: React.lazy(() => import('views/nested')),
        icon: '',
        redirect: '/nested/3',
        routes: [
            {
                title: 'nested-3',
                path: '/nested/3',
                component: React.lazy(() => import('views/dashboard')),
                icon: '',
                routes: [],
            },
            {
                title: 'nested-4',
                path: '/nested/4',
                component: React.lazy(() => import('views/dashboard')),
                icon: '',
                routes: [],
            }
        ],
    },
]
export default router