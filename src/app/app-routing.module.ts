import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',loadChildren:()=>
      import('./@pages/home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'items',loadChildren:()=>
      import('./@pages/search/search.module').then(m=>m.SearchModule)
  },
  {
    path:'items/:id',loadChildren:()=>
      import('./@pages/item/item.module').then(m=>m.ItemModule)
  },
  {path:'',redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
