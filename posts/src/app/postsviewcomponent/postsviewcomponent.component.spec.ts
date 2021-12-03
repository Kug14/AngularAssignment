import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsviewcomponentComponent } from './postsviewcomponent.component';

describe('PostsviewcomponentComponent', () => {
  let component: PostsviewcomponentComponent;
  let fixture: ComponentFixture<PostsviewcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsviewcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsviewcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
