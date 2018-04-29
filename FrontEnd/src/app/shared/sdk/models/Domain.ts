/* tslint:disable */
import {
  MultiCS
} from '../index';

declare var Object: any;
export interface DomainInterface {
  "Domain_Name"?: string;
  "Registrar"?: string;
  "User"?: string;
  "Pass"?: string;
  "Default"?: boolean;
  "id"?: any;
  "multiCSId"?: any;
  "multiCsId"?: any;
  multiCS?: MultiCS;
}

export class Domain implements DomainInterface {
  "Domain_Name": string;
  "Registrar": string;
  "User": string;
  "Pass": string;
  "Default": boolean;
  "id": any;
  "multiCSId": any;
  "multiCsId": any;
  multiCS: MultiCS;
  constructor(data?: DomainInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Domain`.
   */
  public static getModelName() {
    return "Domain";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Domain for dynamic purposes.
  **/
  public static factory(data: DomainInterface): Domain{
    return new Domain(data);
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
      name: 'Domain',
      plural: 'Domains',
      path: 'Domains',
      idName: 'id',
      properties: {
        "Domain_Name": {
          name: 'Domain_Name',
          type: 'string'
        },
        "Registrar": {
          name: 'Registrar',
          type: 'string'
        },
        "User": {
          name: 'User',
          type: 'string'
        },
        "Pass": {
          name: 'Pass',
          type: 'string'
        },
        "Default": {
          name: 'Default',
          type: 'boolean',
          default: false
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "multiCSId": {
          name: 'multiCSId',
          type: 'any'
        },
        "multiCsId": {
          name: 'multiCsId',
          type: 'any'
        },
      },
      relations: {
        multiCS: {
          name: 'multiCS',
          type: 'MultiCS',
          model: 'MultiCS',
          relationType: 'belongsTo',
                  keyFrom: 'multiCSId',
          keyTo: 'id'
        },
      }
    }
  }
}
