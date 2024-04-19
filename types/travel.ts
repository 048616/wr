export class Travel  {
  uid: string;
  title: string; 
  country: string; 
  start: string;
  end: string;
  description: string;
  pictureUrl: string;
  price: number;
  rating: number;


  constructor() {
    this.uid = "";
    this.title = ""; 
    this.country = "";
    this.start = "";
    this.end = "";
    this.description = "";
    this.pictureUrl = "";
    this.price = 0
    this.rating = 0
  }
}
