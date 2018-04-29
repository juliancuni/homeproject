/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Server } from '../../models/Server';
import { MultiCS } from '../../models/MultiCS';
import { Domain } from '../../models/Domain';
import { Container } from '../../models/Container';
import { Client } from '../../models/Client';
import { Cache } from '../../models/Cache';
import { CCcam } from '../../models/CCcam';
import { MgCamd } from '../../models/MgCamd';
import { ProfileDefault } from '../../models/ProfileDefault';
import { Profile } from '../../models/Profile';
import { Peer } from '../../models/Peer';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Server: Server,
    MultiCS: MultiCS,
    Domain: Domain,
    Container: Container,
    Client: Client,
    Cache: Cache,
    CCcam: CCcam,
    MgCamd: MgCamd,
    ProfileDefault: ProfileDefault,
    Profile: Profile,
    Peer: Peer,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
