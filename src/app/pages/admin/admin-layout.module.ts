import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {
  AdminSidebarComponent,
  AdminControlSidebarComponent,
  AdminHeaderComponent,
  AdminFooterComponent,
  AddBlogMenuComponent,
  AdminLayoutComponent,
  PasswordControlWindowComponent,
  DialogWindowComponent
} from '../../components/';
import { DashboardComponent, LoginComponent, UserAddComponent, BlogMenuListComponent } from './';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardComponent,
    AdminFooterComponent,
    AdminHeaderComponent,
    AdminControlSidebarComponent,
    AdminSidebarComponent,
    LoginComponent,
    UserAddComponent,
    PasswordControlWindowComponent,
    AddBlogMenuComponent,
    DialogWindowComponent,
    BlogMenuListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
})
export class AdminLayoutModule {}
