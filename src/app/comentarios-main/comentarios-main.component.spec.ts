import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosMainComponent } from './comentarios-main.component';

describe('ComentariosMainComponent', () => {
  let component: ComentariosMainComponent;
  let fixture: ComponentFixture<ComentariosMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComentariosMainComponent]
    });
    fixture = TestBed.createComponent(ComentariosMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
