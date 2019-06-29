<template>
  <div class="widget">
    <div class="switchBlock">
      <Switch class="switch" size="large" :value="true"
      v-show="period.defaultRow">
        <span slot="open">{{period.currentDay}}</span>
        <span slot="close">{{period.currentDay}}</span>
      </Switch>
    </div>
    <div class="timeBlock">       
      <TimePicker v-model="period.startTime" class="timePicker" format="HH:mm" placeholder="Start time"></TimePicker>   
      <TimePicker v-model="period.endTime" class="timePicker" format="HH:mm" placement="bottom-end" placeholder="End time"></TimePicker>
    </div>
    <div class="buttonBlock">
      <Button size="small" type="success" icon="ios-time" 
      v-show="period.defaultRow" 
      @click="addNewPeriod">new</Button>

      <Button size="small" type="error" icon="md-trash" 
      v-show="!period.defaultRow" 
      @click="deletePeriod">del</Button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DayRow',

  props: {
    period: {
      type: Object,
      required: true
    }
  
  },

  data () {
    return {

    }
  },

  methods: {
    addNewPeriod () {
      this.$emit('addNewPeriod')
    },
    deletePeriod () {
      this.$emit('deletePeriod', this.period.index)
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
      justify-content space-around
      .timePicker
        width 40%
    .buttonBlock
      width 12vw
      display flex
      justify-content space-around

</style>
