import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-mat-project';

  public name: string;
  public address: string;
  public userList: any[];
  public count = 0;
  public index = 0;
  public edited: boolean = false;

  public displayedColumns: string[] = ['No.', 'Name', 'Address', 'Actions'];
  public dataSource: any = [];

  clearAll() {
    this.name = '';
    this.address = '';
  }

  submitAll() {
    let object: any = {};
    if(this.name != '' && this.address != '') {
      object.name = this.name;
      object.address = this.address;
      if(this.edited) {
        object.no = this.index + 1;
        this.userList[this.index] = object;
        this.edited = false;
      } else {
        this.count = this.count + 1;
        object.no = this.count;
        this.userList.push(object);
      }
      this.dataSource = new MatTableDataSource(this.userList);
    }
    console.log(this.dataSource);
  }

  onEdit(ele: any) {
    let object: any = {};
    this.index = ele.no - 1;
    object = this.userList[this.index];
    this.name = object.name;
    this.address = object.address;
    this.edited = true;
  }

  onDelete(ele: any) {
    this.index = this.userList.indexOf(ele);
    this.userList.splice(this.index, 1);
    this.dataSource = new MatTableDataSource(this.userList);
  }
}
