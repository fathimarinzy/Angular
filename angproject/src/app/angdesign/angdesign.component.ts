import { Component } from '@angular/core';

@Component({
  selector: 'app-angdesign',
  templateUrl: './angdesign.component.html',
  styleUrls: ['./angdesign.component.css']
})
export class AngdesignComponent {

    displayedColumns: string[] = ['id', 'name'];
    dataSource = [
      {id: 1, name: 'John'},
      {id: 2, name: 'Jane'},
    
    ];
  }
  

