<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">Алина Леонтьева</h1>
      <h2 class="subtitle mb-7">персональный стилист</h2>
      <a class="button is-light mb-7" :href="'/services/'"> Услуги </a>
      <Contacts class="mt-3" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 10 10 10 10;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 150;
  font-size: 2.5em;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 100;
  font-size: 2em;
  color: #526488;
  word-spacing: 5px;
}
</style>
