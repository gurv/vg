/**
 * Валюта в стандарте ISO 4217
 */
export class Iso4217Currency {

  constructor(public alphabeticCode: string,
              public numericCode: string,
              public name: string) {
  }

}
