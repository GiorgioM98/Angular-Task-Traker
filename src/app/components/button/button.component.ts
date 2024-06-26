import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

 @Input() text!: string;
 @Input() color!: string;
 @Output()  btnClick= new EventEmitter();


 ngOnInit(): void {
 }

 onClick(){
  this.btnClick.emit();
 }

}
