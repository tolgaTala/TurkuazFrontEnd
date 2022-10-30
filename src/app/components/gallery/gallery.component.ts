import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gallery:any = document.querySelector('#gallery');
  constructor() { }

  ngOnInit(): void {
    this.gallery.querySelectorAll('img').forEach(function (item) {
      item.classList.add('byebye');
      if (item.complete) {
          console.log(item.src);
      }
      else {
          item.addEventListener('load', function () {
              var altura = this.getValue(this.gallery, 'grid-auto-rows');
              var gap = this.getValue(this.gallery, 'grid-row-gap');
              var gitem = item.parentElement.parentElement;
              gitem.style.gridRowEnd = "span " + Math.ceil((this.getHeight(gitem) + gap) / (altura + gap));
              item.classList.remove('byebye');
          });
      }
  });
  window.addEventListener('resize', this.resizeAll);
  this.gallery.querySelectorAll('.gallery-item').forEach(function (item) {
      item.addEventListener('click', function () {        
          item.classList.toggle('full');        
      });
  });
  }
  
  getValue(elem:any, style:any){
    return parseInt(window.getComputedStyle(elem).getPropertyValue(style));
  }
  getHeight(item:any){
    return item.querySelector('.content').getBoundingClientRect().height;
  }
  resizeAll(){
    var altura = this.getValue(this.gallery, 'grid-auto-rows');
        var gap = this.getValue(this.gallery, 'grid-row-gap');
        this.gallery.querySelectorAll('.gallery-item').forEach(function (item) {
            var el = item;
            el.style.gridRowEnd = "span " + Math.ceil((this.getHeight(item) + gap) / (altura + gap));
        });
  }
    
    
    
}
