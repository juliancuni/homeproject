/* tslint:disable */
import {
  Client,
  Peer
} from '../index';

declare var Object: any;
export interface MgCamdInterface {
  "Name": string;
  "Port": number;
  "id"?: any;
  "multiCsId"?: any;
  clients?: Client[];
  peers?: Peer[];
}

export class MgCamd implements MgCamdInterface {
  "Name": string;
  "Port": number;
  "id": any;
  "multiCsId": any;
  clients: Client[];
  peers: Peer[];
  constructor(data?: MgCamdInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MgCamd`.
   */
  public static getModelName() {
    return "MgCamd";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MgCamd for dynamic purposes.
  **/
  public static factory(data: MgCamdInterface): MgCamd{
    return new MgCamd(data);
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
      name: 'MgCamd',
      plural: 'MgCamds',
      path: 'MgCamds',
      idName: 'id',
      properties: {
        "Name": {
          name: 'Name',
          type: 'string'
        },
        "Port": {
          name: 'Port',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "multiCsId": {
          name: 'multiCsId',
          type: 'any'
        },
      },
      relations: {
        clients: {
          name: 'clients',
          type: 'Client[]',
          model: 'Client',
          relationType: 'hasMany',
          modelThrough: 'MapMgcamdClient',
          keyThrough: 'clientId',
          keyFrom: 'id',
          keyTo: 'mgcamdId'
        },
        peers: {
          name: 'peers',
          type: 'Peer[]',
          model: 'Peer',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'camId'
        },
      }
    }
  }
}
