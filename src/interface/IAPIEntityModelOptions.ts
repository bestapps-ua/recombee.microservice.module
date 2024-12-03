import ApiEntity from "../entity/api/v1/ApiEntity";

export default interface IAPIEntityModelOptions {
    path: string;
    entity: ApiEntity|any;
}
