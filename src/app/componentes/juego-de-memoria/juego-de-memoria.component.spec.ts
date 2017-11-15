import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoDeMemoriaComponent } from './juego-de-memoria.component';

describe('JuegoDeMemoriaComponent', () => {
  let component: JuegoDeMemoriaComponent;
  let fixture: ComponentFixture<JuegoDeMemoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegoDeMemoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoDeMemoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
