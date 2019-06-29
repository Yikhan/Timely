<template>
    <div>
        <day-row
        v-for="(period, index) in periodsOfDay"
        :key="index"
        :period="period"
        @addNewPeriod="handleAddNewPeriod"
        @deletePeriod="handleDeletePeriod"
        ></day-row>
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
            let period = new Period(false)
            period.index = ++this.id // 默认行的index为0 不可删除
            data.push(period)
        },
        handleDeletePeriod (index) {
            let data = this.periodsOfDay
            data.splice(data.findIndex(p => p.index === index), 1)
        }
    },

    mounted () {
        this.periodsOfDay.push(new Period(true))
    }

}
</script>

<style lang="stylus" scoped>

</style>
