import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postsview',
  templateUrl: './postsviewcomponent.component.html',
  styleUrls: ['./postsviewcomponent.component.css']
})
export class PostsviewcomponentComponent implements OnInit {
  @Input() post: any = {};
  constructor() { }

  ngOnInit(): void {
    
  }

}
