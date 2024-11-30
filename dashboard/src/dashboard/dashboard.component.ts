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
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {Rollen} from '../enum/rollen';
import {MatFormField, MatLabel, MatOption, MatSelect} from '@angular/material/select';
import {MatDivider} from '@angular/material/divider';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    FormsModule,
    MatLabel,
    MatSelect,
    MatOption,
    MatDivider,
    MatFormField,
    ReactiveFormsModule

  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})


export class DashboardComponent implements OnInit, AfterContentInit {

  cdRef = inject(ChangeDetectorRef);
  apiService = inject(ApiService);
  result: any;
  isLoaded: boolean = false;
  role: string = ''
  availableOptions = [
    Rollen.INITIAL,
    Rollen.ENTWICKLUNG,
    Rollen.PRODUCT_OWNER,
    Rollen.TEST_MANAGER
  ];

  constructor() {
  }
  ngOnInit() {
    //this.getCucumberStudioApi();

    setTimeout(() => {
      }, 1000);
  }

  ngAfterContentInit()  {
    if (!this.isLoaded && !this.result) {
      this.isLoaded = true;
      //this.getCucumberStudioApi();
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

  protected readonly Rollen = Rollen;
}
