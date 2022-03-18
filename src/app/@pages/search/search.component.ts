import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RespModel } from 'src/app/interface/respmodel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public data : RespModel;
  constructor(private Activatedroute:ActivatedRoute,
    private router : Router,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.Activatedroute.queryParams
    .subscribe( params => {
      this.productService.getProductsFilter(params['search']).subscribe(resp=>{
        this.data = resp;
        localStorage.setItem('categories',JSON.stringify(this.data.available_filters))
      });
    });
  }

  viewItem(id:any){
    this.router.navigate(['/items/' + id])

  }
}
