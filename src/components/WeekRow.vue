<template>
    <div>
        <day-row
          v-for="item in WeekDays" :key="item"
          :currentDay="item"
          :defaultRow="true"
        >
        </day-row>
    </div>
</template>

<script>
import DayRow from './DayRow'

export default {
    name: "WeekRow",
    components: {
        DayRow
    },
    props: {
       
    },
    data () {
        return {
            WeekDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            dataOfDays: {}
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
