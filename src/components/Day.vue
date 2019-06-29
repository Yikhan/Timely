<template>
    <div>
        <transition-group name="list">
            <day-row class="list-item"
            v-for="period in periodsOfDay"
            :key="period.index"
            :period="period"
            @addNewPeriod="handleAddNewPeriod"
            @deletePeriod="handleDeletePeriod"
            ></day-row>
        </transition-group>
    </div>
</template>

<script>
import DayRow from './DayRow'
import Period from '@/model/Period'

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
            period.setIndex(++this.id) // 默认行的index为0 不可删除
            data.push(period)
        },
        handleDeletePeriod (index) {
            let data = this.periodsOfDay
            data.splice(data.findIndex(p => p.index === index), 1)
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
