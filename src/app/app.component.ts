import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
//import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { StructuralDirComponent } from './component/directive/structural-dir/structural-dir.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StructuralDirComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_application';
}
