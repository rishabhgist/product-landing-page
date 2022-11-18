import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from '../model/product';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
  constructor(private fb: FormBuilder) { }
  item = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    category: ['', Validators.required]
  })

  addItem(item: any) {
    console.log(item.value);
    
  }
}
