import EntityModel from "./EntityModel";
import IEntityModelOptions from "../../interface/IEntityModelOptions";
import { IUserPropertyRequest, IUserRequest } from "../../interface/IUser";
declare class UserModel extends EntityModel {
    constructor(props?: IEntityModelOptions);
    create(params: IUserRequest): Promise<any>;
    update(params: IUserRequest): Promise<any>;
    delete(params: IUserRequest): Promise<any>;
    migrate(fromUid: string, toUid: string): Promise<any>;
    getProperties(): Promise<any>;
    createProperty(params: IUserPropertyRequest): Promise<any>;
    deleteProperty(params: IUserPropertyRequest): Promise<any>;
    getProperty(params: IUserPropertyRequest): Promise<any>;
}
export default UserModel;
//# sourceMappingURL=UserModel.d.ts.map