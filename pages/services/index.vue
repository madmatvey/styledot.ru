<template>
  <div class="container">
    <div v-for="(service, index) in services" :key="index">
      <div class="content is-mobile has-text-centered">
        <button class="button is-light" @click="onClickService(service)">
          {{ service.title }}
        </button>
        <div v-show="showService(service)" class="box has-text-left">
          <h2 class="subtitle is-6">
            {{ service.description }}
          </h2>
          <service :document="service" />
          <div class="pb-3 pt-1 has-text-centered">
            <span class="tag is-light">↘️ Записывайся ↙️</span>
          </div>
          <Contacts />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const services = await $content('services', params.slug)
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      services,
      toggle: null,
    }
  },
  methods: {
    onClickService(service) {
      if (this.toggle === service.slug) {
        this.toggle = null
      } else {
        this.toggle = service.slug
      }
      this.$ga.event({
        eventCategory: 'About Service',
        eventAction: 'click',
        eventLabel: service.slug,
        eventValue: 0,
      })
    },
    showService(service) {
      if (this.toggle === service.slug) {
        return true
      } else {
        return false
      }
    },
  },
}
</script>

<style>
.container {
  margin: 20px 20px 20px 20px;
  min-height: 100vh;
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
</style>
