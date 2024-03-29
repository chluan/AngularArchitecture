import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlItem } from '@app/model/frontend';
import { regex, regexErrors } from '@app/shared/utils';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
  form: FormGroup;
  isInline : boolean;
  regexErrors = regexErrors;

  items: ControlItem[];

  constructor(private fb: FormBuilder) { 
    this.isInline = true;
    this.items = [
      {label: 'First', value: 1},
      {label: 'Second', value: 1},
      {label: 'Third', value: 1},
      {label: 'Fourth', value: 1},
      {label: 'Firth', value: 1}
    ]
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(regex.email)
        ]
      }],
      password: [null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.pattern(regex.password)
        ]
      }],
      select: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }],
      checkboxes: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }]
    })
  }

  onSubmit(): void {
    console.log('Submit')
  }

  onPatchValue(): void {
    this.form.patchValue( {input: 'test'} );
  }

  onToggleInline() : void {
    this.isInline = !this.isInline;
  }

}
