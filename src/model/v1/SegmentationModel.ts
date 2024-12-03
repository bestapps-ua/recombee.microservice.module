import EntityModel from "./EntityModel";
import IEntityModelOptions from "../../interface/IEntityModelOptions";
import {
    ISegmentationCreateRequest,
    ISegmentationRecommendSegmentsToUserRequest,
    ISegmentationUpdateRequest
} from "../../interface/ISegmentation";
import ApiSegmentation from "../../entity/api/v1/ApiSegmentation";
import APISegmentationModel from "../api/v1/APISegmentationModel";


class SegmentationModel extends EntityModel {
    constructor(props: IEntityModelOptions = {model: APISegmentationModel, entity: ApiSegmentation}) {
        super(props);
    }

    async createPropertyBased(params: ISegmentationCreateRequest): Promise<any> {
        return await this.action('createPropertyBasedSegmentation', params, {natural: true});
    }

    async updatePropertyBased(params: ISegmentationUpdateRequest): Promise<any> {
        return await this.action('updatePropertyBasedSegmentation', params, {natural: true});
    }

    async recommendItemSegmentsToUser(params: ISegmentationRecommendSegmentsToUserRequest): Promise<any> {
        return await this.action('recommendItemSegmentsToUser', params, {natural: true});
    }
}

export default SegmentationModel;
