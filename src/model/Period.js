class Period {
    constructor (currentDay, defaultRow) {
        this.index = 0,
        this.startTime = '9:00',
        this.endTime = '17:00',
        this.currentDay = currentDay,
        this.defaultRow = defaultRow
    }

    setIndex (index) {
        this.index = index
    }

    setTime(startTime, endTime) {
        this.startTime = startTime,
        this.endTime = endTime
    }
}

export default Period