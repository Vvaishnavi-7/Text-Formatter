import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService{
    private baseUrl = 'https://jsonplaceholder.typicode.com';
    constructor(private http : HttpClient){}

    getUser(id: number): Observable<any>{
        return this.http.get(`${this.baseUrl}/users/${id}`);        
    }

    fetchPhotos(id: number): Observable<any>{
        return this.http.get(`${this.baseUrl}/photos/${id}`);        
    }

    findComment(id:number):Observable<any>{
        return this.http.get(`${this.baseUrl}/comments/${id}`)
    }

    getAlbums(id: number):Observable<any>{
        return this.http.get(`${this.baseUrl}/albums/${id}`);
    }

    getTodos(id:number): Observable<any>{
        return this.http.get(`${this.baseUrl}/todos/${id}`)
    }
    createUser(data: any): Observable<any>{
        return this.http.post(`${this.baseUrl}/users`,data);        
    }

    updateUser(id: number, data: any): Observable<any> {
        return this.http.put(`${this.baseUrl}/users/${id}`, data);
    }

    deleteUser(id:number):Observable<any>{
        return this.http.delete(`${this.baseUrl}/users/${id}`);
    }
}
