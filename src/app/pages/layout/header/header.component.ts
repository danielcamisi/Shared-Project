import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
      openedsidebar = true;

      openSidebar(){
        this.openedsidebar = true;
      }

      closeSidebar(){
        this.openedsidebar = false;
      }
}
