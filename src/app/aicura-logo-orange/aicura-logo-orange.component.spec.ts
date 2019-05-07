import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AicuraLogoOrangeComponent } from './aicura-logo-orange.component';

describe('AicuraLogoComponent', () => {
  let component: AicuraLogoOrangeComponent;
  let fixture: ComponentFixture<AicuraLogoOrangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AicuraLogoOrangeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AicuraLogoOrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
