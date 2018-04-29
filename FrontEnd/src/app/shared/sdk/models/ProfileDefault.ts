/* tslint:disable */

declare var Object: any;
export interface ProfileDefaultInterface {
  "id"?: any;
  "multiCsId"?: any;
}

export class ProfileDefault implements ProfileDefaultInterface {
  "id": any;
  "multiCsId": any;
  constructor(data?: ProfileDefaultInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProfileDefault`.
   */
  public static getModelName() {
    return "ProfileDefault";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProfileDefault for dynamic purposes.
  **/
  public static factory(data: ProfileDefaultInterface): ProfileDefault{
    return new ProfileDefault(data);
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
      name: 'ProfileDefault',
      plural: 'ProfileDefaults',
      path: 'ProfileDefaults',
      idName: 'id',
      properties: {
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
      }
    }
  }
}
