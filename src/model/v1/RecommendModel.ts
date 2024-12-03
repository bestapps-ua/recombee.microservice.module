import EntityModel from "./EntityModel";
import IEntityModelOptions from "../../interface/IEntityModelOptions";
import APIRecommendModel from "../api/v1/APIRecommendModel";
import ApiRecommend from "../../entity/api/v1/ApiRecommend";
import {IRecommendItemsToUser} from "../../interface/IRecommend";


class RecommendModel extends EntityModel {
    constructor(props: IEntityModelOptions = {model: APIRecommendModel, entity: ApiRecommend}) {
        super(props);
    }

    async itemsToUser(params: IRecommendItemsToUser): Promise<any> {
        return await this.action('itemsToUser', params, {natural: true});
    }

    async nextItems(recommId: string, count: number): Promise<any> {
        return await this.action('nextItems', {
            recommId,
            count,
        }, {natural: true});
    }
}

export default RecommendModel;
