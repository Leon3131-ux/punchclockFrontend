import { Component, OnInit } from '@angular/core';
import {Entry} from "../../models/entry";
import {EntryService} from "../../services/entry.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  constructor(
    private entryService: EntryService,
    public authService: AuthService
  ) { }

  public entries: Entry[] = [];
  public showEditEntryDialog: boolean = false;

  ngOnInit(): void {
    this.entryService.getEntries().subscribe(entries => {
      this.entries = entries;
    })
  }

  public editEntry(entry: Entry){
    this.entryService.updateEditEntry(new Entry(entry.id, entry.checkIn, entry.checkOut));
    this.showEditEntryDialog = true;
  }

  public deleteEntry(entry: Entry){
    this.entryService.deleteEntry(entry).subscribe(()=>{
      this.entries.splice(this.entries.indexOf(entry), 1);
    });
  }

}
