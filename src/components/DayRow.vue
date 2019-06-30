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
      @on-open-change="triggerValidation"
      ></TimePicker>   
      
      <TimePicker class="timePicker" format="HH:mm" placement="bottom-end" placeholder="End time"
      v-model="period.endTime" 
      :disabled="muted"
      @on-open-change="triggerValidation"
      ></TimePicker>
      <span class="alert"><Icon type="md-alert" size="15" v-show="!errorStatus" /></span>
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

  computed: {
    errorStatus: function () {
      return this.period.errorList.length === 0
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
    },
    triggerValidation (status) {
        if (!status) { // if date picker is on blur 
          this.$emit('validate', this.period)
        }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .widget
    margin 2vh 15vh 0 15vh
    display flex
    justify-content center
    align-items center
    .switchBlock
      width 10vw
      display flex
      justify-content center
    .switch.ivu-switch-checked
      border-color green
      background-color green        
    .timeBlock
      width 30vw
      display flex
      justify-content space-around
      .timePicker
        width 40%
      .alert
        width 15px
        color red
    .buttonBlock
      width 8vw
      display flex
      justify-content space-around

</style>
