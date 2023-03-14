import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { ListViewComponent } from './list-view/list-view.component';
import { MasterViewComponent } from './master-view/master-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'kanban-board', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'kanban-board', component: KanbanBoardComponent, data: { text: 'Kanban Board' } },
  { path: 'list-view', component: ListViewComponent, data: { text: 'List View' } },
  { path: 'master-view', component: MasterViewComponent, data: { text: 'Master View' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
