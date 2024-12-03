import ApiEntity from "../entity/api/v1/ApiEntity";
import APIEntityModel from "../model/api/v1/APIEntityModel";

export default interface IEntityModelOptions {
    entity: ApiEntity|any;
    model: APIEntityModel|any;
}
