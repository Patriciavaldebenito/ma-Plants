import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params ) => {
      const id = params.id;
      console.log(id);
      this.fetchProduct(id);
      // this.product = this.productService.getProduct(id);
      // console.log(this.product);
    });
  }

  fetchProduct( id: string) {
    this.productService.getProduct(id)
    .subscribe( product => {
      this.product = product;
      console.log(product);
    });
  }
  createProduct() {
    const newProduct: Product = {
      id: '222',
      title : 'nuevo dsd angular',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'nuevp prod 1'
    };
    this.productService.createProduct(newProduct)
    .subscribe(product => {
    console.log(product);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 1000,
      description: 'edition 1'
    };
    this.productService.updateProduct('100', updateProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct() {
    this.productService.deleteProduct('zzz')
    .subscribe(rta => {
     console.log(rta);
    });
  }
}
