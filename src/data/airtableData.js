import apiKeys from './apiKeys.json'

const apiKey = apiKeys.airtableConfig.apiKey
const tableIds = apiKeys.airtableConfig.tableIds

// Airtable package setup for TN Volunteer Tracking table

const Airtable = require('airtable');
const base = new Airtable({ apiKey: apiKey }).base(
    tableIds.tnVolunteerTracking
);

// Declaring the table we want to view, API Test

const table = base('API Test');

// Sample call fetching the first ten records from Table: TN Volunteer "Tracking," Base: "API Test," View: "Grid view"

const getVolunteerTracking = async () => {
    const records = await table
        .select({ maxRecords: 10, view: 'Grid view' })
        .firstPage();
    console.log(records);
};

// Sample call fetching a record by ID from Table: TN Volunteer "Tracking," Base: "API Test"

const getRecordById = async (id) => {
    const record = await table.find(id);
    console.log(record);
};

export default { getVolunteerTracking, getRecordById }