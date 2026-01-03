class Range {
  private min: number | undefined = undefined
  private max: number | undefined = undefined

  constructor (number?: number  ) {
    if (number !== undefined) {
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
    if (this.min === undefined || this.max === undefined) {
      return '-'
    } else if (this.min === this.max) {
      return this.min.toString()
    } else {
      return `${this.min.toString()}-${this.max.toString()}`
    }
  }
}

export default Range
