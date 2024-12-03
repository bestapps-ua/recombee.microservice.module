import APIEntityModel from "./APIEntityModel";
import ApiSegmentation from "../../../entity/api/v1/ApiSegmentation";

class APISegmentationModel extends APIEntityModel {
}

export default new APISegmentationModel({
    path: 'v1.recombee.segmentation',
    entity: ApiSegmentation,
});
