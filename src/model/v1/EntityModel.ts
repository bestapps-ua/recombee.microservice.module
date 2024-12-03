import APIEntityModel from "../api/v1/APIEntityModel";
import IEntityModelOptions from "../../interface/IEntityModelOptions";
import ApiEntity from "../../entity/api/v1/ApiEntity";
import ApiList from "../../entity/api/v1/ApiList";

class EntityModel {
    private _model: APIEntityModel;

    constructor(props: IEntityModelOptions) {
        this._model = props.model;
    }

    get model(): APIEntityModel {
        return this._model;
    }

    set model(value: APIEntityModel) {
        this._model = value;
    }

    async action(action: string, params: any = {}, options: any = {}) {
        return await this.model.action(action, params, options);
    }
}

export default EntityModel;
