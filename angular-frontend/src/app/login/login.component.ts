import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
        ),
      ]),
      password: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    const user = {
      email: this.myForm.value.email,
      password: this.myForm.value.password,
    };
    this.auth.login(user).subscribe(
      (data: any) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);
        this.router.navigateByUrl("/employee");
      },
      (error) => console.log(error)
    );
    this.myForm.reset;
  }
}
