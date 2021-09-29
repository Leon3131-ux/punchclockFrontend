import {EventEmitter, Injectable, Output} from '@angular/core';
import {Observable} from "rxjs";
import {ApiService} from "./api.service";
import {Entry} from "../models/entry";

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private apiService: ApiService) { }

  @Output() entryEditEmitter: EventEmitter<Entry> = new EventEmitter();

  public getEntries(): Observable<any>{
    return this.apiService.getAll('/entries');
  }

  public createEntry(entry: Entry): Observable<any>{
    entry = this.updateEntryDates(entry);
    return this.apiService.postSingle('/entry', entry);
  }

  public updateEntry(entry: Entry): Observable<any>{
    entry = this.updateEntryDates(entry);
    return this.apiService.putSingle('/entry', entry);
  }

  public deleteEntry(entry: Entry): Observable<any>{
    return this.apiService.deleteSingle('/entry/' + entry.id);
  }

  public editEntry(entry: Entry): void{
    this.entryEditEmitter.emit(entry);
  }

  private updateEntryDates(entry: Entry): Entry{
    if(entry.checkIn != null){
      let userTimezoneOffset = entry.checkIn.getTimezoneOffset() * 60000;
      entry.checkIn = new Date(entry.checkIn.getTime() - userTimezoneOffset);
    }
    if(entry.checkOut != null) {
      let userTimezoneOffset = entry.checkOut.getTimezoneOffset() * 60000;
      entry.checkOut = new Date(entry.checkOut.getTime() - userTimezoneOffset);
    }
    return entry;
  }



}
