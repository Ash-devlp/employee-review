import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { AdminService } from "./admin.service";

@Component({
  selector: "app-viewemployees",
  templateUrl: "./viewemployees.component.html",
  styleUrls: [],
})
export class ViewemployeesComponent implements OnInit {
  constructor(private adminservice: AdminService, private router: Router) {}
  employees = [];
  ngOnInit() {
    this.adminservice.getAllEmployeeData().subscribe(
      (data: any) => {
        this.employees = data.obj;
        console.log(this.employees);
      },
      (error) => console.log(error)
    );
  }
  onEdit(id) {
    this.router.navigate(["/admin/editemployee"], { state: { id: id } });
  }
  onDelete(id) {
    this.adminservice.deleteEmployee(id).subscribe(
      (data: any) => {
        this.employees = data.obj;
        console.log(this.employees);
        this.router.navigateByUrl("/admin/employee");
      },
      (error) => console.log(error)
    );
  }
}
