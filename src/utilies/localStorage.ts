export function getToken(): string | false {
    return localStorage.getItem("token") || false;
}

export function setToken(token: string): string | false {
    localStorage.setItem("token", token);
    return getToken();
}

export function deleteToken(): string | false {
    localStorage.removeItem("token");
    return getToken();
}

