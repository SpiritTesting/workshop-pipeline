import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit
} from '@angular/core';
import {ApiService} from './api.service';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    FormsModule,
    NgIf

  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})


export class DashboardComponent implements OnInit, AfterContentInit {

  cdRef = inject(ChangeDetectorRef);
  apiService = inject(ApiService);
  result: any;
  isLoaded: boolean = false;
  role: string = '';

  constructor() {
  }
  ngOnInit() {
    this.getCucumberStudioApi();

    setTimeout(() => {
      }, 1000);
    // this.cdRef.detectChanges();
  }

  ngAfterContentInit()  {
    if (!this.isLoaded && !this.result) {
      this.isLoaded = true;
      this.getCucumberStudioApi();
    }
    // this.cdRef.detectChanges();

  }

  getCucumberStudioApi() {
    if (!this.isLoaded && !this.result) {
      this.apiService.get().then((data: any) => {
        console.log('DATEN', data.data)
        if (data) {
          const obj = Object.assign({}, data);
          this.result = this.result ? this.result : obj.data[0].id;
        }
        // this.cdRef.detectChanges();
      });
    }
  }

}
