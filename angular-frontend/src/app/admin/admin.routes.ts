import { Routes } from "@angular/router";

import { ViewemployeesComponent } from "./viewemployees.component";
import { NewemployeeComponent } from "./newemployee.component";
import { EditemployeeComponent } from "./editemployee.component";

export const ADMIN_ROUTES: Routes = [
  { path: "employees", component: ViewemployeesComponent },
  { path: "newemployee", component: NewemployeeComponent },
  { path: "editemployee", component: EditemployeeComponent },
  { path: "", redirectTo: "employees", pathMatch: "full" },
];
