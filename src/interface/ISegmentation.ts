import {IRecommendOptions} from "./IRecommend";

interface ISegmentationCreateRequest {
    segmentationId: string;
    sourceType: string;
    propertyName: string;
    options: {
        title?: string;
        description?: string;
    }
}

interface ISegmentationUpdateRequest {
    segmentationId: string;
    options: {
        propertyName?: string;
        title?: string;
        description?: string;
    }
}

interface ISegmentationRecommendSegmentsToUserRequest {
    segmentationId: string;
    count: number;
    options: IRecommendOptions;
}

export {
    ISegmentationCreateRequest,
    ISegmentationUpdateRequest,
    ISegmentationRecommendSegmentsToUserRequest,
};
