import EntityModel from "./EntityModel";
import IEntityModelOptions from "../../interface/IEntityModelOptions";
import { IInteractionBookmark, IInteractionDetailView, IInteractionRating } from "../../interface/IInteraction";
declare class InteractionModel extends EntityModel {
    constructor(props?: IEntityModelOptions);
    addDetailView(params: IInteractionDetailView): Promise<any>;
    addRating(params: IInteractionRating): Promise<any>;
    addBookmark(params: IInteractionBookmark): Promise<any>;
}
export default InteractionModel;
//# sourceMappingURL=InteractionModel.d.ts.map