export const environment = {
    apiBaseUrl: 'http://192.168.0.10:5050',

    setUserSession(userName: string) {
        localStorage.setItem('usuario', userName);
    },

    getUserSession(): string {
        let userName = localStorage.getItem("usuario");
        if (userName == null) return "null";
        else return userName;
    },

    deleteUserSession(): void {
        localStorage.removeItem("usuario");
    },

    setRoleUserSession(role: string) {
        localStorage.setItem("rol", role)
    },

    getRoleUserSession(): string {
        let rol = localStorage.getItem("rol");
        if (rol === null) return "null";
        else return rol;
    },


    setTokenUserSession(token: string): void {
        localStorage.setItem("token", token);
    },

    getTokenUserSession(): string {
        return localStorage.getItem("token") || "";
    },
}