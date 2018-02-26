
import  {Injectable} from "@angular/core";
import {HttpHeaders,HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of"
import {tap, catchError} from "rxjs/operators"




const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})}

@Injectable()
export class CustomerService{

	private customersUrl="api/customers";

	constructor(private http:HttpClient){}


	getCustomers():Observable<Object>{
		return this.http.get<Object>(this.customersUrl).pipe(
			tap(heroes=> console.log("get customers")),
			catchError(this.handleError("getHeroes",[]))

			);
	}




	private handleError<T>(operation:any,result?: T){


		return (error:any):Observable<T>=>{

		console.log('${operation} failed')

		return of(result as T); 

	}

	}








}