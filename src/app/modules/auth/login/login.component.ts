import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { ExchangeDataService } from 'src/app/services/exchange-data.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router, 
    private dataService: DataService,
    private exchangeData: ExchangeDataService,
    private loader: LoadingService
  ) {
    this.exchangeData.setViewState('');
  }

  loginForm: FormGroup;
  public submitted = false;
  usersObj:any;
  backgroundClasses = ['bg-theme-1', 'bg-theme-2', 'bg-theme-3', 'bg-theme-4'];
  randomNumber: number;

  ngOnInit(): void {
    this.initForm();
    this.loadUser();
    this.setRandomNumber();
  }

  ngOnDestroy(){
    this.loader.show();
  }

  setRandomNumber() {
    this.randomNumber = Math.floor(Math.random() * 4);
  }

  hasError(formName: string, errorName: string){
    return this.loginForm.controls[formName].hasError(errorName);
  }

  // convenience getter for easy access to form fields
  get field() { return this.loginForm.controls; }

  onSubmit(){
    if(this.loginForm.invalid){ 
      return;
    }
    this.login();
  }

  login(){
    this.submitted = true;
    let formData = this.loginForm.value;
    // this.dataService.setLocalStorageObj({ user: formData });
    this.router.navigate(['/home']);
  }

  loadUser(){
    this.dataService.getData('user').subscribe((res) => {
      this.loader.hide();
      if(res) {
        this.usersObj = res;
      }
    })
  }

  initForm(){
    this.loginForm = this.formBuilder.group({
      userData: ['', [Validators.required]],
      password: ['', [Validators.required]],
      //role: ['', [Validators.required]]
    });
  }

}
