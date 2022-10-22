import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Personne } from 'src/app/model/Personne';
@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css'],
})
export class InfoFormComponent implements OnInit {
  formGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group(new Personne());
  }

  ngOnInit(): void {}
  onSubmit(formData: any) {
    var name = formData['name'];
    console.log(name);
  }
}
