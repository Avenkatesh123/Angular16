import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit{
  constructor(public http:HttpClient) {

  }
//  public parentData = "https://dummyjson.com/products"
 public childData =""
 public userList:any = []
 ngOnInit(): void {
   this.getData()
 }
 productList:any = [];
 getData():void {
  this.http.get('https://dummyjson.com/products').subscribe((data:any)=>{
    this.productList = data.products ? data.products : []
    console.log(this.productList)
  },err=>{},()=>{})
 }
}
