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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
