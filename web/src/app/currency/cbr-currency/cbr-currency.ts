/**
 * Валюта Банка России
 */
export class CbrCurrency {

  constructor(public id: string,
              public name: string,
              public engName: string,
              public parentCode: string,
              public isoNumCode: string,
              public isoCharCode: string,
              public nominal: number) {
  }

}
