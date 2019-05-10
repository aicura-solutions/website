import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSourceBankingComponent } from './open-source-banking.component';

describe('OpenSourceBankingComponent', () => {
  let component: OpenSourceBankingComponent;
  let fixture: ComponentFixture<OpenSourceBankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenSourceBankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenSourceBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
