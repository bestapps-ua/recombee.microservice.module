import EntityModel from "./EntityModel";
import IEntityModelOptions from "../../interface/IEntityModelOptions";
import ApiItem from "../../entity/api/v1/ApiItem";
import {IUserPropertyRequest, IUserRequest} from "../../interface/IUser";
import ApiUser from "../../entity/api/v1/ApiUser";
import APIUserModel from "../api/v1/APIUserModel";


class UserModel extends EntityModel {
    constructor(props: IEntityModelOptions = {model: APIUserModel, entity: ApiUser}) {
        super(props);
    }

    async create(params: IUserRequest): Promise<any> {
        return await this.action('addUser', params, {natural: true});
    }

    async update(params: IUserRequest): Promise<any> {
        return await this.action('setUser', params, {natural: true});
    }

    async delete(params: IUserRequest): Promise<any> {
        return await this.action('deleteUser', params, {natural: true});
    }

    async migrate(fromUid: string, toUid: string): Promise<any> {
        return await this.action('migrateUser', {fromUid, toUid}, {natural: true});
    }

    async getProperties() {
        return await this.action('getUserProperties', {}, {natural: true});
    }

    async createProperty(params: IUserPropertyRequest): Promise<any> {
        return await this.action('addUserProperty', params, {natural: true});
    }

    async deleteProperty(params: IUserPropertyRequest): Promise<any> {
        return await this.action('deleteUserProperty', params, {natural: true});
    }

    async getProperty(params: IUserPropertyRequest): Promise<any> {
        return await this.action('getUserProperty', params, {natural: true});
    }

}

export default UserModel;
