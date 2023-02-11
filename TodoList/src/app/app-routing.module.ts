import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ListPageComponent } from './components/list-page/list-page.component';

const routes: Routes = [
  {
    path: '',
    component: ListPageComponent,
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
    title: 'Tara',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
