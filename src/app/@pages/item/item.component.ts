import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDescModel } from 'src/app/interface/productDescmodel';
import { ProductModel } from 'src/app/interface/productmodel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  public breadcrumb: object;
  public product : ProductModel;
  public productDesc : ProductDescModel;
  constructor(private Activatedroute:ActivatedRoute,
    private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.breadcrumb = JSON.parse(localStorage.getItem('categories'))
    this.productService.getProductId(this.Activatedroute.snapshot.paramMap.get('id')).subscribe(resp=>{
      this.productService.getProductDescriptionId(this.Activatedroute.snapshot.paramMap.get('id')).subscribe(respDesc=>{
        this.productDesc = respDesc;
        this.product = resp;
      });
    });
  }

}
