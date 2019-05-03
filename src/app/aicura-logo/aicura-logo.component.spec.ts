import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AicuraLogoComponent } from './aicura-logo.component';

describe('AicuraLogoComponent', () => {
  let component: AicuraLogoComponent;
  let fixture: ComponentFixture<AicuraLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AicuraLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AicuraLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
