import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduit } from '../domain/iproduit';
import { ProduitsService } from '../services/produits.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnDestroy {

  data: IProduit[] ;

  constructor(private _service: ProduitsService) { // CONTRUCTION INJECTION et _service est un attribut caché
   }

  ngOnInit() { // s'éxécute apès le constructeur
    // this.data = this._service.getProduits();
    this._service.getProduits().subscribe(
      res => this.data = res,
      erreur => console.log('Attention il y a l\'erreur : ' + erreur));

  }

  ngOnDestroy() {} // s'éxécute avant de détruire l'objet

}
