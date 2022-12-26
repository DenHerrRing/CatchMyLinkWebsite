import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockPhoneComponent } from './mock-phone.component';

describe('MockPhoneComponent', () => {
  let component: MockPhoneComponent;
  let fixture: ComponentFixture<MockPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MockPhoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MockPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
