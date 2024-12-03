import APIEntityModel from "./APIEntityModel";
import ApiSearch from "../../../entity/api/v1/ApiSearch";

class APISearchModel extends APIEntityModel {
}

export default new APISearchModel({
    path: 'v1.recombee.search',
    entity: ApiSearch,
});
