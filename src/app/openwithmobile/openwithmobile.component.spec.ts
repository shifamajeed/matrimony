import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenwithmobileComponent } from './openwithmobile.component';

describe('OpenwithmobileComponent', () => {
  let component: OpenwithmobileComponent;
  let fixture: ComponentFixture<OpenwithmobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenwithmobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenwithmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
