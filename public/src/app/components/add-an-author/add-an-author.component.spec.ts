import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnAuthorComponent } from './add-an-author.component';

describe('AddAnAuthorComponent', () => {
  let component: AddAnAuthorComponent;
  let fixture: ComponentFixture<AddAnAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
