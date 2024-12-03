declare class ApiEntity {
    private __type;
    private _created;
    private _data;
    private _props;
    private _system;
    constructor(props: any);
    getClassName(): string;
    get data(): Object;
    set data(value: Object);
    get created(): number;
    set created(value: number);
    get internalType(): string;
    get system(): Object;
    set system(value: Object);
    get props(): Object;
    set props(value: Object);
}
export default ApiEntity;
//# sourceMappingURL=ApiEntity.d.ts.map