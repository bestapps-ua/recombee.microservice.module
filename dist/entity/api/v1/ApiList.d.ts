import ApiEntity from "./ApiEntity";
import ApiListPager from "./ApiListPager";
export default class ApiList extends ApiEntity {
    private _items;
    private _pager;
    constructor(props: any);
    get items(): ApiEntity[];
    set items(value: ApiEntity[]);
    get pager(): ApiListPager;
    set pager(value: ApiListPager);
}
//# sourceMappingURL=ApiList.d.ts.map