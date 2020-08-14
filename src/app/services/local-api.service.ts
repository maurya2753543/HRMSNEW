import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TIMESHEET, TIMESHEET_APPROVAL, TIMESHEET_REQUEST } from '../data/localApi/timesheet';
import { EMPLOYEES } from '../data/localApi/employee';
import { CLIENTS } from '../data/localApi/client';
import { PROJECTS } from '../data/localApi/project';
import { USERS } from '../data/localApi/user';
import { ORGS } from '../data/localApi/org';
import { INDUSTRIES } from '../data/industries.data';
import { COUNTRIES } from '../data/countries.data';

@Injectable({
  providedIn: 'root'
})
export class LocalApiService implements InMemoryDbService {
  createDb() {

    const timesheet = TIMESHEET;

    const approvalTimesheet = TIMESHEET_APPROVAL;

    const employee = EMPLOYEES;

    const client = CLIENTS;

    const project = PROJECTS;

    const timesheetRequest = TIMESHEET_REQUEST;

    const user = USERS;

    const orgs = ORGS;

    const industries = INDUSTRIES;

    const countries = COUNTRIES;

    return { 
      timesheet, 
      approvalTimesheet, 
      employee, 
      client, 
      project, 
      timesheetRequest, 
      user, 
      orgs, 
      industries,
      countries
    };
  }
}
