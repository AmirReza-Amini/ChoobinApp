import { StoreService } from '../store.service';
import { Good } from '../../models/store';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UnitDic, FormMode } from 'app/models/types';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnDestroy {
  @ViewChild('closeEditModal', null) closeEditModal: ElementRef<HTMLElement>;
  @ViewChild('closeByModal', null) closeByModal: ElementRef<HTMLElement>;
  GoodList: Good[];
  currentGood: Good = new Good();
  unitList = UnitDic;
  units: string[] = [];
  byObject = { price: 1000, ammount: 0 }
  formMode: FormMode = 'none'
  sub$: Subscription;

  constructor(private storeService: StoreService) {
    this.units = Object.keys(UnitDic);
    this.LoadData();
  }

  LoadData() {
    this.sub$ = this.storeService.GetAllGoods()
      .subscribe(m => {
        this.GoodList = m.data
      })
  }

  SetCurrentGood(good) {
    this.formMode = 'edit'
    this.currentGood = good
    this.currentGood.byList.sort(function (a, b) {
      return a.date > b.date ? -1 : a.date < b.date ? 1 : 0;
    });
  }

  Save(formData) {
    if (this.formMode == 'edit') {
      formData.id = this.currentGood._id;
      this.sub$ = this.storeService.Update(formData)
        .subscribe(m => {
          if (m.result)
            this.Reset();
        })
    }
    else {
      this.sub$ = this.storeService.Add(formData)
        .subscribe(m => {
          if (m.result)
            this.Reset();
        })
    }
  }

  Add() {
    this.formMode = 'add';
  }

  By(data) {
    data.id = this.currentGood._id;
    this.sub$ = this.storeService.By(data)
      .subscribe(m => {
        if (m.result)
          this.Reset()
      })
  }

  Reset() {
    this.LoadData();
    this.currentGood = new Good();
    this.closeEditModal.nativeElement.click();
    this.closeByModal.nativeElement.click();
    this.formMode = 'none';
  }
  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

}
