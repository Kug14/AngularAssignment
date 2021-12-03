import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserDetails } from '../UserInfo.model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  title: string = "";
  description: string = "";
  category: string = "";
  author: string = "";

  @Output() onSubmit = new EventEmitter<any>()

  ngOnInit(): void {
  }

  submitForm()
  {
    this.onSubmit.emit({
      title: this.title, 
      description: this.description,
      category: this.category,
      author: this.author,
      date: new Date().toLocaleTimeString()
    }); 
  }

}
