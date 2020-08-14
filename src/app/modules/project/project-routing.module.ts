import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from 'src/app/modules/project/project/project.component';
import { ProjectWorkspaceComponent } from 'src/app/modules/project/project-workspace/project-workspace.component';


const routes: Routes = [
  {
    path: '',
    component: ProjectComponent
  },
  {
    path: 'workspace',
    component: ProjectWorkspaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
