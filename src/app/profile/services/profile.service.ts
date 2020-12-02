import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map, filter, mergeMap } from 'rxjs/operators';

@Injectable()
export class ProfileService {
    _url = 'https://api.github.com/users';

    private profileObj = new BehaviorSubject<any>([])
    profile = this.profileObj.asObservable();

    private error = new BehaviorSubject('');
    errorMessage = this.error.asObservable()

    private loading = new BehaviorSubject(false);
    isLoading = this.loading.asObservable()

    constructor(private http: HttpClient) { }


    getProfile(param) {
        const query = param ? `/${param}` : '';
        return this.http.get(`${this._url}${query}`);
    }

    getAllProfile() {
        return this.http.get(`${this._url}`);
    }

    setProfileObject(obj) {
        if (Array.isArray(obj)) {
            this.profileObj.next(obj);
        } else {
            const objHolder = [obj];
            this.profileObj.next(objHolder);
        }
    }

    setLoading(val) {
        this.loading.next(val)
    }

    setErrorMessage(msg) {
        this.error.next(msg)
    }


}