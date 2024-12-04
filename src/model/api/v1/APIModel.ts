import Moleculer, {ServiceBroker} from "moleculer";

let uuid4 = require('uuid/v4');

class APIModel {

    private _broker: Moleculer.ServiceBroker;

    constructor() {
    }

    async call(action: string, params: any = {}) {
        let t = Date.now();
        try {
            params.requestId = uuid4();
            let res: any = await this.broker.call(action, params);
            if(!res['ok']) {
                throw res;
            }
            if(res && res.data && typeof res.data === 'object') {
                res.data._system = {
                    ttl: Math.round(Date.now() - t) / 1000,
                };
            }
            return res;
        } catch (err) {
            console.log('[err call]', {err, action, params});
            throw err;
        }
    }

    get broker(): Moleculer.ServiceBroker {
        return this._broker;
    }

    set broker(value: Moleculer.ServiceBroker) {
        this._broker = value;
    }
}

export default new APIModel();
