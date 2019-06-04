import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationToggleWhiteComponent } from './navigation-toggle-white.component';

describe('NavigationToggleWhiteComponent', () => {
  let component: NavigationToggleWhiteComponent;
  let fixture: ComponentFixture<NavigationToggleWhiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationToggleWhiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationToggleWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
