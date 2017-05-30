import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Routing
import { routing } from './app.routing';

// Directives
import { MDL } from './directives/MDLDirective.directive';

// Car Components
import { CarComponent } from './car/car.component';
import { CarListComponent } from './car/car-list/car-list.component';
import { CarFormComponent } from './car/car-form/car-form.component';

// Driver Components
import { DriverComponent } from './driver/driver.component';
import { DriverListComponent } from './driver/driver-list/driver-list.component';
import { DriverFormComponent } from './driver/driver-form/driver-form.component';

// Other Components
import { NotFoundComponent } from './not-found/not-found.component';

// Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { MaterialModule } from '@angular/material';

// Services
import { Configuration } from './app.configuration';
import { CarService } from './car/services/car.service';
import { DriverService } from './driver/services/driver.service';
import { EmitterService } from './services/emitter.service';
import { NotificationService } from './services/notification.service';
import { PagerService } from './services/pager.service';

@NgModule({
  declarations: [
    AppComponent,
    MDL,
    CarComponent,
    CarListComponent,
    CarFormComponent,
    DriverComponent,
    DriverListComponent,
    DriverFormComponent,
    NotFoundComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    MaterialModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    Configuration,
    CarService,
    DriverService,
    EmitterService,
    NotificationService,
    PagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
