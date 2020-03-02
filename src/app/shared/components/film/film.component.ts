import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  constructor() { }
  // declaramos la propiedad/campo film en la clase
  // public data: any = {
  //   name: 'Spectre 009',
  //   gender: 'Ejl',
  //   // tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:max-line-length
  //   image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM2Nzg4MzkwOF5BMl5BanBnXkFtZTgwNzA0OTE3NjE@._V1_UX182_CR0,0,182,268_AL_.jpg',
  //   imdbUrl: 'http://www.imdb.com/title/tt2379713/',
  // };

  @Input() public data: any;
  @Input() public isEven: boolean;
  public isDisabled = true;
  public color = 'red';
  @Output() public remove = new EventEmitter();

  ngOnInit(): void {
    console.log(`La peli ${this.data.name} es ${this.isEven ? 'par' : 'impar'}`);
    if (!this.isEven) {
      this.color = '#fff';
    }
  }
  public eliminarFilm() {
    this.remove.emit(this.data);
  }
}
