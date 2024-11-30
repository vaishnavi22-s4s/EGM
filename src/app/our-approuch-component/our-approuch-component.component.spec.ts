import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurApprouchComponentComponent } from './our-approuch-component.component';

describe('OurApprouchComponentComponent', () => {
  let component: OurApprouchComponentComponent;
  let fixture: ComponentFixture<OurApprouchComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurApprouchComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurApprouchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
