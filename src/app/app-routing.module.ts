import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'emi-calculator',
    pathMatch: 'full'
  },
  {
    path: 'emi-calculator',
    loadChildren: () => import('./modules/emi-calculator/emi-calculator.module').then( m => m.EmiCalculatorPageModule)
  },
  {
    path: 'fd-calculator',
    loadChildren: () => import('./modules/fd-calculator/fd-calculator.module').then( m => m.FdCalculatorPageModule)
  },
  {
    path: 'rd-calculator',
    loadChildren: () => import('./modules/rd-calculator/rd-calculator.module').then( m => m.RdCalculatorPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
