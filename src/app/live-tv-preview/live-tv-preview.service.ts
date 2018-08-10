import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {GlobalsService} from '../globals.service';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LiveTvPreviewService {

  constructor(private http: Http,
              private globals: GlobalsService
  ) { }

    private extractData(res: Response) {
        let body = res.json();
        if (body) {
            return body.data || body;
        } else {
            return {};
        }
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }


    getChannels(): Observable<any> {
        let url = this.globals.API + `onnow?device_type=web&device_layout=web&page=1&limit=100&datetimestamp=${ (new Date().getTime() + new Date().getTimezoneOffset()*60*1000)/1000}`;
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getChannelDetails(id): Observable<any> {
        let url = this.globals.API + `channels/${id}/scheduling?device_type=web&device_layout=web&datetimestamp=${ (new Date().getTime() + new Date().getTimezoneOffset()*60*1000)/1000}`;
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getProgramDetails(id, progID): Observable<any> {
        let url = this.globals.API + `channels/${id}/scheduling/${progID}?device_type=web&device_layout=web`;
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }


}
