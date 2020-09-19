import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { EmployeeComponent } from "./employee/employee.component";
import { ADMIN_ROUTES } from "./admin/admin.routes";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "employee", component: EmployeeComponent },
  { path: "admin", component: AdminComponent, children: ADMIN_ROUTES },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
