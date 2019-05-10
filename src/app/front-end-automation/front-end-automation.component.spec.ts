import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEndAutomationComponent } from './front-end-automation.component';

describe('FrontEndAutomationComponent', () => {
  let component: FrontEndAutomationComponent;
  let fixture: ComponentFixture<FrontEndAutomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontEndAutomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontEndAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
