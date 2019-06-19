import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuckoffPageComponent } from './duckoff-page.component';

describe('DuckoffPageComponent', () => {
  let component: DuckoffPageComponent;
  let fixture: ComponentFixture<DuckoffPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuckoffPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuckoffPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
