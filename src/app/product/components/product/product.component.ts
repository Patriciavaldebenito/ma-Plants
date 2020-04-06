import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Product } from '../../../product.model';
import { CartService } from 'src/app/core/services/cart/cart.service';
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})

export class ProductComponent implements  OnInit, DoCheck, OnDestroy  {
    @Input() product: Product; // recibe una propiedad desde otro componente
    @Output() productClicked: EventEmitter<any> = new EventEmitter();
    today = new Date();
    constructor( private carservice: CartService
    ) {
        // aqui es donde se contruye nuestro componente
        console.log('1.  constructor');
    }

    // ngOnChanges(changes: SimpleChanges) {
    //     console.log('2. ngOnChanges');
    //     console.log(changes);
    // }

    ngOnInit() {
        console.log('3. ngOnInit');
    }

    ngDoCheck() {
        console.log('3. ngDoCkeck');
    }

    ngOnDestroy() {
        console.log('3. ngOnDestroy');
    }


    addToCart() {
        console.log('anadir al carro');
        this.carservice.addCart(this.product);
        this.productClicked.emit(this.product.id); // (aqui va el valor de type declarado)
    }
}
