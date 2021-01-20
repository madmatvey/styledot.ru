<template>
  <div class="container is-mobile">
    <div :id="service.slug" class="content is-mobile has-text-centered">
      <h2 class="title is-4">
        {{ service.title }}
      </h2>
      <div class="has-text-left">
        <h2 class="subtitle is-6">
          {{ service.description }}
        </h2>
        <service :document="service" />
        <div class="pb-3 pt-1 has-text-centered">
          <span class="tag is-light is-medium">↘️ Записывайтесь ↙️</span>
        </div>
        <Contacts />
        <div class="pb-3 pt-1 has-text-centered">
          <a class="button is-light mb-7 mt-4" :href="'/services/'"> Назад </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const service = await $content('services', params.slug)
      .sortBy('index', 'asc')
      .fetch()

    return {
      service,
    }
  },
}
</script>
<style>
.container {
  margin: 20px 20px 20px 20px;
  min-height: 10vh;
}
</style>
