/* tslint:disable */

declare var Object: any;
export interface PeerInterface {
  "string_line"?: string;
  "id"?: any;
  "clientId"?: any;
  "camId"?: any;
}

export class Peer implements PeerInterface {
  "string_line": string;
  "id": any;
  "clientId": any;
  "camId": any;
  constructor(data?: PeerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Peer`.
   */
  public static getModelName() {
    return "Peer";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Peer for dynamic purposes.
  **/
  public static factory(data: PeerInterface): Peer{
    return new Peer(data);
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
      name: 'Peer',
      plural: 'Peers',
      path: 'Peers',
      idName: 'id',
      properties: {
        "string_line": {
          name: 'string_line',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "clientId": {
          name: 'clientId',
          type: 'any'
        },
        "camId": {
          name: 'camId',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
