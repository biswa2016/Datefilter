import { Component, OnInit } from '@angular/core';
import {HttpClient}from '@angular/common/http'
import { NgForm } from '@angular/forms';
import { ServiService } from '../services/servi.service';

@Component({
  selector: 'app-stockdata',
  templateUrl: './stockdata.component.html',
  styleUrls: ['./stockdata.component.css']
})
export class StockdataComponent implements OnInit {
  value:any
 val:any
 flag:boolean=false
  constructor(private http:HttpClient, private dat:ServiService) { }

  ngOnInit(): void {

  }

 

  data(){
    this.dat.getData(this.val).subscribe((re)=>{
           console.log(re.data);
           this.value=re.data
           
    })

  }

  onSubmit(form:NgForm){
       console.log(form.value);    
  }

 



}
