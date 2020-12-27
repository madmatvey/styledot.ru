<template>
  <div class="container is-mobile">
    <div v-for="(service, index) in services" :key="index">
      <div :id="service.slug" class="content is-mobile has-text-centered">
        <a
          class="button is-light mt-2"
          :href="'/services/#' + service.slug"
          @click="onClickService(service)"
        >
          {{ service.title }}
        </a>
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
      .sortBy('index', 'asc')
      .fetch()

    return {
      services,
      toggle: null,
    }
  },
  mounted() {
    if (this.$route.hash !== '' && this.toggle === null) {
      const serviceSelected = this.services.find(
        (service) => '#' + service.slug === this.$route.hash
      )
      this.onClickService(serviceSelected)
    }
  },
  methods: {
    onClickService(service) {
      if (this.toggle === service.slug) {
        this.toggle = null
      } else {
        this.toggle = service.slug
        this.showService(service)
        this.$scrollTo('#' + service.slug, { offset: -7, force: true })
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
