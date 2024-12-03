import EntityModel from "./EntityModel";
import IEntityModelOptions from "../../interface/IEntityModelOptions";
declare class DBModel extends EntityModel {
    constructor(props?: IEntityModelOptions);
    clear(): Promise<any>;
}
export default DBModel;
//# sourceMappingURL=DBModel.d.ts.map