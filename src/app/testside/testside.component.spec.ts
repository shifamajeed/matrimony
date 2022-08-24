import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsideComponent } from './testside.component';

describe('TestsideComponent', () => {
  let component: TestsideComponent;
  let fixture: ComponentFixture<TestsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
