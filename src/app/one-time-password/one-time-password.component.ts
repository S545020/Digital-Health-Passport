import { Component, OnInit,ViewChildren  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-one-time-password',
  templateUrl: './one-time-password.component.html',
  styleUrls: ['./one-time-password.component.css']
})
export class OneTimePasswordComponent implements OnInit {
  form: FormGroup;
  formInput = ['input1', 'input2', 'input3', 'input4'];
@ViewChildren('formRow') rows: any;

  constructor() { 
    this.form = this.toFormGroup(this.formInput);
    
  }

  keyUpEvent(event:any, index:any) {
    let pos = index;
    if (event.keyCode === 8 && event.which === 8) {
     pos = index - 1 ;
    } else {
     pos = index + 1 ;
    }
    if (pos > -1 && pos < this.formInput.length ) {
     this.rows._results[pos].nativeElement.focus();
    }
   }

   onSubmit(){
    console.log('formvalue',this.form.value);
   }

  toFormGroup(elements: any) {
    const group: any = {};
    elements.forEach((key: any) => {
      group[key] = new FormControl('', Validators.required);
    });
    return new FormGroup(group);
   }

 

  ngOnInit(): void {
  }

}
