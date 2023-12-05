import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMEComponent } from './contact-me.component';

describe('ContactMEComponent', () => {
  let component: ContactMEComponent;
  let fixture: ComponentFixture<ContactMEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactMEComponent]
    });
    fixture = TestBed.createComponent(ContactMEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
