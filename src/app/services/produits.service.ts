import { Injectable } from '@angular/core';
import { IProduit } from '../domain/iproduit';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  URL =  'http://localhost:8080/produits/';
  constructor(private _http: HttpClient) { }

  getProduits(): Observable<IProduit[]> {
      return this._http.get<IProduit[]>(this.URL);
  }

  getProduitById(id: string): Observable<IProduit> {
    return this._http.get<IProduit>(this.URL + id);
  }

  addProduit(produit: IProduit): Observable<any> {
    return this._http.post(this.URL, produit);
  }
}
