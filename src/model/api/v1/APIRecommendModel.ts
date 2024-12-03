import APIEntityModel from "./APIEntityModel";
import ApiRecommend from "../../../entity/api/v1/ApiRecommend";

class APIRecommendModel extends APIEntityModel {
}

export default new APIRecommendModel({
    path: 'v1.recombee.recommend',
    entity: ApiRecommend,
});
