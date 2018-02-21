
import  {Injectable} from "@angular/core";
import {HttpHeaders,HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";




const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})}

@Injectable()
export class CustomerService{

	private customersUrl="api/customers";

	constructor(private http:HttpClient){}


	





}