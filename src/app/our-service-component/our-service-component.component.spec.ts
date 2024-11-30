import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServiceComponentComponent } from './our-service-component.component';

describe('OurServiceComponentComponent', () => {
  let component: OurServiceComponentComponent;
  let fixture: ComponentFixture<OurServiceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurServiceComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurServiceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
