import APIEntityModel from "./APIEntityModel";
import ApiInteraction from "../../../entity/api/v1/ApiInteraction";

class APIInteractionModel extends APIEntityModel {
}

export default new APIInteractionModel({
    path: 'v1.recombee.interaction',
    entity: ApiInteraction,
});
