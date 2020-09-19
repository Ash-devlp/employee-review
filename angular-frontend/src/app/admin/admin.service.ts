import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getAllEmployeeData() {
    return this.http.get("http://localhost:3000/admin").pipe(
      map((res: Response) => res),
      catchError((err) => {
        console.log(err);
        throw new Error(err);
      })
    );
  }

  newEmployee(employee) {
    const body = JSON.stringify(employee);
    console.log(body);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.http
      .post("http://localhost:3000/admin", body, httpOptions)
      .pipe(
        map((res: Response) => res),
        catchError((err) => {
          console.log(err);
          throw new Error(err);
        })
      );
  }
  editEmployee(id) {}

  updateEmployee(id, employee) {
    const body = JSON.stringify(employee);
    console.log(body);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.http
      .put("http://localhost:3000/admin/" + id, body, httpOptions)
      .pipe(
        map((res: Response) => res),
        catchError((err) => {
          console.log(err);
          throw new Error(err);
        })
      );
  }

  deleteEmployee(id) {
    return this.http.delete("http://localhost:3000/admin/" + id).pipe(
      map((res: Response) => res),
      catchError((err) => {
        console.log(err);
        throw new Error(err);
      })
    );
  }
}
