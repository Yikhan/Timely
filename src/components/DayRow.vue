<template>
  <div class="widget">
    <Row type="flex" justify="center">
      <Col span="6">
        <Switch class="switch" size="large">
          <span slot="open">Mon</span>
          <span slot="close">Mon</span>
        </Switch>
      </Col>
      <Col span="8">
        <time-row></time-row>
        <Button size="small" type="success" icon="ios-time">new</Button>
        <Button size="small" type="error" icon="md-trash">delete</Button>
      </Col>
    </Row>
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

  },
  data () {
    return {
     
    }
  }
}
</script>

<style lang="stylus" scoped>


</style>
