
import {Component, OnInit} from '@angular/core' 
import {CustomerService} from '../customer.service'


@Component(
	{templateUrl:'./customers.component.html',

	selector:"app-customers"

}

	)

export class CustomersComponent implements OnInit{

	customers:Object;

	constructor(private customerService:CustomerService){}

	ngOnInit(){

		this.getCustomers();

	}


	getCustomers(){
		this.customerService.getCustomers().subscribe(customers=>{
			this.customers=customers;
		})
	}




}