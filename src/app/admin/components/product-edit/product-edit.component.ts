import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Router , ActivatedRoute, Params } from '@angular/router';
import { MyValidator } from 'src/app/util/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  form: FormGroup;
  id: string;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params ) => {
    this.id = params.id;
    this.productService.getProduct(this.id)
    .subscribe(product => {
      this.form.patchValue(product);
    });
    });
  }
   private buildForm() {
     this.form = this.formBuilder.group({
       title: ['', [Validators.required]],
       price: [0, [Validators.required, MyValidator.isPriceValid]],
       image: '',
       description: ['', [Validators.required]]
     });
   }

   saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productService.updateProduct(this.id, product)
      .subscribe(newProduct => {
        console.log(`newProduct ${JSON.stringify(newProduct)}`);
        this.router.navigate(['/admin/products']);
      });
    }

  }

  get priceField() {
    return this.form.get('price');
  }


}
