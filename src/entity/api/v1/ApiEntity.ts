import * as console from "console";
import {name} from "ts-jest/dist/transformers/hoist-jest";

class ApiEntity {


    private __type: string;
    private _created: number;
    private _data: Object;
    private _props: Object;
    private _system: Object;

    constructor(props) {
        try {
            this._created = props.created;
            this.__type = props._type;
            this._data = props.data || {};
            this._system = props._system;
            this._props  = props;
        } catch (err) {
            console.log('[err init entity]', {err, name: this.getClassName()});
            throw err;
        }
    }

    getClassName() {
        let name = this.constructor.name;
        name = name.charAt(0).toLowerCase() + name.slice(1);
        return name;
    }


    get data(): Object {
        return this._data;
    }

    set data(value: Object) {
        this._data = value;
    }

    get created(): number {
        return this._created;
    }

    set created(value: number) {
        this._created = value;
    }

    get internalType(): string {
        return this.__type;
    }

    get system(): Object {
        return this._system;
    }

    set system(value: Object) {
        this._system = value;
    }

    get props(): Object {
        return this._props;
    }

    set props(value: Object) {
        this._props = value;
    }
}

export default ApiEntity;
