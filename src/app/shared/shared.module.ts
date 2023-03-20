import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';

@NgModule({
  declarations: [SidebarComponent, TopbarComponent],
  exports: [SidebarComponent, TopbarComponent],
  imports: [CommonModule,RouterModule],
})
export class SharedModule {}
