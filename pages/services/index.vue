<template>
  <div class="container is-mobile">
    <div v-for="(service, index) in services" :key="index">
      <div :id="service.slug" class="content is-mobile has-text-centered">
        <a
          class="button is-light mt-2"
          :href="'/services/' + service.slug"
          @click="onClickService(service)"
        >
          {{ service.title }}
        </a>
      </div>
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
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

/* .content ul {
  list-style-type: circle;
} */
</style>
