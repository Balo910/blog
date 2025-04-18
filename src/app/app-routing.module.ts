import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DiaryComponent } from './components/diary/diary.component';
import { FluidComponent } from './components/fluid/fluid.component';
import { FoodComponent } from './components/food/food.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'diary', component: DiaryComponent },
  { path: 'fluid', component: FluidComponent },
  { path: 'food', component: FoodComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
