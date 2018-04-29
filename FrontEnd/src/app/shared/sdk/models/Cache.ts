/* tslint:disable */
import {
  Peer
} from '../index';

declare var Object: any;
export interface CacheInterface {
  "Name": string;
  "Port": number;
  "id"?: any;
  "multiCsId"?: any;
  peers?: Peer[];
}

export class Cache implements CacheInterface {
  "Name": string;
  "Port": number;
  "id": any;
  "multiCsId": any;
  peers: Peer[];
  constructor(data?: CacheInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Cache`.
   */
  public static getModelName() {
    return "Cache";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Cache for dynamic purposes.
  **/
  public static factory(data: CacheInterface): Cache{
    return new Cache(data);
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
      name: 'Cache',
      plural: 'Caches',
      path: 'Caches',
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
