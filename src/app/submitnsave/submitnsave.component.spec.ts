import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitnsaveComponent } from './submitnsave.component';

describe('SubmitnsaveComponent', () => {
  let component: SubmitnsaveComponent;
  let fixture: ComponentFixture<SubmitnsaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitnsaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitnsaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
