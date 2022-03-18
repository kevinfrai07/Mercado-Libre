import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { RespModel } from '../interface/respmodel';
import { ProductModel } from '../interface/productmodel';
import { ProductDescModel } from '../interface/productDescmodel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  search : string = "https://api.mercadolibre.com/sites/MLA/search?q=";
  item : string = "https://api.mercadolibre.com/items/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': "true",
    })
  }
  constructor(protected _http: HttpClient) {
      
  }

  getProductsFilter(endPoint: string){
    const apiURL = `${this.search}${endPoint}`;        
    return this._http.get<RespModel>(apiURL,{headers: this.httpOptions.headers});
  }

  getProductId(id: string){
    const apiURL = `${this.item}${id}`;        
    return this._http.get<ProductModel>(apiURL);
  }


  getProductDescriptionId(id: string){
    const apiURL = `${this.item}${id}` + '/description';        
    return this._http.get<ProductDescModel>(apiURL);
  }
}
