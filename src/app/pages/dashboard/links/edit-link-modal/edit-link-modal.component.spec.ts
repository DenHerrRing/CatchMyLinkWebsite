import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EditLinkModalComponent} from './edit-link-modal.component';

describe('EditLinkModalComponent', () => {
    let component: EditLinkModalComponent;
    let fixture: ComponentFixture<EditLinkModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [EditLinkModalComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(EditLinkModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
