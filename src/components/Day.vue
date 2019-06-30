<template>
    <div>
        <transition-group name="list">
            <day-row class="list-item"
            v-for="period in periodsOfDay"
            :key="period.index"
            :period="period"
            v-show="!period.hide"
            @addNewPeriod="handleAddNewPeriod"
            @deletePeriod="handleDeletePeriod"
            @changeRowStatus="handleChangeRowStatus"
            @validate="validate"
            ></day-row>
        </transition-group>
    </div>
</template>

<script>
import DayRow from './DayRow'
import Period from '@/model/Period'
import Validator from '@/validation/validator'

export default {
    name: "Day",
    components: {
        DayRow
    },

    props: {
        currentDay: String
    },

    data () {
        return {
            periodsOfDay: [],
            id: 0
        }
    },

    methods: {
        handleAddNewPeriod () {
            let data = this.periodsOfDay
            let period = new Period(this.currentDay, false)
            // index of default row is 0, which can not be deleted
            period.setIndex(++this.id)
            data.push(period)
        },
        handleDeletePeriod (index) {
            let data = this.periodsOfDay
            data.splice(data.findIndex(p => p.index === index), 1)
        },
        handleChangeRowStatus (status) {
            // mute the widget (all periods of that day) if the switch is off
            if (!status) {
                this.periodsOfDay.forEach( p => {
                    if (!p.defaultRow) p.hide = true
                })
            } else {
                this.periodsOfDay.forEach( p => {
                    if (!p.defaultRow) p.hide = false
                })
            }
        },
        validate (period) {
            try {
                period.errorList = []
                Validator.validate(period)
                Validator.overlapCheck(period, this.periodsOfDay)
            } 
            catch (e) {
                this.$Notice.error({
                    title: 'Error',
                    desc: e.error
                })
            }
        }
    },
    
    mounted () {
        this.periodsOfDay.push(new Period(this.currentDay, true))
    }

}
</script>

<style lang="stylus" scoped>
.list-item 
  transition all 0.5s
.list-enter, .list-leave-to
  opacity 0
  transform translateX(10px)
</style>
