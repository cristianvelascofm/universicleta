import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaPageComponent } from './entrega-page.component';

describe('EntregaPageComponent', () => {
  let component: EntregaPageComponent;
  let fixture: ComponentFixture<EntregaPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntregaPageComponent]
    });
    fixture = TestBed.createComponent(EntregaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
