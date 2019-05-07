import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AicuraLogoWhiteComponent } from './aicura-logo-white.component';

describe('AicuraLogoWhiteComponent', () => {
  let component: AicuraLogoWhiteComponent;
  let fixture: ComponentFixture<AicuraLogoWhiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AicuraLogoWhiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AicuraLogoWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
