import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  parameter:string = "";
  constructor(private router : Router,
    private Activatedroute:ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.Activatedroute.queryParams
    .subscribe( params => {
      if(params['search']){
        this.parameter=params['search'];
      }
    });
  }

  search(dato:string){
    this.router.navigateByUrl('/items?search='+dato)
  }

}
