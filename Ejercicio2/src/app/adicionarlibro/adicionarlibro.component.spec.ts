import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarlibroComponent } from './adicionarlibro.component';

describe('AdicionarlibroComponent', () => {
  let component: AdicionarlibroComponent;
  let fixture: ComponentFixture<AdicionarlibroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarlibroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarlibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
