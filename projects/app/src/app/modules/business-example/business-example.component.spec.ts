import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessExampleComponent } from './business-example.component';

describe('BusinessExampleComponent', () => {
  let component: BusinessExampleComponent;
  let fixture: ComponentFixture<BusinessExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessExampleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
