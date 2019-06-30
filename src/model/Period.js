class Period {
    constructor (currentDay, defaultRow) {
        this.index = 0,
        this.startTime = '9:00',
        this.endTime = '17:00',
        this.currentDay = currentDay || 'Mon'
        this.defaultRow = defaultRow && true
        this.hide = false
    }

    setIndex (index) {
        this.index = index
    }

    setTime (startTime, endTime) {
        this.startTime = startTime,
        this.endTime = endTime
    }
}

export default Period