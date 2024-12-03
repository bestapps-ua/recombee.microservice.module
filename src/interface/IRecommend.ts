interface IRecommendOptions {
    scenario?: string;
    cascadeCreate?: boolean;
    filter?: string;
    booster?: string;
    logic?: string | Object;
}

interface ISearchRecommendOptions extends IRecommendOptions {
    returnProperties?: boolean;
    includedProperties?: string[];
}

interface IRecommendItemOptions extends ISearchRecommendOptions {
    minRelevance?: string;
    rotationRate?: number;
    rotationTime?: number;
}

interface IRecommendItemsToUser {
    userId: string;
    count: number;
    options: IRecommendItemOptions;
}

export {
    IRecommendOptions,
    ISearchRecommendOptions,
    IRecommendItemOptions,
    IRecommendItemsToUser,
};
