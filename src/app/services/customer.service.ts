import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Customer } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  constructor(private http:HttpClient) {

   }

   public getAllCustomers():Observable<Array<Customer>>
   {
      return this.http.get<Customer[]>('http://localhost:8082/customers')
   }

   public searchCustomers(keyword:string):Observable<Customer[]>{
      return this.http.get<Customer[]>(`http://localhost:8082/customers/search?keyword=${keyword}`)
   }

   public saveCustomer(customer:Customer):Observable<Customer>{
      return this.http.post<Customer>('http://localhost:8082/customers',
       customer)
   }

   public getCustomer(id:number):Observable<Customer>{
      return this.http.get<Customer>(`http://localhost:8082/customers/${id}`)
   }



   public deleteCustomer(id:number){
      return this.http.delete(`http://localhost:8082/customer/${id}`)
   }



}
