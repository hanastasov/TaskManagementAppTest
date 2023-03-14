import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxButtonGroupModule, IgxCardModule, IgxDialogModule, IgxInputGroupModule, IgxSelectModule, IgxListModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { ListViewComponent } from './list-view/list-view.component';
import { MasterViewComponent } from './master-view/master-view.component';

@NgModule({
  declarations: [
    AppComponent,
    KanbanBoardComponent,
    ListViewComponent,
    MasterViewComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxNavbarModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    IgxAvatarModule,
    IgxButtonGroupModule,
    IgxCardModule,
    IgxDialogModule,
    IgxInputGroupModule,
    IgxSelectModule,
    FormsModule,
    IgxListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
