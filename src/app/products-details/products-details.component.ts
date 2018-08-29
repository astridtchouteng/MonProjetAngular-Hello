import { Component, OnInit } from '@angular/core';
import { IProduit } from '../domain/iproduit';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { ProduitsService } from '../services/produits.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  produit: IProduit ;

  code: string;

  constructor(private _route: ActivatedRoute, private _router: Router,
                      private _service: ProduitsService) { } // DI ... _route = new SomethingThatImplementsActivatedRoute

  ngOnInit() {
    /*
      En faisant un snapshot il est impossible de continuer la route
      raison pour laquelle il faut un observable
    */
    // this.code = this._route.snapshot.paramMap.get('id');

    this._route.paramMap.subscribe( res => this.code = res.get('id'));
    this._service.getProduitById(this.code).subscribe( res => this.produit = res);
  }

  // It is advised to unsubcribe in ngOnDestroy()

  navigateToList() {
      this._router.navigate(['/list']);
  }

}
