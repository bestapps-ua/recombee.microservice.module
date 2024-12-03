import EntityModel from "./EntityModel";
import IEntityModelOptions from "../../interface/IEntityModelOptions";
import {ISearchOptions} from "../../interface/ISearch";
import ApiSearch from "../../entity/api/v1/ApiSearch";
import APISearchModel from "../api/v1/APISearchModel";

class SearchModel extends EntityModel {
    constructor(props: IEntityModelOptions = {model: APISearchModel, entity: ApiSearch}) {
        super(props);
    }

    async searchItems(params: ISearchOptions): Promise<any> {
        return await this.action('searchItems', params, {natural: true});
    }

    async searchItemSegments(params: ISearchOptions): Promise<any> {
        return await this.action('searchItemSegments', params, {natural: true});
    }
}

export default SearchModel;
