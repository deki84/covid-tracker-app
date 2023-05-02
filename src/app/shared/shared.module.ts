import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [SidebarComponent, TopbarComponent, SearchComponent],
  exports: [SidebarComponent, TopbarComponent,SearchComponent],
  imports: [CommonModule,RouterModule],
})
export class SharedModule {}
