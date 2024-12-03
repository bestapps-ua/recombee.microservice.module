import EntityModel from "./EntityModel";
import IEntityModelOptions from "../../interface/IEntityModelOptions";
import ApiInteraction from "../../entity/api/v1/ApiInteraction";
import APIInteractionModel from "../api/v1/APIInteractionModel";
import {IInteractionBookmark, IInteractionDetailView, IInteractionRating} from "../../interface/IInteraction";

class InteractionModel extends EntityModel {
    constructor(props: IEntityModelOptions = {model: APIInteractionModel, entity: ApiInteraction}) {
        super(props);
    }

    async addDetailView(params: IInteractionDetailView): Promise<any> {
        return await this.action('addDetailView', params, {natural: true});
    }

    async addRating(params: IInteractionRating): Promise<any> {
        return await this.action('addRating', params, {natural: true});
    }

    async addBookmark(params: IInteractionBookmark): Promise<any> {
        return await this.action('addBookmark', params, {natural: true});
    }

}

export default InteractionModel;
