import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToUsePageComponent } from './how-to-use-page.component';

describe('HowToUsePageComponent', () => {
  let component: HowToUsePageComponent;
  let fixture: ComponentFixture<HowToUsePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowToUsePageComponent]
    });
    fixture = TestBed.createComponent(HowToUsePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
