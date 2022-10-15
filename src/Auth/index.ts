import { toast } from 'react-toastify';

import {UserProps} from '@Interfaces/index';

export const saveUser = (data : UserProps) => {
    if (!data) return;
    sessionStorage.setItem('user', JSON.stringify(data));
};

export const isAuthenticated = () => {
    return true;
    const user = JSON.parse(sessionStorage.getItem('user') || '');
    return user?.token ? user.token : null;
};

export const RedirectToLogin = () => {
    const url = window.location.href.substring(window.location.href.indexOf('/app'));
    window.location.href = url.substring(0, 4) + '/login';
};

export const logout = () => {
    const user = JSON.parse(sessionStorage.getItem('user') || '');
    if (!user) {
        return toast.error('You are not logged in')
    }
    sessionStorage.removeItem('user');
    window.location.href = '/app';
    return toast.success('successfully logged out')
}