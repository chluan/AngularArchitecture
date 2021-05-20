import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoModule } from './pages/demo/demo.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'demo',
        loadChildren: () =>  import('./pages/demo/demo.module').then(m => m.DemoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
