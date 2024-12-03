import APIEntityModel from "../api/v1/APIEntityModel";
import IEntityModelOptions from "../../interface/IEntityModelOptions";
declare class EntityModel {
    private _model;
    constructor(props: IEntityModelOptions);
    get model(): APIEntityModel;
    set model(value: APIEntityModel);
    action(action: string, params?: any, options?: any): Promise<any>;
}
export default EntityModel;
//# sourceMappingURL=EntityModel.d.ts.map