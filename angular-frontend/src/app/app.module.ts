import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { AdminComponent } from "./admin/admin.component";
import { EmployeeComponent } from "./employee/employee.component";
import { LoginComponent } from "./login/login.component";
import { NewemployeeComponent } from "./admin/newemployee.component";
import { EditemployeeComponent } from "./admin/editemployee.component";
import { ViewemployeesComponent } from "./admin/viewemployees.component";

import { AdminService } from "./admin/admin.service";
import { EmployeeService } from "./employee/employee.service";
import { AuthService } from "./login/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EmployeeComponent,
    LoginComponent,
    NewemployeeComponent,
    ViewemployeesComponent,
    EditemployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AdminService, EmployeeService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
