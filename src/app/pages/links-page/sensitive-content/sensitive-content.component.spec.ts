import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensitiveContentComponent } from './sensitive-content.component';

describe('SensitiveContentComponent', () => {
  let component: SensitiveContentComponent;
  let fixture: ComponentFixture<SensitiveContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SensitiveContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensitiveContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
