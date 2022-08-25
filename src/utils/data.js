import { AdminRouteNames } from '../approutes/route-constant';

export const mainMenus = [
    {
        menuName: 'dashboard',
        menuIcon: 'dashboard.svg',
        menuLink: AdminRouteNames.Dashboard
    }, 
    {
        menuName: 'superadmin',
        menuIcon: 'user.svg',
        menuLink: AdminRouteNames.SubscriptionList
    },
    {
        menuName: 'user_management',
        menuIcon: 'management.svg',
        menuLink: AdminRouteNames.Adminusers
    },
    {
        menuName: 'settings',
        menuIcon: 'settings.svg',
        menuLink: AdminRouteNames.Invoice
    }
]

export const subMenus = [
    {
        dashboard: {
            menuName: 'Dashboard',
            menuIcon: 'ico_dash.svg',
           
        },
        superadmin: {
            menuName: 'Superadmin',
            menuIcon: 'user.svg',
            submenus: [
                {
                    menuName: 'Subscriptions',
                    menuLink: AdminRouteNames.SubscriptionList
                },
                {
                    menuName: 'Subscription List',
                    menuLink: AdminRouteNames.Sublist
                },
                {
                    menuName: 'Settings',
                    menuLink: AdminRouteNames.Application
                }
            ]
        },
        user_management: {
            menuName: 'User Mangement',
            menuIcon: 'ico-user-mgmt.svg',
            submenus: [
                {
                    menuName: 'Admin Users',
                    menuLink: AdminRouteNames.Adminusers
                },
                {
                    menuName: 'Privilege Settings',
                    menuLink: AdminRouteNames.Privileage
                },
            ]
        },
        settings: {
            menuName: 'Settings',
            menuIcon : 'settings.svg',
            submenus : [
                {
                    menuName: 'Invoice',
                    menuLink: AdminRouteNames.Invoice
                },
                {
                    menuName: 'Tax',
                    menuLink: AdminRouteNames.Tax
                },
            ]
        }
    }
];

export const withoutHeadersRoute = ['/',AdminRouteNames.Login, AdminRouteNames.ForgotPassword];
export const withoutSidebarRoutes = ['/',AdminRouteNames.Login, AdminRouteNames.ForgotPassword]