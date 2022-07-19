import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PokemonDetails } from '../models/pokemon.details';
import { PokemonList } from '../models/pokemon.list';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2/'

  constructor(private http : HttpClient) { }

  getPokemonList(offset: number, limit: number = 20): Observable<PokemonList[]>{
    return this.http.get<PokemonList[]>(this.apiUrl + 'pokemon?offset=' + offset + '&limit=' + limit)
        .pipe(
            map((x: any) => x.results)
        );
  }

  getPokemonDetail(pokemon: number | string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(this.apiUrl + 'pokemon/' + pokemon);
  }

}
