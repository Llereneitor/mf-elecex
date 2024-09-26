export interface Facturas {
  commercialInvoiceId: number,
  proveedorName: string,
  initialDate: Date,
  expirationDate: Date,
  timeBetweenPayments: number,
  totalPayments: number,
  totalAmount: number
}
