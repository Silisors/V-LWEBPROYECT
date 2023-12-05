import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastHomePageComponent } from './last-home-page.component';

describe('LastHomePageComponent', () => {
  let component: LastHomePageComponent;
  let fixture: ComponentFixture<LastHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastHomePageComponent]
    });
    fixture = TestBed.createComponent(LastHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
