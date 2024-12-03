import EntityModel from "./EntityModel";
import IEntityModelOptions from "../../interface/IEntityModelOptions";
import { IItemPropertyRequest, IItemRequest } from "../../interface/IItem";
declare class ItemModel extends EntityModel {
    constructor(props?: IEntityModelOptions);
    create(params: IItemRequest): Promise<any>;
    update(params: IItemRequest): Promise<any>;
    delete(params: IItemRequest): Promise<any>;
    getProperties(): Promise<any>;
    createProperty(params: IItemPropertyRequest): Promise<any>;
    deleteProperty(params: IItemPropertyRequest): Promise<any>;
    getProperty(params: IItemPropertyRequest): Promise<any>;
}
export default ItemModel;
//# sourceMappingURL=ItemModel.d.ts.map