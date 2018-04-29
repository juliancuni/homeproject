/* tslint:disable */
import {
  Client,
  Peer
} from '../index';

declare var Object: any;
export interface ProfileInterface {
  "Name": string;
  "Port": number;
  "id"?: any;
  "multiCsId"?: any;
  clients?: Client[];
  peers?: Peer[];
}

export class Profile implements ProfileInterface {
  "Name": string;
  "Port": number;
  "id": any;
  "multiCsId": any;
  clients: Client[];
  peers: Peer[];
  constructor(data?: ProfileInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Profile`.
   */
  public static getModelName() {
    return "Profile";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Profile for dynamic purposes.
  **/
  public static factory(data: ProfileInterface): Profile{
    return new Profile(data);
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
      name: 'Profile',
      plural: 'Profiles',
      path: 'Profiles',
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
          modelThrough: 'MapNewcamdClient',
          keyThrough: 'clientId',
          keyFrom: 'id',
          keyTo: 'profileId'
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
