import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonGroupModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxAvatarModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxIconModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxAvatarModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxIconModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxDialogModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxSelectModule, IgxInputGroupModule, IgxSelectModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule } from '@infragistics/igniteui-angular';
import { ListViewComponent } from './list-view.component';

describe('ListViewComponent', () => {
  let component: ListViewComponent;
  let fixture: ComponentFixture<ListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViewComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonGroupModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxAvatarModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxIconModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxIconModule, IgxAvatarModule, IgxAvatarModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxIconModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxDialogModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxSelectModule, IgxInputGroupModule, IgxSelectModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
