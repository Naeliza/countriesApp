import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); 
  //Para cuando la persona deja de escribir se disparara este evento

  @Input() placeholder: string = '';
  
  debouncer: Subject<string> = new Subject();

  search: string = '';


  ngOnInit() {
    this.debouncer
    .pipe(
      debounceTime(300))
    .subscribe(value =>
      {
        //console.log('debouncer', value);
        this.onDebounce.emit(value);
      });
  }

  Search() {
    this.onEnter.emit(this.search);
  }

  keyPress()
  {
    /* Esto seria si mandaramos el event 
    const value = event.target.value;
    console.log(value);
    console.log(this.search);*/

    this.debouncer.next( this.search);
  }
  
}
