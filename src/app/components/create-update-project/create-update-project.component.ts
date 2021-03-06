import { Component, OnInit, Input } from '@angular/core';
import { ExchangeDataService } from 'src/app/services/exchange-data.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-create-update-project',
  templateUrl: './create-update-project.component.html',
  styleUrls: ['./create-update-project.component.scss']
})
export class CreateUpdateProjectComponent implements OnInit {

  context: any;

  constructor(
    private exchangeData: ExchangeDataService,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private snackBar: MatSnackBar,
    private loader: LoadingService
  ) { }

  @Input() data: any; 
  
  empImage: any;
  form: FormGroup;
  public submitted = false; 
  
  option: '';
  projectcontext = {
    client: "client",
    project: "project",     
    user: "user"
   
  };

 

  ngOnInit(): void {
 
    this.initFormGroup();   
    this.loadOrgData();
    
  } 
  
  loadOrgData() {
    if(this.data.action == 'update') {
      let formObj: any = {};
      for(let prop in this.form.value) {
        formObj[prop] = this.data.formData[prop];
        console.log(this.data);
      }
      this.form.setValue(formObj);
      console.log(this.form);
    }
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
  onSubmit(){
    if(this.form.invalid){
      return;
    }
    this.submitted = true;
    this.loader.show();
    console.log(this.data);

    if(this.data.action == 'create') {
      this.createEmp();
    } else {
      this.updateEmp();
    }
  }
  createEmp() {
    let formData = {
      ...this.form.value,
      clientLogo: "assets/images/ps-logo-icon.svg", 
      logoIcon: "assets/images/ps-logo-icon.svg",   
      noOfEmployee: 0,
      
    }

    this.dataService.saveData(this.projectcontext.client, formData).subscribe((res) => {
      if(res){
        this.snackBar.open(`"${res.name}" Employee created successfully.`, "Ok", {
          duration: 4000,
        });
        this.close(res);
      }
      this.loader.hide();
    });
  }
  
  updateEmp() {
    let formData = {
      ...this.data.formData,
      ...this.form.value
    }

    let url = `${this.projectcontext.client}/${formData.id}`;
    this.dataService.updateData(url, formData).subscribe((res) => {
      this.snackBar.open(`"${formData.name}" Employee updated successfully.`, "Ok", {
        duration: 4000,
      });
      this.close(formData);
      this.loader.hide();
    });
  }

  initFormGroup(){
    this.form = this.formBuilder.group({
      name:['', [Validators.required]],
      client: ['', [Validators.required]],
      totalEmployee: ['', [Validators.required]],
      progress: ['', [Validators.required]],
      status: ['', [Validators.required]],     
      duration: ['', [Validators.required]],
    
     
    });
  }
  
  hasError(formName: string, errorName: string){
    return this.form.controls[formName].hasError(errorName);
  }


}
