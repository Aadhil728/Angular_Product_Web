import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';


  constructor(){}


  ngOnInit(){}

  url1:string = "../assets/product1.jpg"
  url2:string = "../assets/product2.jpg"
  url3:string = "../assets/product3.jpg"
  url4:string = "../assets/product4.jpg"



  changeImage1(event:any){
    this.url1 = event.target.src;
  }

    changeImage2(event:any){
      this.url2 = event.target.src;
    }

    changeImage3(event:any){
      this.url3 = event.target.src;
    }

    changeImage4(event:any){
      this.url3 = event.target.src;
    }
}
