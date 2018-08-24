<template>
  <div id="app" class="wrapper">
    <Section title="ACTIVE">
      <Task title="ACTIVEタスク一覧">
        ACTIVEタスク一覧を表示させる。ACTIVEタスク一覧を表示させる。ACTIVEタスク一覧を表示させる。ACTIVEタスク一覧を表示させる。
      </Task>
      <Task title="DONEタスク一覧">
        DONEタスク一覧を表示させる。DONEタスク一覧を表示させる。DONEタスク一覧を表示させる。DONEタスク一覧を表示させる。DONEタスク一覧を表示させる。
      </Task>
    </Section>
    <Section title="DONE"></Section>
  </div>
</template>

<script>
import Section from './components/Section';
import Task from './components/Task';

export default {
  name: 'app',
  components: {
      Section,
      Task
  }
}
</script>

<style lang="scss">
#app {

}
</style>
