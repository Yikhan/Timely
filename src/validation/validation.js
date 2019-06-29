import Moment from 'moment'

export default {
    validate (period) {
        // check if both time parameters exist
        if (!period.startTime || !period.endTime) {
            throw 'Invalid Period object without start time or end time'
        }

        let startTime = Moment(period.startTime, 'HH:mm')
        let endTime = Moment(period.endTime, 'HH:mm')

        // rule 1. the endTime should not be earlier than startTime
        if (endTime.isSameOrBefore(startTime)) {
            throw 'Start time should not be later than end time'
        }
        // rule 2. the endTime should be at least 1 hour from startTime
        else if (Moment.duration(endTime.diff(startTime)).get('h') < 1) {
            throw 'End time should be at least 1 hour from start time'
        }
        
    }
}