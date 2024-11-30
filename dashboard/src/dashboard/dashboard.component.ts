import {AfterViewInit, ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [

  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})


export class DashboardComponent implements OnInit, AfterViewInit {

  cdRef = inject(ChangeDetectorRef);
  apiService = inject(ApiService);
  result: string | undefined;

  constructor() {
  }
  ngOnInit() {
    // setTimeout(() => {
    //   }, 10000);
    // this.cdRef.detectChanges();
  }

  ngAfterViewInit() {
    this.getCucumberStudioApi();
    setTimeout(() => {
      }, 1000);
    // this.cdRef.detectChanges();

  }

  getCucumberStudioApi() {
    this.apiService.get().then((data: any) => {
      this.result = data.data[0].id;
      console.log('DATEN', data.data)
      // this.cdRef.detectChanges();
    });
  }

}
