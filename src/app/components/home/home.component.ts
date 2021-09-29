import { Component, OnInit } from '@angular/core';
import {EntryService} from "../../services/entry.service";
import {Entry} from "../../models/entry";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private entryService: EntryService) { }

  currentEntry: Entry = new Entry();

  ngOnInit(): void {
    this.entryService.getEntries().subscribe(entries => {
      if(entries[0]){
        this.currentEntry = new Entry(
          entries[0].id,
          entries[0].checkIn,
          entries[0].checkOut
        );
      }
      if(this.isToday(this.currentEntry.checkIn) || this.isToday(this.currentEntry.checkOut)){
        this.entryService.editEntry(this.currentEntry);
      }
    })
  }

  private isToday (someDate: Date | null) {
    if(someDate == null){
      return true
    }
    const today = new Date()
    return someDate.getDate() == today.getDate() &&
      someDate.getMonth() == today.getMonth() &&
      someDate.getFullYear() == today.getFullYear()
  }


}
