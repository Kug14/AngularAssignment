import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostinfocomponentComponent } from './postinfocomponent.component';

describe('PostinfocomponentComponent', () => {
  let component: PostinfocomponentComponent;
  let fixture: ComponentFixture<PostinfocomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostinfocomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostinfocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
