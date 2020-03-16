import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

    {
        path: '/products', title: 'محصولات', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '', title: 'حسابداری', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
        submenu: [
            {
                path: '', title: 'صورتحساب ها', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                    { path: '/incoming-invoices', title: 'وارده', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/issued-invoices', title: 'صادره', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                ]
            },
            { path: '/billing', title: 'مالی', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] }
        ]
    }
];
