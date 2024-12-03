import {ISearchRecommendOptions} from "./IRecommend";

interface ISearchOptions {
    userId: string;
    searchQuery: string;
    count: number;
    options: ISearchRecommendOptions;
}

export {
    ISearchOptions,
};
