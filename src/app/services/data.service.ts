import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': '',
    'Access-Control-Allow-Origin': '*',
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = "api/";

  getData(context: string) {
    let url = `${this.baseUrl}${context}`;
    return this.httpClient.get<any>(url,httpOptions);
  }

  loadData(context: string, data: any) {
    let url = `${this.baseUrl}${context}`;
    return this.httpClient.post<any>(url,data,httpOptions);
  }

  saveData(context: string, data: any) {
    let url = `${this.baseUrl}${context}`;
    return this.httpClient.post<any>(url,data,httpOptions);
  }

  updateData(context: string, data: any) {
    let url = `${this.baseUrl}${context}`;
    return this.httpClient.put<any>(url,data,httpOptions);
  }

  deleteData(context: string, id: any) {
    let url = `${this.baseUrl}${context}/${id}`;
    return this.httpClient.delete<any>(url,httpOptions);
  }

}
