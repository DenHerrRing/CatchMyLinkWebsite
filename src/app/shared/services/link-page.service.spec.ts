import {TestBed} from '@angular/core/testing';

import {LinkPageService} from './link-page.service';

describe('LinkPageService', () => {
    let service: LinkPageService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LinkPageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
