import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  ServerApi,
  MultiCSApi,
  // ClientApi, 
  ContainerApi,
  // CacheApi, 
  // CCcamApi, 
  // ProfileApi, 
  // MgCamdApi, 
  // ProfileDefaultApi, 
  // DomainApi 
} from '../../../shared/sdk/services/custom';
import { Server, MultiCS, Client, Domain } from '../../../shared/sdk/models';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';


@Component({
  selector: 'app-mcs',
  templateUrl: './mcs.component.html',
  styleUrls: ['./mcs.component.css']
})
export class McsComponent implements OnInit {

  // clientInterface = Domain.getModelDefinition().properties;

  servers: Server[];
  server: Server;
  srvrForm: FormGroup;
  serverFormShow: boolean = false;

  multiCSs: MultiCS[];
  multiCS: MultiCS;
  mcsForm: FormGroup;
  mcsFormShow: boolean = false;

  clients: Client[];
  client: Client;
  clientForm: FormGroup;
  clientFormShow: boolean = false;

  camForm: FormGroup;
  camFormShow: boolean = false;
  camFormName: String;
  camParams: any = [];

  domains: Domain[];
  domain: Domain;
  domainForm: FormGroup;
  domainFormShow: boolean = false;

  mcsBinFiles;
  mcsBinFile;

  cache;
  cccams;
  mgcamds;
  profileDefault;
  profiles;

  deleteMcsShow: boolean = false;
  deleteServerShow: boolean = false;

  //CONSTRUCTOR
  constructor(
    private _title: Title,
    private _fb: FormBuilder,
    // private _modal: NgbModal,
    public _servers: ServerApi,
    public _mcss: MultiCSApi,
    // public _client: ClientApi,
    public _files: ContainerApi,
    // public _cache: CacheApi,
    // public _cccam: CCcamApi,
    // public _profile: ProfileApi,
    // public _mgcam: MgCamdApi,
    // public _profileDefault: ProfileDefaultApi,
    // public _domain: DomainApi
  ) {
    // for(let prop in this.clientInterface) {
    //   console.log(prop);
    // }
    //Formbuilder Servers
    this.srvrForm = _fb.group({
      "Name": [null, Validators.required],
      "Public_IP": [null, Validators.required],
      "Private_IP": [null, Validators.required],
      "SSH_User": [null, Validators.required],
      "SSH_Pass": [null],
      "SSH_Key": [null]
    })
    //Formbuilder Client
    this.clientForm = _fb.group({
      "User": [null, Validators.required],
      "Pass": [null, Validators.required],
      "Note": [null, Validators.required]
    })
    //Formbuilder MCS
    this.mcsForm = _fb.group({
      "Name": [null, Validators.required],
      "Bin_File": [null, Validators.required],
      "HTTP_Port": [null, Validators.required],
      "HTTP_User": [null],
      "HTTP_Pass": [null]
    })
    //FormBuilder Cams Dynamic
    this.camForm = this._fb.group({
      "Name": [null, Validators.required],
      "Port": [null],
      params: this._fb.array([
        this.initParam(),
      ])
    });
    //FormBuilder Domains
    this.domainForm = _fb.group({
      "Domain_Name": [null, Validators.required],
      "Registrar": [null, Validators.required],
      "User": [null],
      "Pass": [null],
      "Default": [null]
    })
    //Set Title
    this._title.setTitle("mcs")
    //gjej servers + MCS
    this._servers.find({ include: "multiCs" }).subscribe((res: Server[]) => {
      this.servers = res;
      this.server = res[0];
      if (this.servers.length > 0) {
        if (this.server.multiCs.length > 0) {
          this.multiCS = this.server.multiCs[0];
          //gjej CCcams
          this._mcss.getCCcams(this.multiCS.id).subscribe((res) => {
            this.cccams = res;
          })
          //gjej Cache
          this._mcss.getCache(this.multiCS.id).subscribe((res) => {
            this.cache = res;
          })
          //gjej MgCamds
          this._mcss.getMgcamds(this.multiCS.id).subscribe((res) => {
            this.mgcamds = res;
          })
          //gjej Profile_default
          this._mcss.getProfileDefault(this.multiCS.id).subscribe((res) => {
            this.profileDefault = res;
          })
          //gjej Profiles
          this._mcss.getProfiles(this.multiCS.id).subscribe((res) => {
            this.profiles = res;
          })
          //gjej Domains
          this._mcss.getDomains(this.multiCS.id).subscribe((res) => {
            this.domains = res;
          })
        }
      }
    })
    //gjej MCS Binnary files
    this._files.getFiles("mcs_bin").subscribe((res) => {
      this.mcsBinFiles = res;
    })
  }

  regGewServer($event, server: Server) {
    $event.preventDefault();
    for (let c in this.srvrForm.controls) {
      this.srvrForm.controls[c].markAsTouched();
    }
    if (this.srvrForm.valid) {
      this._servers.create(server).subscribe((res: Server) => {
        res.multiCs = [];
        this.servers.push(res);
        this.serverFormShow = false;
        this.srvrForm.reset();
        this.server = res;
        // this.multiCS = null;
      })
    }
  };

  regNewMCS($event, mcs: MultiCS) {
    $event.preventDefault();
    for (let c in this.mcsForm.controls) {
      this.mcsForm.controls[c].markAsTouched();
    }
    if (this.mcsForm.valid) {
      this._servers.createMultiCs(this.server.id, mcs).subscribe((res: MultiCS) => {
        if (!this.server.multiCs) {
          this.server.multiCs = [];
        }
        this.server.multiCs.push(res);
        this.mcsFormShow = false;
        this.multiCS = res;
        this.mcsForm.reset();
      })
    }
  }

  regNewClient($event, client: Client) {
    $event.preventDefault();
    for (let c in this.clientForm.controls) {
      this.clientForm.controls[c].markAsTouched();
    }
    if (this.clientForm.valid) {
      this.clientForm.reset();
      this.clientFormShow = false;
    }
  }

  regNewCam($event, camForm, camFormName) {
    $event.preventDefault();
    let paramsObj = { "Name": camForm.Name, "Port": camForm.Port };
    let i = 0;
    camForm.params.forEach(param => {
      paramsObj["param" + i] = param.param;
      this.removeParam(i);
      i++;
    });

    if (camFormName == "Cache") {
      this._mcss.createCache(this.multiCS.id, paramsObj).subscribe((res) => { this.cache.push(res); this.camFormShow = false; this.camForm.reset(); })
    }
    if (camFormName == "CCcam") {
      this._mcss.createCCcams(this.multiCS.id, paramsObj).subscribe((res) => { this.cccams.push(res); this.camFormShow = false; this.camForm.reset(); })
    }
    if (camFormName == "MgCamd") {
      this._mcss.createMgcamds(this.multiCS.id, paramsObj).subscribe((res) => { this.mgcamds.push(res); this.camFormShow = false; this.camForm.reset(); })
    }
    if (camFormName == "ProfileDefault") {
      delete paramsObj.Port;
      this._mcss.createProfileDefault(this.multiCS.id, paramsObj).subscribe((res) => { this.profileDefault.push(res); this.camFormShow = false; this.camForm.reset(); })
    }
    if (camFormName == "Profile") {
      this._mcss.createProfiles(this.multiCS.id, paramsObj).subscribe((res) => { this.profiles.push(res); this.camFormShow = false; this.camForm.reset(); })
    }
  }

  regNewDomain($event, domain: Domain) {
    $event.preventDefault();
    for (let c in this.domainForm.controls) {
      this.domainForm.controls[c].markAsTouched();
    }
    if (this.domainForm.valid) {
      this._mcss.createDomains(this.multiCS.id, domain).subscribe((res) => {
        this.domainForm.reset();
        this.domainFormShow = false;
        this.domains.push(res);
      })

    }
  }

  changeServer(server: Server) {
    this.server = server;
    if (server.multiCs) {
      this.multiCS = server.multiCs[0];
    } else {
      delete this.multiCS;
    }
    this.serverFormShow = false;
  }

  changeMCS(mcs: MultiCS) {
    this.multiCS = mcs;
    this.mcsFormShow = false;
    //gjej CCcams
    this._mcss.getCCcams(this.multiCS.id).subscribe((res) => { this.cccams = res; })
    //gjej Cache
    this._mcss.getCache(this.multiCS.id).subscribe((res) => { this.cache = res; })
    //gjej MgCamds
    this._mcss.getMgcamds(this.multiCS.id).subscribe((res) => { this.mgcamds = res; })
    //gjej Profile_default
    this._mcss.getProfileDefault(this.multiCS.id).subscribe((res) => { this.profileDefault = res; })
    //gjej Profiles
    this._mcss.getProfiles(this.multiCS.id).subscribe((res) => { this.profiles = res; })
    //gjej Domains
    this._mcss.getDomains(this.multiCS.id).subscribe((res) => { this.domains = res; })
  }

  toggleDialogs(dialog, camFormName) {
    if (dialog == "serverFormShow") {
      this.serverFormShow = true;
      this.mcsFormShow = false;
      this.clientFormShow = false;
      this.camFormShow = false;
      this.domainFormShow = false;
    }
    if (dialog == "mcsFormShow") {
      this.serverFormShow = false;
      this.mcsFormShow = true;
      this.clientFormShow = false;
      this.camFormShow = false;
      this.domainFormShow = false;
    }
    if (dialog == "clientFormShow") {
      this.serverFormShow = false;
      this.mcsFormShow = false;
      this.clientFormShow = true;
      this.camFormShow = false;
      this.domainFormShow = false;
    }
    if (dialog == "camFormShow") {
      this.serverFormShow = false;
      this.mcsFormShow = false;
      this.clientFormShow = false;
      this.camFormShow = true;
      this.domainFormShow = false;
    }
    if (dialog == "domainFormShow") {
      this.serverFormShow = false;
      this.mcsFormShow = false;
      this.clientFormShow = false;
      this.camFormShow = false;
      this.domainFormShow = true;
    }
    this.camFormName = camFormName;
  }

  deleteMCS(mcsName, multiCs: MultiCS) {
    if (mcsName == this.multiCS.Name) {
      this._mcss.deleteCCcams(this.multiCS.id).subscribe((res) => { })
      this._mcss.deleteCache(this.multiCS.id).subscribe((res) => { })
      this._mcss.deleteMgcamds(this.multiCS.id).subscribe((res) => { })
      this._mcss.deleteProfileDefault(this.multiCS.id).subscribe((res) => { })
      this._mcss.deleteProfiles(this.multiCS.id).subscribe((res) => { })

      this._mcss.deleteById(this.multiCS.id).subscribe((res) => {
        if (this.server.multiCs.length > 0 && this.server.multiCs.length != 1) {
          this.server.multiCs = this.server.multiCs.filter((mcs) => mcs.id !== this.multiCS.id)
          this.multiCS = this.server.multiCs[0];
        } else {
          this.server.multiCs = [];
        }
      })
      this.deleteMcsShow = false;
    } else {
      alert("Error! MultiCS Name does not match!");
      this.deleteMcsShow = false;
    }

  }

  deleteServer(serverName, server: Server) {
    if (serverName == this.server.Name) {
      if (this.server.multiCs.length > 0) {
        this.server.multiCs.forEach(multiCs => {
          this._mcss.deleteCCcams(multiCs.id).subscribe((res) => { })
          this._mcss.deleteCache(multiCs.id).subscribe((res) => { })
          this._mcss.deleteMgcamds(multiCs.id).subscribe((res) => { })
          this._mcss.deleteProfileDefault(multiCs.id).subscribe((res) => { })
          this._mcss.deleteProfiles(multiCs.id).subscribe((res) => { })
          this._mcss.deleteById(multiCs.id).subscribe((res) => {
            delete this.multiCS;
          })
        });
        this._servers.deleteMultiCs(server.id).subscribe((res) => { })
      }
      this._servers.deleteById(server.id).subscribe((res) => {
      }, (err) => {
        console.log(err);
      }, () => {
        this.servers = this.servers.filter((srvr: Server) => srvr.id !== this.server.id);
        this.server = this.servers[0];
        if (this.servers.length > 0) {
          this.multiCSs = this.server.multiCs;
          this.multiCS = this.multiCSs[0];
        }
      })
      this.deleteServerShow = false;
    } else {
      alert("Error! Server Name does not match!")
      this.deleteServerShow = false;
    }
  }

  ngOnInit() {
  }

  initParam() {
    return this._fb.group({
      param: ['', Validators.required],
    });
  }

  addParam() {
    const control = <FormArray>this.camForm.controls['params'];
    control.push(this.initParam());
  }

  removeParam(i: number) {
    const control = <FormArray>this.camForm.controls['params'];
    control.removeAt(i);
  }
}
