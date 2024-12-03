import Moleculer from "moleculer";
declare class APIModel {
    private _broker;
    constructor();
    call(action: string, params?: any): Promise<any>;
    get broker(): Moleculer.ServiceBroker;
    set broker(value: Moleculer.ServiceBroker);
}
declare const _default: APIModel;
export default _default;
//# sourceMappingURL=APIModel.d.ts.map