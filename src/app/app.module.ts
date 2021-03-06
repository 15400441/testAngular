import { NgModule ,NO_ERRORS_SCHEMA }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { HeroService }          from './hero.service';
import { CustomerService }          from './customer.service';
import { MessageService }       from './message.service';
import { MessagesComponent }    from './messages/messages.component';
import { CustomersComponent }      from './customers/customers.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    CustomersComponent
  ],
  providers: [ HeroService, MessageService,CustomerService ],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
