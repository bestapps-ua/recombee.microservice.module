import EntityModel from "./EntityModel";
import IEntityModelOptions from "../../interface/IEntityModelOptions";
import { ISearchOptions } from "../../interface/ISearch";
declare class SearchModel extends EntityModel {
    constructor(props?: IEntityModelOptions);
    searchItems(params: ISearchOptions): Promise<any>;
    searchItemSegments(params: ISearchOptions): Promise<any>;
}
export default SearchModel;
//# sourceMappingURL=SearchModel.d.ts.map