import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routerConfig} from './app.routes';
import {HeaderComponent} from './header/header.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppComponent} from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routerConfig
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        DashboardComponent,
    ],
    providers: [
        // insert singletons here
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}