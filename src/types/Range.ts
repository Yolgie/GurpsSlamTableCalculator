class Range {
  min: number | undefined = undefined
  max: number | undefined = undefined

  constructor (number: number | undefined = undefined) {
    if (number != undefined) {
      this.min = number
      this.max = number
    }
  }

  expandTo (number: number): void {
    if (this.max === undefined || number > this.max) {
      this.max = number
    }
    if (this.min === undefined || number < this.min) {
      this.min = number
    }
  }

  toString (): string {
    if (this.min === undefined) {
      return '-'
    } else if (this.min === this.max) {
      return this.min.toString()
    } else {
      return `${this.min}-${this.max}`
    }
  }
}

export default Range
