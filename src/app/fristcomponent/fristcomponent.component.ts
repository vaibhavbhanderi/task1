import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-fristcomponent',
  templateUrl: './fristcomponent.component.html',
  styleUrls: ['./fristcomponent.component.css']
})

export class FristcomponentComponent {
@Input() mydata:any
}
