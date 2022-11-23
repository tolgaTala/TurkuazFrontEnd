import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  notActiveClass = "buttons"
  activeClass = "buttons active"
  button:any
  all = "buttons active"
  category1 = "buttons"
  category2 = "buttons"
  category3 = "buttons"
  category4 = "buttons"
  category5 = "buttons"
  constructor() { }

  ngOnInit(): void {
  }
  

  allActive(i:number){
    var body = document.getElementsByClassName('buttons');
    for (let index = 0; index < body.length; index++) {
      body[index].classList.remove('active');      
    }
    var activeButton = document.getElementsByClassName('buttons')[i];
    activeButton.classList.add('active');
    
  }
  
}

