import { Component, EventEmitter, Input, Output, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit{
  constructor(public http:HttpClient) {

  }
@Input({required:true})  pParentPostMan: any = []
@Output() public cData = new EventEmitter<any>();
ngOnInit(): void {
  // this.onClick();
  // this.getData();
  this.getUserData()
  
}
// productList:any = [];
//  getData():void {
//   this.http.get('https://dummyjson.com/products').subscribe((data:any)=>{
//     this.productList = data.products ? data.products : []
//     console.log(this.productList)
//   },err=>{},()=>{})
//  }

userList:any =[];
getUserData(){
  this.http.get('https://dummyjson.com/users').subscribe((userData:any)=>{
    this.userList = userData.users ? userData.users :[]
    console.log(this.userList)
  },err=>{},()=>{})
}

 onClick(){
  this.cData.emit(this.userList)
 }

}
