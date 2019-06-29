import Moment from 'moment'

export default {
    validate (period) {
        // check if both time parameters exist
        this.periodCheck (period)

        let startTime = Moment(period.startTime, 'HH:mm')
        let endTime = Moment(period.endTime, 'HH:mm')

        // rule 1. the endTime should not be earlier than startTime
        if (endTime.isSameOrBefore(startTime)) {
            throw {
                error: 'Start time should not be later than end time'
            }
        }
        // rule 2. the endTime should be at least 1 hour from startTime
        else if (Moment.duration(endTime.diff(startTime)).get('h') < 1) {
            throw {
                error: 'End time should be at least 1 hour from start time'
            }
        }        
    },

    overlapCheck (period, periodList) {
        // check if both time parameters exist
        this.periodCheck (period)

        if (!Array.isArray(periodList)) {
            throw {
                error: 'period list must be in form of Array'
            }
        }

        let startTime = Moment(period.startTime, 'HH:mm')
        let endTime = Moment(period.endTime, 'HH:mm')

        periodList.forEach( (other) => {
            // check if both time parameters exist
            this.periodCheck(other)

            let otherStartTime = Moment(other.startTime, 'HH:mm')
            let otherEndTime = Moment(other.endTime, 'HH:mm')

            if (startTime.isSameOrBefore(otherEndTime) || endTime.isSameOrAfter(otherStartTime)) {
                throw {
                    error: 'Overlap found, you may consider merge two periods',
                    index: other.index
                }
            }
        })
    },

    periodCheck (period) {
        if (!period.startTime || !period.endTime) {
            throw {
                error: 'Invalid period object without start time or end time'
            }
        }
    }
}