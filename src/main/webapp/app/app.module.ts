import './vendor.ts';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { MonolithicJwtAppDemoSharedModule, UserRouteAccessService } from './shared';
import { MonolithicJwtAppDemoHomeModule } from './home/home.module';
import { MonolithicJwtAppDemoAdminModule } from './admin/admin.module';
import { MonolithicJwtAppDemoAccountModule } from './account/account.module';
import { MonolithicJwtAppDemoEntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        MonolithicJwtAppDemoSharedModule,
        MonolithicJwtAppDemoHomeModule,
        MonolithicJwtAppDemoAdminModule,
        MonolithicJwtAppDemoAccountModule,
        MonolithicJwtAppDemoEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class MonolithicJwtAppDemoAppModule {}
