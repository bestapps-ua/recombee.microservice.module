import ApiItem from "../../../entity/api/v1/ApiItem";
import APIEntityModel from "./APIEntityModel";

class APIItemModel extends APIEntityModel {

}

export default new APIItemModel({
    path: 'v1.recombee.item',
    entity: ApiItem,
});
