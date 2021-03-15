import { NavbarItem } from "../components/environment/navbar/types";

export const mainMenu: NavbarItem[] = [
    { path: '/', title: '[Shared] Home' },
    { path: '/login', title: '[Shared] Login' },
    { path: '/resetPassword', title: '[Shared] Reset password' },
    { path: '/admin/clients/search', title: '[Admin] Clients - Search' },
    { path: '/admin/clients/client', title: '[Admin] Clients - Crud' },
]
