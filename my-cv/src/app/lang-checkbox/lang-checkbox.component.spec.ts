import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangCheckboxComponent } from './lang-checkbox.component';

describe('LangCheckboxComponent', () => {
  let component: LangCheckboxComponent;
  let fixture: ComponentFixture<LangCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LangCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
