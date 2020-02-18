import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Mon CV',
            icon: 'pi pi-fw pi-pencil',
            
        },
        {
            label: 'Mes créations',
            icon: 'pi pi-bars',
            items: [
                {
                    label: 'WIP'
                },
            ]
        },
    ];
}
}
