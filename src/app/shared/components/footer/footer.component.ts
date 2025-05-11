import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-footer',
  imports: [FloatLabelModule, ButtonModule, InputTextModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {

}
