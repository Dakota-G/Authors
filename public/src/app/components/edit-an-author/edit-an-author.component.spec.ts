import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAnAuthorComponent } from './edit-an-author.component';

describe('EditAnAuthorComponent', () => {
  let component: EditAnAuthorComponent;
  let fixture: ComponentFixture<EditAnAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAnAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAnAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
