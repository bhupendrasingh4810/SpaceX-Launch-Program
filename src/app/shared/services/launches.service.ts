import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { LAUNCHES_API } from '../constants/api-constants';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class LaunchesServices {
    constructor(private http: HttpClient) { }

    getLaunches(data: any): Observable<any> {
        let params = this.buildHttpParams(data);
        let options = { params };
        return this.http.get<Response>(LAUNCHES_API, options);
    }

    buildHttpParams(data: Object): HttpParams {
        let params: HttpParams = new HttpParams();

        for (const key in data) {
            if (data.hasOwnProperty(key) && data[key])
                params = params.set(key, data[key].toString());
        }
        return params;
    }
}