export function getToken(TokenKey = 'token') {
    return sessionStorage.getItem(TokenKey);
}

export function setToken(TokenKey = 'token', token: string) {
    return sessionStorage.setItem(TokenKey, token);
}

export function removeToken(TokenKey = 'token') {
    return sessionStorage.removeItem(TokenKey);
}