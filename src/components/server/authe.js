export const isAuthenticated = () => {
    return localStorage.getItem('token') == 'authenticated' ? true : false;

}