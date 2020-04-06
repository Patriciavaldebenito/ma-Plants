import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { MyValidator } from './../../../util/validators';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-entry-form',
  templateUrl: './product-entry-form.component.html',
  styleUrls: ['./product-entry-form.component.scss']
})
export class ProductEntryFormComponent implements OnInit {
  form: FormGroup;
  image$: Observable<any>;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

   saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productService.createProduct(product)
      .subscribe(newProduct => {
        console.log(`newProduct ${JSON.stringify(newProduct)}`);
        this.router.navigate(['/admin/products']);
      });
    }

  }

  uploadFile(event) {
    const file = event.target.files[0];
    console.log(file);
    const name = 'image.png';
    // referencia
    const fileRef = this.storage.ref(name);
    // crear tarea - subir imagen
    const task = this.storage.upload(name, file);

    task.snapshotChanges()
    .pipe(
      finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
           this.form.get('image').setValue(url);
           console.log(url);
        });
      })
    ).subscribe();

  }

  private buildForm() {
     this.form = this.formBuilder.group({
       id: ['', [Validators.required]],
       title: ['', [Validators.required]],
       price: [0, [Validators.required, MyValidator.isPriceValid]],
       image: '',
       description: ['', [Validators.required]]
     });
  }

  get priceField() {
    return this.form.get('price');
  }

}
