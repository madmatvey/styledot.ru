<template>
  <div class="columns">
    <div
      v-for="(messenger, index) in contactsOptions"
      :key="index"
      class="column"
      @click="onClickLink(rep, index)"
    >
      <a :href="messenger.urlLink" @click="onClickLink(messenger.name)">
        <figure class="image is-48x48 mb-2 contactsIcon">
          <img :src="'/images/' + messenger.name.toLowerCase() + '.svg'" />
        </figure>
      </a>
      <div class="block is-size-6 has-text-centered">{{ messenger.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactsOptions: [
        { name: 'Telegram', urlLink: 'https://t.me/styledot_leonteva' },
        { name: 'WhatsApp', urlLink: 'https://wa.me/79277461266' },
        { name: 'Viber', urlLink: 'viber://chat?number=79277461266' },
      ],
    }
  },
  methods: {
    onClickLink(name) {
      this.$ga.event({
        eventCategory: 'Contact Me Link',
        eventAction: 'click',
        eventLabel: name,
        eventValue: 0,
      })
    },
  },
}
</script>

<style>
.contactsIcon {
  justify-content: center;
  margin: auto;
}
</style>
