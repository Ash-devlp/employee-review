import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AdminService } from "./admin.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-editmployee",
  templateUrl: "./editemployee.component.html",
  styleUrls: [],
})
export class EditemployeeComponent implements OnInit {
  myForm: FormGroup;

  constructor(private adminservice: AdminService, private router: Router) {
    const navigation = router.getCurrentNavigation();
  }

  ngOnInit() {
    console.log(this.router.getCurrentNavigation().extras.state.id);

    this.myForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
        ),
      ]),
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      hiredate: new FormControl(null, Validators.required),
      loginkey: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    const employee = {
      firstname: this.myForm.value.firstname,
      lastname: this.myForm.value.lastname,
      hiredate: this.myForm.value.hiredate,
      email: this.myForm.value.email,
      loginkey: this.myForm.value.loginkey,
    };
    this.adminservice.newEmployee(employee).subscribe(
      (data) => {
        console.log(data);
        this.router.navigateByUrl("/admin/employee");
      },
      (error) => console.log(JSON.stringify(error))
    );
    this.myForm.reset;
  }
}
