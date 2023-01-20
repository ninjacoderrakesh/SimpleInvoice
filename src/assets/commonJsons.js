export const bankAccount = [
  {
    bankId: '',
    type: 'number',
    param: 'bankId',
    visible: false,
    placeHolder: 'Enter the Bank Id',
  },
  {
    sortCode: '09-01-01',
    type: 'text',
    param: 'sortCode',
    visible: true,
    placeHolder: 'Enter Sort Code',
  },
  {
    accountNumber: '12345678',
    type: 'text',
    param: 'accountNumber',
    visible: true,
    placeHolder: 'Enter Account Number',
  },
  {
    accountName: 'John Terry',
    type: 'text',
    param: 'accountName',
    visible: true,
    placeHolder: 'Enter Account Name',
  },
];

export const customer = [
  {
    firstName: '',
    type: 'text',
    param: 'firstName',
    visible: true,
    placeHolder: 'Enter Customer First name',
  },
  {
    lastName: '',
    type: 'text',
    param: 'lastName',
    visible: true,
    placeHolder: 'Enter Customer Last name',
  },
];

export const document = [
  {
    documentId: '',
    type: 'text',
    param: 'documentId',
    visible: true,
    placeHolder: 'ID',
  },
  {
    documentName: '',
    type: 'text',
    param: 'documentName',
    visible: true,
    placeHolder: 'Name',
  },
  {
    documentUrl: '',
    type: 'text',
    param: 'documentUrl',
    visible: true,
    placeHolder: 'URL',
  },
];

export const bill = [
  {
    invoiceReference: '',
    type: 'text',
    param: 'invoiceReference',
    visible: true,
    placeHolder: 'Invoice Reference',
  },
  {
    invoiceNumber: '',
    type: 'text',
    param: 'invoiceNumber',
    visible: true,
    placeHolder: 'Invoice Number',
  },
  {
    currency: '',
    type: 'text',
    param: 'currency',
    visible: true,
    placeHolder: 'Enter Currency Code',
  },
  {
    dueDate: '',
    type: 'datePicker',
    param: 'dueDate',
    visible: true,
    placeHolder: 'Select dueDate',
  },
  {
    description: '',
    type: 'text',
    param: 'description',
    visible: true,
    placeHolder: 'Enter description',
  },
];

export const item = [
  {
    itemReference: '',
    type: 'text',
    param: 'itemReference',
    visible: true,
    placeHolder: 'Reference',
  },
  {
    description: '',
    type: 'text',
    param: 'description',
    visible: true,
    placeHolder: 'Item Description',
  },
  {
    quantity: '',
    type: 'number',
    param: 'quantity',
    visible: true,
    placeHolder: 'Number Of Quantity',
  },
  {
    rate: '',
    type: 'number',
    param: 'rate',
    visible: true,
    placeHolder: 'Rate',
  },
  {
    itemName: '',
    type: 'text',
    param: 'itemName',
    visible: true,
    placeHolder: 'Item Name',
  },
  {
    itemUOM: '',
    type: 'text',
    param: 'itemUOM',
    visible: true,
    placeHolder: 'Item UOM',
  },
];

export let dummyInvoiceData = [
  {
    id: 1,
    customer: {
      firstName: 'Nguyen',
      lastName: 'Dung 2',
      contact: {
        email: 'nguyendung2@101digital.io',
        mobileNumber: '+6597594971',
      },
    },
    invoiceReference: '#123456',
    invoiceNumber: 'INV123456701',
    currency: 'GBP',
    invoiceDate: '2021-05-27',
    dueDate: '2021-06-04',
    items: [
      {
        itemReference: 'itemRef',
        description: 'Honda RC150',
        quantity: 1,
        rate: 1000,
        itemName: 'Honda Motor',
        itemUOM: 'KG',
      },
    ],
  },
  {
    id: 2,
    customer: {
      firstName: 'John',
      lastName: 'Doe',
      contact: {
        email: 'nguyendung2@101digital.io',
        mobileNumber: '+6597594971',
      },
    },
    invoiceReference: '#123456',
    invoiceNumber: 'INV123438829',
    currency: 'GBP',
    invoiceDate: '2021-05-27',
    dueDate: '2021-06-07',
    items: [
      {
        itemReference: 'itemRef',
        description: 'Honda RC150',
        quantity: 1,
        rate: 1000,
        itemName: 'Honda Motor',
        itemUOM: 'KG',
      },
      {
        itemReference: 'itemRef',
        description: 'Honda RC150',
        quantity: 1,
        rate: 1000,
        itemName: 'Honda Motor',
        itemUOM: 'KG',
      },
    ],
  },
  {
    id: 3,
    customer: {
      firstName: 'Test',
      lastName: 'User',
      contact: {
        email: 'nguyendung2@101digital.io',
        mobileNumber: '+6597594971',
      },
    },
    invoiceReference: '#123456',
    invoiceNumber: 'INV123456701',
    currency: 'GBP',
    invoiceDate: '2021-05-27',
    dueDate: '2021-06-04',
    items: [
      {
        itemReference: 'itemRef',
        description: 'Honda RC150',
        quantity: 1,
        rate: 1000,
        itemName: 'Honda Motor',
        itemUOM: 'KG',
      },
    ],
  },
  {
    id: 4,
    customer: {
      firstName: 'Nguyen',
      lastName: 'D',
      contact: {
        email: 'nguyendung2@101digital.io',
        mobileNumber: '+6597594971',
      },
    },
    invoiceReference: '#123456',
    invoiceNumber: 'INV123456701',
    currency: 'GBP',
    invoiceDate: '2021-05-27',
    dueDate: '2021-06-04',
    items: [
      {
        itemReference: 'itemRef',
        description: 'Honda RC150',
        quantity: 1,
        rate: 1000,
        itemName: 'Honda Motor',
        itemUOM: 'KG',
      },
    ],
  },
];
