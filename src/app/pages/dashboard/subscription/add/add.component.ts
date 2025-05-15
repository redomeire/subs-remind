import { Component } from '@angular/core';
import { DashboardComponent as DashboadLayout } from '../../../../shared/components/layouts/dashboard/dashboard.component';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-add',
  imports: [
    DashboadLayout,
    InputTextModule,
    InputNumberModule,
    FloatLabelModule,
    ReactiveFormsModule,
    SelectModule,
    DatePickerModule,
    TextareaModule,
    ButtonModule,
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  billingCycle: Record<string, string>[] = [
    {
      label: 'Weekly',
      value: 'weekly',
    },
    {
      label: 'Monthly',
      value: 'monthly',
    },
    {
      label: 'Yearly',
      value: 'yearly',
    },
  ];
  subscriptionForm: FormGroup = new FormGroup({
    platform_name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    amount: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(100000),
    ]),
    billing_cycle: new FormControl('', [Validators.required]),  
    billing_date: new FormControl('', [Validators.required]),
    description: new FormControl(''),
  });
  onSubmit() {
    console.log(this.subscriptionForm.value);
  }
}
