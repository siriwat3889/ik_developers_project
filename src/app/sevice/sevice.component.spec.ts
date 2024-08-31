import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeviceComponent } from './sevice.component';

describe('SeviceComponent', () => {
  let component: SeviceComponent;
  let fixture: ComponentFixture<SeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
