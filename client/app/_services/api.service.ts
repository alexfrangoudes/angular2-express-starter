import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

    // pass to http.post
    private options: RequestOptions;

    constructor(private http: Http) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        this.options = new RequestOptions({headers: headers});
    }


    public init(): Observable<string[]> {
        return this.http
            .get('/api/hello')
            .map((res: Response) => res.json());
    }

}