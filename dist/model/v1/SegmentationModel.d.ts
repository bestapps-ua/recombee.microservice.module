import EntityModel from "./EntityModel";
import IEntityModelOptions from "../../interface/IEntityModelOptions";
import { ISegmentationCreateRequest, ISegmentationRecommendSegmentsToUserRequest, ISegmentationUpdateRequest } from "../../interface/ISegmentation";
declare class SegmentationModel extends EntityModel {
    constructor(props?: IEntityModelOptions);
    createPropertyBased(params: ISegmentationCreateRequest): Promise<any>;
    updatePropertyBased(params: ISegmentationUpdateRequest): Promise<any>;
    recommendItemSegmentsToUser(params: ISegmentationRecommendSegmentsToUserRequest): Promise<any>;
}
export default SegmentationModel;
//# sourceMappingURL=SegmentationModel.d.ts.map