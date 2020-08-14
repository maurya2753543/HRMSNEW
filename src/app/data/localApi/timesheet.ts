import { EMPLOYEES } from './employee';

export const TIMESHEET = [
    {
        id: 9,
        date: "Thursday, 13 May 2020",
        project: "MHK Admin App",
        activity: "Completed the Python script to generate the image data, Checked-in the script to bitbucket.",
        totalHour: "8 Hours",
        status: "Submitted",
        remarks: ""
    },
    {
        id: 8,
        date: "Tuesday, 12 May 2020",
        project: "MHK Admin App",
        activity: "Completed the Python script to generate the image data, Checked-in the script to bitbucket.",
        totalHour: "8 Hours",
        status: "Rejected",
        remarks: "Please change 8 hours to 6 hours"
    },
    {
        id: 7,
        date: "Monday, 11 May 2020",
        project: "MHK Admin App",
        activity: "Completed the Python script to generate the image data, Checked-in the script to bitbucket.",
        totalHour: "8 Hours",
        status: "Approved",
        remarks: "Done"
    }
];

export const TIMESHEET_APPROVAL = [
    {
        id: 9,
        date: "Thursday, 13 May 2020",
        project: "MHK Admin App",
        activity: "Completed the Python script to generate the image data, Checked-in the script to bitbucket.",
        totalHour: "8 Hours",
        status: "Pending",
        billingStatus: "Billable",
        remarks: ""
    },
    {
        id: 8,
        date: "Tuesday, 12 May 2020",
        project: "MHK Admin App",
        activity: "Completed the Python script to generate the image data, Checked-in the script to bitbucket.",
        totalHour: "8 Hours",
        status: "Rejected",
        billingStatus: "Committed Buffer",
        remarks: "Please change 8 hours to 6 hours"
    },
    {
        id: 7,
        date: "Monday, 11 May 2020",
        project: "MHK Admin App",
        activity: "Completed the Python script to generate the image data, Checked-in the script to bitbucket.",
        totalHour: "8 Hours",
        status: "Approved",
        billingStatus: "Non Billable",
        remarks: "Done"
    }
];

export const TIMESHEET_REQUEST = [
    {
        hoursApproved: 120,
        requestPending: 10,
        billingStatus: "Non Billable",
        ...EMPLOYEES[1]
    },
    {
        hoursApproved: 80,
        requestPending: 4,
        billingStatus: "Billable",
        ...EMPLOYEES[4]
    },
    {
        hoursApproved: 96,
        requestPending: 6,
        billingStatus: "Commited Buffer",
        ...EMPLOYEES[5]
    }
];