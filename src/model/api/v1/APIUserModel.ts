import APIEntityModel from "./APIEntityModel";
import ApiUser from "../../../entity/api/v1/ApiUser";

class APIUserModel extends APIEntityModel {

}

export default new APIUserModel({
    path: 'v1.recombee.user',
    entity: ApiUser,
});
