import { Component, OnInit } from '@angular/core';
import { RootService } from './root.service';

@Component({
  selector: 'root-module',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  constructor(private rootService : RootService) { }

  ngOnInit(): void {
    console.log('here1');
    this.rootService.getAPIData().subscribe((response)=>{
        console.log('here2');
        console.log('response is ', response)
    },(error) => {
        console.log('here3');
        console.log('error is ', error)
    });
    this.rootService.postAPIData().subscribe((response)=>{
        console.log('here2');
        console.log('response is ', response)
    },(error) => {
        console.log('here3');
        console.log('error is ', error)
    })
  }

}
