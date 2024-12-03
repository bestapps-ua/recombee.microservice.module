import EntityModel from "./EntityModel";
import IEntityModelOptions from "../../interface/IEntityModelOptions";
import APIDBModel from "../api/v1/APIDBModel";
import ApiEntity from "../../entity/api/v1/ApiEntity";

class DBModel extends EntityModel {
    constructor(props: IEntityModelOptions = {model: APIDBModel, entity: ApiEntity}) {
        super(props);
    }

    async clear(): Promise<any> {
        return await this.action('clear', {}, {natural: true});
    }
}

export default DBModel;
