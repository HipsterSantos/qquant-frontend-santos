import { Component, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';
import { HttpreqService } from './httpreq.service';
import { DataManagerService } from './datamanager.service';
import { Forums } from './forums.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild('modal', {static: true}) modal: ElementRef;
  title = 'ng-qquant-table';
  initData: Forums[] = this.datamanager.getList();
  limitedArray:any[]= [];
  singleData: any;
  toSearch: string;
  unhide: boolean = true;
  limite = 10;


  constructor(private httpSerice: HttpreqService,
              private r2: Renderer2,
              private datamanager: DataManagerService){
              this.datamanager.fetchForumsData().subscribe(data=>{
                for(let i=0; i<=this.limite;i++){
                  this.limitedArray.push( this.initData[i]);
                }
                this.initData = this.limitedArray;
               console.log('init',this.limitedArray)
              })

  }
  previousElement(){
    this.limite -= this.limite;
    for(let i=this.limite; i<=this.limite;i++){
      this.limitedArray.push( this.initData[i]);
    }
    this.initData = this.limitedArray;
  }
  nextElement(){
    this.limite += this.limite;
    for(let i=0; i<=this.limite;i++){
      this.limitedArray.push( this.initData[i]);
    }
    this.initData = this.limitedArray;
  }
  ngOnInit(){

  }

   autoSearch(){

   }

  showInfo(i: Forums){
    this.singleData = {...i};
    this.unhide = false;
    console.log(this.singleData)
    this.r2.setStyle(this.modal.nativeElement, 'top', '19em');

  }
  desapear(){
    this.r2.setStyle(this.modal.nativeElement, 'top', '-40em');
  }

  fillModalWithData(data: Forums){

  }


}
