import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent {
  constructor(private fb: FormBuilder, private service: ProductService, private _snackBar: MatSnackBar) {}
  item = this.fb.group({
    "name": ['', Validators.required],
    "description": ['', Validators.required],
    "category": ['', Validators.required],
  });

  addItem(item: any) {
    this.service.post(item.value).subscribe((value) => {
      console.log('DataSaved');
    });
  }
}
