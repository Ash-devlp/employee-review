import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user) {
    const body = JSON.stringify(user);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.http
      .post("http://localhost:3000/login", body, httpOptions)
      .pipe(
        map((res: Response) => res),
        catchError((err) => {
          console.log(err);
          throw new Error(err);
        })
      );
  }
}
