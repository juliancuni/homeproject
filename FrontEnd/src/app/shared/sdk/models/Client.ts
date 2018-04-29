/* tslint:disable */
import {
  MultiCS,
  CCcam,
  MgCamd,
  Profile,
  Peer
} from '../index';

declare var Object: any;
export interface ClientInterface {
  "User": string;
  "Pass": string;
  "Note"?: string;
  "Enabled": boolean;
  "id"?: any;
  "serverId"?: any;
  "multiCsId"?: any;
  server?: MultiCS;
  cCcams?: CCcam[];
  mgCamds?: MgCamd[];
  profiles?: Profile[];
  peers?: Peer[];
}

export class Client implements ClientInterface {
  "User": string;
  "Pass": string;
  "Note": string;
  "Enabled": boolean;
  "id": any;
  "serverId": any;
  "multiCsId": any;
  server: MultiCS;
  cCcams: CCcam[];
  mgCamds: MgCamd[];
  profiles: Profile[];
  peers: Peer[];
  constructor(data?: ClientInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Client`.
   */
  public static getModelName() {
    return "Client";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Client for dynamic purposes.
  **/
  public static factory(data: ClientInterface): Client{
    return new Client(data);
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
      name: 'Client',
      plural: 'Clients',
      path: 'Clients',
      idName: 'id',
      properties: {
        "User": {
          name: 'User',
          type: 'string'
        },
        "Pass": {
          name: 'Pass',
          type: 'string'
        },
        "Note": {
          name: 'Note',
          type: 'string'
        },
        "Enabled": {
          name: 'Enabled',
          type: 'boolean',
          default: true
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "serverId": {
          name: 'serverId',
          type: 'any'
        },
        "multiCsId": {
          name: 'multiCsId',
          type: 'any'
        },
      },
      relations: {
        server: {
          name: 'server',
          type: 'MultiCS',
          model: 'MultiCS',
          relationType: 'belongsTo',
                  keyFrom: 'serverId',
          keyTo: 'id'
        },
        cCcams: {
          name: 'cCcams',
          type: 'CCcam[]',
          model: 'CCcam',
          relationType: 'hasMany',
          modelThrough: 'MapCccamClient',
          keyThrough: 'cCcamId',
          keyFrom: 'id',
          keyTo: 'clientId'
        },
        mgCamds: {
          name: 'mgCamds',
          type: 'MgCamd[]',
          model: 'MgCamd',
          relationType: 'hasMany',
          modelThrough: 'MapMgcamdClient',
          keyThrough: 'mgCamdId',
          keyFrom: 'id',
          keyTo: 'clientId'
        },
        profiles: {
          name: 'profiles',
          type: 'Profile[]',
          model: 'Profile',
          relationType: 'hasMany',
          modelThrough: 'MapNewcamdClient',
          keyThrough: 'profileId',
          keyFrom: 'id',
          keyTo: 'clientId'
        },
        peers: {
          name: 'peers',
          type: 'Peer[]',
          model: 'Peer',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'clientId'
        },
      }
    }
  }
}
