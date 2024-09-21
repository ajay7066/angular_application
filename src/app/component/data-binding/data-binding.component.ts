import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  //data types in typescript
  // string, number , boolean, date
  courseName : string = "Angular 18";
  input = "checkbox";
  RollNumber:number = 123;
  stateName = "Goa";
  IsIndian : boolean = true;

  currentDate: Date = new Date();
  firstName = signal("Ajay Muthal");
  
  constructor(){

  }

  changeCourseName(){
    this.courseName = "React JS";
    this.firstName.set("Ratan Tata  ");  
  }

  showAlert(message: string){
    alert(message)
  }

}
