import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() data: any[] = [];
  @Output() onPostClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  onViewMore(post:any) {
    this.onPostClick.emit(post);
  }
}
