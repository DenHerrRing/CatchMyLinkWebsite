import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./shared/interceptors/AuthInterceptor";
import {AppStorageService} from "./shared/services/app-storage.service";
import {ClipboardModule} from "ngx-clipboard";
import {DragDropModule} from "@angular/cdk/drag-drop";

export function appProviderFactory(appStorageService: AppStorageService) {
    return () => appStorageService.load();
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        DragDropModule,
        ClipboardModule,
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: appProviderFactory,
            deps: [AppStorageService],
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
    ],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
