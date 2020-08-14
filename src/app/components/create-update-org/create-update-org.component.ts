import { Component, OnInit, Input } from '@angular/core';
import { ExchangeDataService } from 'src/app/services/exchange-data.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-create-update-org',
  templateUrl: './create-update-org.component.html',
  styleUrls: ['./create-update-org.component.scss']
})
export class CreateUpdateOrgComponent implements OnInit {

  constructor(
    private exchangeData: ExchangeDataService,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private snackBar: MatSnackBar,
    private loader: LoadingService
  ) { }

  @Input() data: any;
  public Editor = ClassicEditor;

  editorConfig = {
    placeholder: 'Enter about organization...',
    height: '500px'
  };

  form: FormGroup;
  public submitted = false;
  context = {
    orgs: "orgs",
    industries: "industries",
    countries: "countries"
  };

  orgLogo: any;
  orgLogoIcon: any;
  countries: any[];
  industries: any[];
  filteredIndustries: Observable<string[]>;
  filteredCountries: Observable<string[]>;
  logoValidationErrorMsg: string;
  logoIconValidationErrorMsg: string;

  ngOnInit(): void {
    this.initFormGroup();
    this.getIndustries();
    this.getCountries();
    this.loadOrgData();
  }

  
  loadOrgData() {
    if(this.data.action == 'update') {
      let formObj: any = {};
      for(let prop in this.form.value) {
        formObj[prop] = this.data.formData[prop];
     
      }
      this.form.setValue(formObj);
    }
  }

  getIndustries() {
    this.dataService.getData(this.context.industries).subscribe((res) => {
      if(res) {
        this.industries = res;
        this.initAutocomplete('filteredIndustries', 'industry', 'industries');
      }
    })
  }

  getCountries() {
    this.dataService.getData(this.context.countries).subscribe((res) => {
      if(res) {
        this.countries = res;
        this.initAutocomplete('filteredCountries', 'country', 'countries');
      }
    });
  }

  initAutocomplete(filterVar: string, controlName: string, filterListVar: string) {
    this[filterVar] = this.form.controls[controlName].valueChanges
      .pipe(
        startWith(''),
        map((value:any) => this._filter(filterListVar, value))
      );
  }

  private _filter(filterListVar: string, value: string): string[] {
    const filterValue = value.toLowerCase();

    return this[filterListVar].filter(option => (option.name.toLowerCase().includes(filterValue) || option.name.includes("Other")));
  }

  initFormGroup(){
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      industry: ['', [Validators.required]],
      website: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
      country: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  hasError(formName: string, errorName: string){
    return this.form.controls[formName].hasError(errorName);
  }

  // convenience getter for easy access to form fields
  get field() { return this.form.controls; }

  onSubmit(){
    if(this.form.invalid){
      return;
    }
    this.submitted = true;
    this.loader.show();

    if(this.data.action == 'create') {
      this.createOrg();
    } else {
      this.updateOrg();
    }
  }

  createOrg() {
    let formData = {
      ...this.form.value,
      logo: "assets/images/ps-logo.svg",
      logoIcon: "assets/images/ps-logo-icon.svg",
      noOfEmployee: 0,
    }

    this.dataService.saveData(this.context.orgs, formData).subscribe((res) => {
      if(res){
        this.snackBar.open(`"${res.name}" organization created successfully.`, "Ok", {
          duration: 4000,
        });
        this.close(res);
      }
      this.loader.hide();
    });
  }

  updateOrg() {
    let formData = {
      ...this.data.formData,
      ...this.form.value
    }

    let url = `${this.context.orgs}/${formData.id}`;
    this.dataService.updateData(url, formData).subscribe((res) => {
      this.snackBar.open(`"${formData.name}" organization updated successfully.`, "Ok", {
        duration: 4000,
      });
      this.close(formData);
      this.loader.hide();
    });
  }

  onLogoSelect(event: any, logoVarRef: string, errorMsgVarRef: string){
    if(event.target.files.length > 0 && this.validateImage(event.target.files,logoVarRef,errorMsgVarRef)){
      this[logoVarRef] = event.target.files[0];
    }
  }

  validateImage(imageFile: any, logoVarRef: string, errorMsgVarRef: string) {
    let validExtension = ['png', 'svg']
    let imageSplit = imageFile[0].name.split('.');
    let extension = imageSplit[imageSplit.length-1];
    if(validExtension.indexOf(extension) >= 0) {
      this[errorMsgVarRef] = '';
      return true;
    } else {
      this[logoVarRef] = '';
      this[errorMsgVarRef] = `Uploaded logo image with ."${extension}" extension is not accepted. Please upload a valid image with ".png" or ".svg" extension.`;
      return false;
    }
  }

  close(returnData?: any) {
    let sidePanelData: any;
    this.exchangeData.sidePanel.subscribe(data => {
      if(data) {
        sidePanelData = data;
      }
    });

    let sidePanelObj: any = {
      isOpen: false,
      width: sidePanelData.width,
    }

    if(returnData) {
      sidePanelObj.componentData = returnData;
    }

    if(returnData && this.data.action) {
      sidePanelObj.componentData.action = this.data.action;
    }

    this.exchangeData.setSidePanel(sidePanelObj);
  }

}
