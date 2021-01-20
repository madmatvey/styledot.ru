<template>
  <div class="columns is-mobile">
    <div
      v-for="(messenger, index) in contactsOptions"
      :key="index"
      class="column is-one-third-mobile is-flex has-text-centered contactsIcon"
      @click="onClickLink(rep, index)"
    >
      <a :href="messenger.urlLink" @click="onClickLink(messenger.name)">
        <figure class="image is-48x48 mb-2">
          <img :src="'/images/' + messenger.name.toLowerCase() + '.svg'" />
          <div class="is-size-7 has-text-centered">{{ messenger.name }}</div>
        </figure>
      </a>
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
}
</style>
