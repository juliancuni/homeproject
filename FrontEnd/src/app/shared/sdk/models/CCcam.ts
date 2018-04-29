/* tslint:disable */
import {
  Client,
  Peer
} from '../index';

declare var Object: any;
export interface CCcamInterface {
  "Name": string;
  "Port": number;
  "id"?: any;
  "multiCsId"?: any;
  clients?: Client[];
  peers?: Peer[];
}

export class CCcam implements CCcamInterface {
  "Name": string;
  "Port": number;
  "id": any;
  "multiCsId": any;
  clients: Client[];
  peers: Peer[];
  constructor(data?: CCcamInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CCcam`.
   */
  public static getModelName() {
    return "CCcam";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CCcam for dynamic purposes.
  **/
  public static factory(data: CCcamInterface): CCcam{
    return new CCcam(data);
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
      name: 'CCcam',
      plural: 'CCcams',
      path: 'CCcams',
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
          modelThrough: 'MapCccamClient',
          keyThrough: 'clientId',
          keyFrom: 'id',
          keyTo: 'cccamId'
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
