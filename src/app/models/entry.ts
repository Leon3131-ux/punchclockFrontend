export class Entry {

  id: number;
  checkIn: any;
  checkOut: any;

  constructor(id = 0, checkIn = null, checkOut = null) {
    this.id = id;
    // @ts-ignore
    this.checkIn = checkIn ? (new Date(checkIn)) : null;
    // @ts-ignore
    this.checkOut = checkOut ? (new Date(checkOut)) : null;
  }


}
