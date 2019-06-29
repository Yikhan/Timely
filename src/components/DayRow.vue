<template>
  <div class="widget">
    <div class="switchBlock">
      <Switch class="switch" size="large" 
      :value="true"
      v-show="period.defaultRow"
      @on-change="changeRowStatus">
        <span slot="open">{{period.currentDay}}</span>
        <span slot="close">{{period.currentDay}}</span>
      </Switch>
    </div>

    <div class="timeBlock">       
      <TimePicker class="timePicker" format="HH:mm" placeholder="Start time"
      v-model="period.startTime"
      :disabled="muted"
      ></TimePicker>   
      
      <TimePicker class="timePicker" format="HH:mm" placement="bottom-end" placeholder="End time"
      v-model="period.endTime" 
      :disabled="muted"
      ></TimePicker>
    </div>

    <div class="buttonBlock">
      <Button size="small" type="success" icon="ios-time" 
      v-show="period.defaultRow" 
      :disabled="muted"
      @click="addNewPeriod"
      >new</Button>

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
      muted: false
    }
  },

  methods: {
    addNewPeriod () {
      this.$emit('addNewPeriod')
    },
    deletePeriod () {
      this.$emit('deletePeriod', this.period.index)
    },
    changeRowStatus (status) {
      // send event to parent component to hide rows added by user on this day if switched off
      this.$emit('changeRowStatus', status)
      // mute other parts of the widget or activate them
      this.muted = !status
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
