import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages.routes';
import { FormsModule } from "@angular/forms";

//import { PAGES_ROUTES } from './pages.routes';


import { ChartsModule } from "ng2-charts";

//temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AcountSettingsComponent } from './acount-settings/acount-settings.component';
@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AcountSettingsComponent
    ],
    imports: [ 
        PagesRoutingModule,
        SharedModule,
        FormsModule,
        ChartsModule
    ],
    exports: [
        //PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        
    ],
    providers: [],
})
export class PagesModule {}