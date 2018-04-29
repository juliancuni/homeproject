/* tslint:disable */
import {
  Server,
  Domain,
  Client,
  Cache,
  CCcam,
  MgCamd,
  ProfileDefault,
  Profile
} from '../index';

declare var Object: any;
export interface MultiCSInterface {
  "Name": string;
  "Bin_File": string;
  "Bin_Path": string;
  "HTTP_Port": string;
  "HTTP_User"?: string;
  "HTTP_Pass"?: string;
  "id"?: any;
  "serverId"?: any;
  server?: Server;
  domains?: Domain[];
  clients?: Client[];
  cache?: Cache[];
  cCcams?: CCcam[];
  mgcamds?: MgCamd[];
  profileDefault?: ProfileDefault[];
  profiles?: Profile[];
}

export class MultiCS implements MultiCSInterface {
  "Name": string;
  "Bin_File": string;
  "Bin_Path": string;
  "HTTP_Port": string;
  "HTTP_User": string;
  "HTTP_Pass": string;
  "id": any;
  "serverId": any;
  server: Server;
  domains: Domain[];
  clients: Client[];
  cache: Cache[];
  cCcams: CCcam[];
  mgcamds: MgCamd[];
  profileDefault: ProfileDefault[];
  profiles: Profile[];
  constructor(data?: MultiCSInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MultiCS`.
   */
  public static getModelName() {
    return "MultiCS";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MultiCS for dynamic purposes.
  **/
  public static factory(data: MultiCSInterface): MultiCS{
    return new MultiCS(data);
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
      name: 'MultiCS',
      plural: 'MultiCs',
      path: 'MultiCs',
      idName: 'id',
      properties: {
        "Name": {
          name: 'Name',
          type: 'string'
        },
        "Bin_File": {
          name: 'Bin_File',
          type: 'string'
        },
        "Bin_Path": {
          name: 'Bin_Path',
          type: 'string',
          default: './files/mcs_bin/'
        },
        "HTTP_Port": {
          name: 'HTTP_Port',
          type: 'string'
        },
        "HTTP_User": {
          name: 'HTTP_User',
          type: 'string'
        },
        "HTTP_Pass": {
          name: 'HTTP_Pass',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "serverId": {
          name: 'serverId',
          type: 'any'
        },
      },
      relations: {
        server: {
          name: 'server',
          type: 'Server',
          model: 'Server',
          relationType: 'belongsTo',
                  keyFrom: 'serverId',
          keyTo: 'id'
        },
        domains: {
          name: 'domains',
          type: 'Domain[]',
          model: 'Domain',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'multiCsId'
        },
        clients: {
          name: 'clients',
          type: 'Client[]',
          model: 'Client',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'multiCsId'
        },
        cache: {
          name: 'cache',
          type: 'Cache[]',
          model: 'Cache',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'multiCsId'
        },
        cCcams: {
          name: 'cCcams',
          type: 'CCcam[]',
          model: 'CCcam',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'multiCsId'
        },
        mgcamds: {
          name: 'mgcamds',
          type: 'MgCamd[]',
          model: 'MgCamd',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'multiCsId'
        },
        profileDefault: {
          name: 'profileDefault',
          type: 'ProfileDefault[]',
          model: 'ProfileDefault',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'multiCsId'
        },
        profiles: {
          name: 'profiles',
          type: 'Profile[]',
          model: 'Profile',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'multiCsId'
        },
      }
    }
  }
}
