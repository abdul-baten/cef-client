import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDropdown } from 'src/app/models';

@Component({
  selector: 'app-details',
  styleUrls: ['./details.component.scss'],
  templateUrl: './details.component.html'
})
export class DetailsComponent {
  public color: IDropdown[];
  public detailsForm: FormGroup;
  public formClicked = false;
  public size: IDropdown[];

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      console.error(param.get('id'));
    });

    this.detailsForm = this.buildDetailsForm();

    this.color = [
      {
        name: 'White',
        value: 'white'
      }
    ];

    this.size = [
      {
        name: 'Medium',
        value: 'medium'
      },
      {
        name: 'Large',
        value: 'large'
      }
    ];
  }

  private buildDetailsForm(): FormGroup {
    return this.formBuilder.group({
      color: ['', Validators.required],
      quantity: [1, Validators.required],
      size: ['', Validators.required]
    });
  }

  public addCart(): void {
    const { color, quantity, size } = this.detailsForm.value;

    console.error(color, quantity, size);
  }
}
