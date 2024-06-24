import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosPageComponent } from './nosotros-page.component';

describe('NosotrosPageComponent', () => {
  let component: NosotrosPageComponent;
  let fixture: ComponentFixture<NosotrosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NosotrosPageComponent]
    });
    fixture = TestBed.createComponent(NosotrosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
