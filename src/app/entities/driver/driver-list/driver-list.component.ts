import { PagerService } from './../../../services/pager.service';
import { EmitterService } from './../../../services/emitter.service';
import { NotificationService } from './../../../services/notification.service';
import { Router } from '@angular/router';
import { DriverService } from './../services/driver.service';
import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Driver } from '../driver.model';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit, OnChanges {

  @Input() listOfDrivers: Driver[];
  @Input() listId: string;

  private title = 'List of Drivers';
  private isLoading: Boolean = true;

  // pager object
  private pager: any = {};
  // paged items
  private pagedItems: any[];

  constructor(
    private _driverService: DriverService,
    private _router: Router,
    private _notificationService: NotificationService,
    private pagerService: PagerService) { }

  ngOnInit() { }

  ngOnChanges(...args: any[]) {
    // if we have a list of driver, set loading to false, otherwise show loading animation
    if (this.listOfDrivers) {
      this.isLoading = false;
      // initialize to page 1
      this.setPage(1);
    }
  }

  editDriver = (driver: Driver): void => {
    if (driver) {
      // Navigate to driver form component
      this.goToDriverForm(+driver.driver_id);
    }
  }

  deleteDriver = (driverID): void => {
      // Call delete service
      this._driverService.delete(+driverID).subscribe(
        result => {
          // Notify driver list to refresh
          EmitterService.get(this.listId).emit(result);
          this._notificationService.success(
            'Driver deleted',
            `The driver entry with the id='${driverID}' was deleted successfuly`
          );
        },
        error => {
          console.error(error);
          this._notificationService.error(
            'Error',
            'An error occured when trying to reach the server');
        });
  }

  goToDriverForm(id: number) {
    this._router.navigate(['./driver-form', id]);
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.listOfDrivers.length, page);

    // get current page of items
    this.pagedItems = this.listOfDrivers.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
