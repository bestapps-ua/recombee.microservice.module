import _IEntityModelOptions from "./interface/IEntityModelOptions";
import _IAPIEntityModelOptions from "./interface/IAPIEntityModelOptions";
import _IEntityGet from "./interface/IEntityGet";

import {
    IItemRequest as _IItemRequest,
    IItemPropertyRequest as _IItemPropertyRequest,
} from "./interface/IItem";

import {
    IInteractionOptions as _IInteractionOptions,
    IInteractionViewOptions as _IInteractionViewOptions,
    IInteractionDetailView as _IInteractionDetailView,
    IInteractionRating as _IInteractionRating,
    IInteractionBookmark as _IInteractionBookmark,
} from "./interface/IInteraction";

import {
    IRecommendOptions as _IRecommendOptions,
    ISearchRecommendOptions as _ISearchRecommendOptions,
    IRecommendItemOptions as _IRecommendItemOptions,
    IRecommendItemsToUser as _IRecommendItemsToUser,
} from "./interface/IRecommend";

import {
    ISearchOptions as _ISearchOptions,
} from "./interface/ISearch";

import {
    ISegmentationCreateRequest as _ISegmentationCreateRequest,
    ISegmentationUpdateRequest as _ISegmentationUpdateRequest,
    ISegmentationRecommendSegmentsToUserRequest as _ISegmentationRecommendSegmentsToUserRequest,
} from "./interface/ISegmentation";

import {
    IUserRequest as _IUserRequest,
    IUserPropertyRequest as _IUserPropertyRequest,
} from "./interface/IUser";


namespace BestAppsRecombeeModule {
    export namespace interfaces {
        export interface IEntityModelOptions extends _IEntityModelOptions {}
        export interface IAPIEntityModelOptions extends _IAPIEntityModelOptions {}
        export interface IEntityGet extends _IEntityGet {}

        export interface IItemRequest extends _IItemRequest {}
        export interface IItemPropertyRequest extends _IItemPropertyRequest {}

        export interface IInteractionOptions extends _IInteractionOptions {}
        export interface IInteractionViewOptions extends _IInteractionViewOptions {}
        export interface IInteractionDetailView extends _IInteractionDetailView {}
        export interface IInteractionRating extends _IInteractionRating {}
        export interface IInteractionBookmark extends _IInteractionBookmark {}

        export interface IRecommendOptions extends _IRecommendOptions {}
        export interface ISearchRecommendOptions extends _ISearchRecommendOptions {}
        export interface IRecommendItemOptions extends _IRecommendItemOptions {}
        export interface IRecommendItemsToUser extends _IRecommendItemsToUser {}

        export interface ISearchOptions extends _ISearchOptions {}

        export interface ISegmentationCreateRequest extends _ISegmentationCreateRequest {}
        export interface ISegmentationUpdateRequest extends _ISegmentationUpdateRequest {}
        export interface ISegmentationRecommendSegmentsToUserRequest extends _ISegmentationRecommendSegmentsToUserRequest {}

        export interface IUserRequest extends _IUserRequest {}
        export interface IUserPropertyRequest extends _IUserPropertyRequest {}
    }
}

export = BestAppsRecombeeModule;
