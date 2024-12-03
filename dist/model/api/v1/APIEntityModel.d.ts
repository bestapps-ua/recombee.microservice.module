import ApiEntity from "../../../entity/api/v1/ApiEntity";
import IAPIEntityModelOptions from "../../../interface/IAPIEntityModelOptions";
declare class APIEntityModel {
    private _path;
    private _entity;
    constructor(props: IAPIEntityModelOptions);
    get path(): any;
    set path(value: any);
    get entity(): ApiEntity;
    set entity(value: ApiEntity);
    action(name: string, params?: any, options?: any): Promise<any>;
    generate(): Promise<void>;
}
export default APIEntityModel;
//# sourceMappingURL=APIEntityModel.d.ts.map