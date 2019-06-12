import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KebabComponent } from './ngx-kebab.component';

describe('KebabComponent', () => {
  let component: KebabComponent;
  let fixture: ComponentFixture<KebabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KebabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KebabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
