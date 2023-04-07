import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulosCapitalizacaoComponent } from './titulos-capitalizacao.component';

describe('TitulosCapitalizacaoComponent', () => {
  let component: TitulosCapitalizacaoComponent;
  let fixture: ComponentFixture<TitulosCapitalizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitulosCapitalizacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitulosCapitalizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
