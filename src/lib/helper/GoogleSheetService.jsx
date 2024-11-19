import { GoogleSpreadsheet } from 'google-spreadsheet';

const SPREADSHEET_ID = import.meta.env.REACT_APP_SPREADSHEET_ID;
const CLIENT_EMAIL = import.meta.env.REACT_APP_CLIENT_EMAIL;
const PRIVATE_KEY = import.meta.env.REACT_APP_PRIVATE_KEY;

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

export const initializeSheet = async () => {
  await doc.useServiceAccountAuth({
    client_email: CLIENT_EMAIL,
    private_key: PRIVATE_KEY,
  });
  await doc.loadInfo(); // loads document properties and worksheets
};

export const getRows = async (sheetIndex = 0) => {
  await initializeSheet();
  const sheet = doc.sheetsByIndex[sheetIndex];
  const rows = await sheet.getRows();
  return rows;
};

export const addRow = async (data, sheetIndex = 0) => {
  await initializeSheet();
  const sheet = doc.sheetsByIndex[sheetIndex];
  await sheet.addRow(data);
};

export const updateRow = async (rowIndex, data, sheetIndex = 0) => {
  await initializeSheet();
  const sheet = doc.sheetsByIndex[sheetIndex];
  const row = await sheet.getRows();
  Object.assign(row[rowIndex], data);
  await row[rowIndex].save();
};

export const deleteRow = async (rowIndex, sheetIndex = 0) => {
  await initializeSheet();
  const sheet = doc.sheetsByIndex[sheetIndex];
  const row = await sheet.getRows();
  await row[rowIndex].delete();
};