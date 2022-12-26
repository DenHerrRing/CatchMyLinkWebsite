import {TestBed} from '@angular/core/testing';

import {LinksApiService} from './links-api.service';

describe('LinksApiService', () => {
    let service: LinksApiService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LinksApiService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
