import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsSubComponent } from './about-us-sub.component';

describe('AboutUsSubComponent', () => {
  let component: AboutUsSubComponent;
  let fixture: ComponentFixture<AboutUsSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsSubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutUsSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
