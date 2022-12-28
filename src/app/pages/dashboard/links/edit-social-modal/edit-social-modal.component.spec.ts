import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSocialModalComponent } from './edit-social-modal.component';

describe('EditSocialModalComponent', () => {
  let component: EditSocialModalComponent;
  let fixture: ComponentFixture<EditSocialModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EditSocialModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSocialModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
