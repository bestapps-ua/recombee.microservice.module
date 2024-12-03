interface IUserPropertyRequest {
    name: string;
    type?: string;
}
interface IUserRequest {
    uid: string;
    values?: {
        [key: string]: any;
    }[];
}
export { IUserRequest, IUserPropertyRequest, };
//# sourceMappingURL=IUser.d.ts.map