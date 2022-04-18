import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { DepartmentComponent } from './department/department.component';
import { Department, ServiceDepartment } from './department/department.service';
import { FormsModule } from '@angular/forms';
import { DxButtonModule, DxCheckBoxModule, DxDataGridModule, DxListModule, DxPopupModule, DxScrollViewModule, DxSelectBoxModule, DxTextBoxModule, DxTreeListModule, DxValidatorModule } from 'devextreme-angular';
import { UserComponent } from './user/user.component';
import { DesignComponent } from './design/design.component';
import {  ServiceUser, User ,} from './user/user.service';
import { ImgComponent } from './img/img.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    UserComponent,
    DesignComponent,
    ImgComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AppRoutingModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxButtonModule,
    DxPopupModule,
    DxScrollViewModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxSelectBoxModule,
    DxDataGridModule,
    DxCheckBoxModule,
    DxTreeListModule,
    DxDataGridModule,
    DxListModule
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService,
    FormsModule,
    ServiceDepartment,
    Department,
    User,
    ServiceUser,
    
  ],
  bootstrap: [AppComponent]
  // AppComponent
})
export class AppModule { }
