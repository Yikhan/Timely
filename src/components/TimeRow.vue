<template>
  <div class="timePickerBlock">
    <TimePicker v-model="startTime" class="timePicker" format="HH:mm" placeholder="Start time"></TimePicker>   
    <TimePicker v-model="endTime" class="timePicker" format="HH:mm" placement="bottom-end" placeholder="End time"></TimePicker>
  </div>
</template>

<script>
export default {
  name: 'TimeRow',
  props: {

  },
  data () {
    return {
      startTime: '9:00',
      endTime: '17:00'
    }
  },
  computed: {

    
  }
}
</script>

<style lang="stylus" scoped>
  .timePickerBlock
    width 80%
    display flex
    justify-content space-around
    .timePicker
      width 30%
</style>
