declare const _default: () => {
    jwt: {
        secret: string;
        expiresIn: string;
    };
    database: {
        host: string;
        port: number;
        username: string;
        password: string;
        database: string;
        databaseConnection: string;
    };
};
export default _default;
