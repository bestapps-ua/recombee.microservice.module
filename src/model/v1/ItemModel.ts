import EntityModel from "./EntityModel";
import IEntityModelOptions from "../../interface/IEntityModelOptions";
import ApiItem from "../../entity/api/v1/ApiItem";
import APIItemModel from "../api/v1/APIItemModel";
import {IItemPropertyRequest, IItemRequest} from "../../interface/IItem";


class ItemModel extends EntityModel {
    constructor(props: IEntityModelOptions = {model: APIItemModel, entity: ApiItem}) {
        super(props);
    }

    async create(params: IItemRequest): Promise<any> {
        return await this.action('addItem', params, {natural: true});
    }

    async update(params: IItemRequest): Promise<any> {
        return await this.action('setItem', params, {natural: true});
    }

    async delete(params: IItemRequest): Promise<any> {
        return await this.action('deleteItem', params, {natural: true});
    }

    async getProperties() {
        return await this.action('getItemProperties', {}, {natural: true});
    }

    async createProperty(params: IItemPropertyRequest): Promise<any> {
        return await this.action('addItemProperty', params, {natural: true});
    }

    async deleteProperty(params: IItemPropertyRequest): Promise<any> {
        return await this.action('deleteItemProperty', params, {natural: true});
    }

    async getProperty(params: IItemPropertyRequest): Promise<any> {
        return await this.action('getItemProperty', params, {natural: true});
    }

}

export default ItemModel;
