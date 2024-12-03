import APIModel from "./APIModel";
import ApiEntity from "../../../entity/api/v1/ApiEntity";
import IAPIEntityModelOptions from "../../../interface/IAPIEntityModelOptions";
import ApiList from "../../../entity/api/v1/ApiList";

class APIEntityModel {


    private _path: any;
    private _entity: ApiEntity;

    constructor(props: IAPIEntityModelOptions) {
        this._path = props.path;
        this._entity = props.entity;
    }

    get path(): any {
        return this._path;
    }

    set path(value: any) {
        this._path = value;
    }

    get entity(): ApiEntity {
        return this._entity;
    }

    set entity(value: ApiEntity) {
        this._entity = value;
    }

    async action(name: string, params: any = {}, options: any = {}){
        let data: any = await APIModel.call(`${this.path}.${name}`, params);
        //console.log('DATA', data);

        if(data.data['_type'] === 'list') {
            let items: any[] = [];
            for (const item of data.data.items || []){
                //@ts-ignore
                items.push(new this.entity(item));
            }
            data.data.items = items;
            return new ApiList(data.data);
        }

        if(options.natural) {
            return data.data;
        }

        if(options.entity) {
            return new options.entity(data.data);
        }

        //@ts-ignore
        return new this.entity(data.data);
    }

    async generate(){

    }
}

export default APIEntityModel;
