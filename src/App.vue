<template>
  <div id="app" class="wrapper">
    <Section title="ACTIVE"></Section>
    <Section title="DONE"></Section>
  </div>
</template>

<script>
import Section from './components/Section';

export default {
  name: 'app',
  components: {
      Section
  }
}
</script>

<style lang="scss">
#app {

}
</style>
