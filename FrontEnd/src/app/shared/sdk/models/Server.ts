/* tslint:disable */
import {
  MultiCS
} from '../index';

declare var Object: any;
export interface ServerInterface {
  "Name"?: string;
  "Public_IP": string;
  "Private_IP": string;
  "SSH_User": string;
  "SSH_Pass"?: string;
  "SSH_Key"?: string;
  "id"?: any;
  multiCs?: MultiCS[];
}

export class Server implements ServerInterface {
  "Name": string;
  "Public_IP": string;
  "Private_IP": string;
  "SSH_User": string;
  "SSH_Pass": string;
  "SSH_Key": string;
  "id": any;
  multiCs: MultiCS[];
  constructor(data?: ServerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Server`.
   */
  public static getModelName() {
    return "Server";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Server for dynamic purposes.
  **/
  public static factory(data: ServerInterface): Server{
    return new Server(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Server',
      plural: 'Servers',
      path: 'Servers',
      idName: 'id',
      properties: {
        "Name": {
          name: 'Name',
          type: 'string'
        },
        "Public_IP": {
          name: 'Public_IP',
          type: 'string'
        },
        "Private_IP": {
          name: 'Private_IP',
          type: 'string'
        },
        "SSH_User": {
          name: 'SSH_User',
          type: 'string'
        },
        "SSH_Pass": {
          name: 'SSH_Pass',
          type: 'string'
        },
        "SSH_Key": {
          name: 'SSH_Key',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        multiCs: {
          name: 'multiCs',
          type: 'MultiCS[]',
          model: 'MultiCS',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'serverId'
        },
      }
    }
  }
}
