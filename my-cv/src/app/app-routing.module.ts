import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AboutComponent,
  },
  {
    path: 'about',
    pathMatch: 'full',
    component: AboutComponent,
  },
  {
    path: 'skills',
    pathMatch: 'full',
    component: SkillsComponent,
  },
  {
    path: 'projects',
    pathMatch: 'full',
    component: ProjectsComponent,
  },
   { path: '**',
  pathMatch: 'full',
  component: ErrorPageComponent 
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
