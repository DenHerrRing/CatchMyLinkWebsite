import {TestBed} from '@angular/core/testing';

import {LinksDataResolver} from './links-data.resolver';

describe('LinksDataResolver', () => {
    let resolver: LinksDataResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        resolver = TestBed.inject(LinksDataResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
