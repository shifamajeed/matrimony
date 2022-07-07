import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HideprofileComponent } from './hideprofile.component';

describe('HideprofileComponent', () => {
  let component: HideprofileComponent;
  let fixture: ComponentFixture<HideprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HideprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HideprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
