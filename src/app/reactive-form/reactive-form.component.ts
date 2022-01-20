import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  // public formData: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   age: new FormControl(''),  
  // });
  public formData  = this.formBuilder.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
  });

  constructor(private common: CommonService, private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
  }
  public onSubmit(): void {
    // console.log('submit form: formData=' ,   this.formData.value);
    this.common.submitData(this.formData.value);
  }


}
