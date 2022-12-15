import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';

import { ListComponent } from './components/list/list.component';
import { MembersComponent } from './components/form/members/members.component';
import { FormComponent } from './components/form/form.component';
import { StepOneComponent } from './components/form/new/step-one/step-one.component';
import { StepTwoComponent } from './components/form/new/step-two/step-two.component';
import { StepThreeComponent } from './components/form/new/step-three/step-three.component';

import { NgbPaginationModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MembersComponent,
    FormComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    NgWizardModule.forRoot(ngWizardConfig),
    NgbPaginationModule, 
    NgbAlertModule, 
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
