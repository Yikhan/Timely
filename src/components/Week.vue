<template>
    <div>
        <day
          v-for="item in weekDays" :key="item"
          :currentDay="item"         
        >
        </day>
    </div>
</template>

<script>
import Day from './Day'

export default {
    name: "Week",
    components: {
        Day
    },
    props: {
       
    },
    data () {
        return {
            weekDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            dataOfDays: {}
        }
    },
    methods: {

    }
}
</script>

<style lang="stylus" scoped>

</style>
