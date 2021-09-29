import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Entry} from "../../models/entry";
import {EntryService} from "../../services/entry.service";

@Component({
  selector: 'app-entry-save',
  templateUrl: './entry-save.component.html',
  styleUrls: ['./entry-save.component.css']
})
export class EntrySaveComponent implements OnInit {

  constructor(private entryService: EntryService) {
    this.entryService.entryEditEmitter.subscribe(entry => {
      this.currentEntry = entry;
      this.updateForm();
    })
  }

 currentEntry: Entry = new Entry();

  public entrySaveForm = new FormGroup({
    id: new FormControl(),
    checkIn: new FormControl(),
    checkOut: new FormControl()
  })

  ngOnInit(): void {
    this.entrySaveForm.patchValue(this.currentEntry);
  }

  public submitEntry(): void{
    if(this.currentEntry.id == null || this.currentEntry.id == 0){
      this.createNewEntry();
    }else{
      this.updateEntry();
    }
  }

  private createNewEntry(){
    this.entryService.createEntry(this.entrySaveForm.getRawValue()).subscribe((entry) => {
      this.currentEntry = entry;
      this.updateForm();
    })
  }

  private updateEntry(){
    this.entryService.updateEntry(this.entrySaveForm.getRawValue()).subscribe((entry) => {
      this.currentEntry = new Entry(entry.id, entry.checkIn, entry.checkOut);
      this.updateForm();
    })
  }

  private updateForm(){
    this.entrySaveForm.patchValue(this.currentEntry);
  }

}
