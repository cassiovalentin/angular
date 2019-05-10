import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {
  MenuAberto = true;
  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.MenuAberto = !this.MenuAberto;
  }

}
