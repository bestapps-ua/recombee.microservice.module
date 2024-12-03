import EntityModel from "./EntityModel";
import IEntityModelOptions from "../../interface/IEntityModelOptions";
import { IRecommendItemsToUser } from "../../interface/IRecommend";
declare class RecommendModel extends EntityModel {
    constructor(props?: IEntityModelOptions);
    itemsToUser(params: IRecommendItemsToUser): Promise<any>;
    nextItems(recommId: string, count: number): Promise<any>;
}
export default RecommendModel;
//# sourceMappingURL=RecommendModel.d.ts.map