<template>
  <div class="widget">
    <div class="switchBlock">
      <Switch class="switch" size="large" v-show="defaultRow">
        <span slot="open">{{currentDay}}</span>
        <span slot="close">{{currentDay}}</span>
      </Switch>
    </div>
    <div class="timeBlock">
      <time-row></time-row>
    </div>
    <div class="buttonBlock">
      <Button size="small" type="success" icon="ios-time">new</Button>
      <Button size="small" type="error" icon="md-trash">del</Button>
    </div>
  </div>
</template>

<script>
import TimeRow from './TimeRow'
export default {
  name: 'DayRow',
  components: {
    TimeRow
  },
  props: {
    currentDay: String,
    defaultRow: Boolean
  },
  data () {
    return {
     
    }
  }
}
</script>

<style lang="stylus" scoped>
  .widget
    margin-top 20px
    display flex
    justify-content center
    align-items center
    .switchBlock
      width 10vw
      display flex
      justify-content center
    .timeBlock
      width 30vw
      display flex
      justify-content center
    .buttonBlock
      width 12vw
      display flex
      justify-content space-around

</style>
