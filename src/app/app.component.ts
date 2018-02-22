import { Component } from '@angular/core';
import { DataService } from './data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public result : Array<any>
  public name : String

  constructor(private dataService : DataService){
    this.onLoad()
  }

 onLoad() {
    this.dataService.getCourse().subscribe(res => {
      console.log(res)
      this.result = res
    })
  }

  onAdd(){
    this.dataService.addCourse(this.name).subscribe(res => {
      console.log(res)
      this.onLoad()
    })
  }

  onDelete(name){
    this.dataService.deleteCourse(name).subscribe(res => {
      console.log(res)
      this.onLoad()
    })
  }



}
