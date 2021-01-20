<template>
  <div class="container has-text-centered">
    <h1 class="title is-capitalized">Услуги</h1>
    <div v-for="(service, index) in services" :key="index" class="mt-3 mb-3">
      <a
        class="is-light"
        :href="'/services/' + service.slug"
        @click="onClickService(service)"
      >
        <div class="card">
          <div class="card-image mt-2">
            <figure class="image is-64x64 mx-auto">
              <img
                :src="'/images/' + service.slug + '.svg'"
                :alt="service.title"
              />
            </figure>
          </div>
          <div class="card-content has-text-centered">
            <p>
              <strong>{{ service.title }}</strong>
              <br />
              {{ service.description }}
            </p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const services = await $content('services', params.slug)
      .sortBy('index', 'asc')
      .fetch()

    return {
      services,
    }
  },
  methods: {
    onClickService(service) {
      this.$ga.event({
        eventCategory: 'About Service',
        eventAction: 'click',
        eventLabel: service.slug,
        eventValue: 0,
      })
    },
  },
}
</script>

<style>
.container {
  margin: 20px 20px 20px 20px;
  min-height: 10vh;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
</style>
