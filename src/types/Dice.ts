class Dice {
    count: number
    mod: number

    constructor(count = 0, mod = 0) {
        this.count = count
        this.mod = mod
    }

    private getCountString(): string {
        if (this.count != 0) {
            return `${this.count}d`
        }
        return ""
    }

    private getModString(): string {
        if (this.mod != 0) {
            const signString = (this.mod > 0) ? "+" : ""
            return signString + this.mod.toString()
        }
        return ""
    }

    toString(): string {
        return this.getCountString() + this.getModString()
    }
}

export default Dice
