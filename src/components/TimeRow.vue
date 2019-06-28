<template>
  <div class="widget">
    <div class="timePickerBlock">
      <TimePicker v-model="startTime" class="timePicker" format="HH:mm" placeholder="Start time"></TimePicker>
    </div>
    <div class="timePickerBlock">
      <TimePicker v-model="endTime" class="timePicker" format="HH:mm" placement="bottom-end" placeholder="End time"></TimePicker>
    </div>
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
  .widget

  .timePickerBlock
    display inline-block
    margin 0 10px

    
  .timePicker
    width 100px

</style>
