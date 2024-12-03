import APIEntityModel from "./APIEntityModel";
import ApiEntity from "../../../entity/api/v1/ApiEntity";

class APIDBModel extends APIEntityModel {

}

export default new APIDBModel({
    path: 'v1.recombee.db',
    entity: ApiEntity,
});
