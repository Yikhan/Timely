import Moment from 'moment'
import Error from '@/model/Error'

export default {
    validate (period) {
        // check if both time parameters exist
        this.periodCheck (period)

        let startTime = Moment(period.startTime, 'HH:mm')
        let endTime = Moment(period.endTime, 'HH:mm')

        // rule 1. the endTime should not be earlier than startTime
        if (endTime.isSameOrBefore(startTime)) {
            const error = 'Start time should not be later than end time'
            period.errorList.push(new Error(
                period.index, 
                error    
            ))
        }
        // rule 2. the endTime should be at least 1 hour from startTime
        else if (Moment.duration(endTime.diff(startTime)).get('h') < 1) {
            const error = 'End time should be at least 1 hour from start time'
            period.errorList.push(new Error(
                period.index, 
                error    
            ))
        }        
    },

    overlapCheck (period, periodList) {
        // check if both time parameters exist
        this.periodCheck (period)

        if (!Array.isArray(periodList)) {
            throw {
                error: 'Period list must be in form of Array'
            }
        }

        let startTime = Moment(period.startTime, 'HH:mm')
        let endTime = Moment(period.endTime, 'HH:mm')

        periodList.filter( other => other.index != period.index).forEach( other => {
            // check if both time parameters exist
            this.periodCheck(other)

            let otherStartTime = Moment(other.startTime, 'HH:mm')
            let otherEndTime = Moment(other.endTime, 'HH:mm')

            if (startTime.isSameOrBefore(otherEndTime) || endTime.isSameOrAfter(otherStartTime)) {
                const error = 'Overlap found, you may consider merge two periods'
                period.errorList.push(new Error(
                    period.index, 
                    error    
                ))
            }
        })
    },

    periodCheck (period) {
        if (!period.startTime || !period.endTime) {
            const error = 'Invalid period object without start time or end time'
            period.errorList.push(new Error(
                period.index, 
                error    
            ))
        }
    }
}