<template>
  <q-btn
    class="button-option q-py-sm q-pr-lg"
    :class="$q.dark.isActive ? 'button-option--dark' : 'button-option--light'"
    push
  >
    <div class="row items-center no-wrap">

      <Icon
        class="q-mr-sm"
        :icon="icon"
        :color="$q.dark.isActive ? '#f7f7f7':'#151635'"
        width="64"
        height="64"
      />

      <div>
        <p class="inline text-left text-weight-bold text-body1 top paragraph">
          {{ textTop }}
        </p>
        <p class="inline text-left text-weight-medium text-body2 bottom paragraph">
          {{  textBottom }}
        </p>
      </div>

    </div>
  </q-btn>
</template>

<script>
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'

export default defineComponent({
  name: 'ButtonOption',
  props: ['icon', 'textTop', 'textBottom'],
  components: {
    Icon
  },
  setup (props) {}
})
</script>

<style lang="scss" scoped>
.button-option {
  box-sizing: content-box;
}

.paragraph {
  padding: 0;
  margin: 0;
}

.button-option--dark {
  background-color: #6A6D80 !important;
  .top{
    color: #f7f7f7;
  }
  .bottom{
    color: #cfcece;
  }
}

.button-option--light {
  background-color: #f7f7f7 !important;
  .top{
    color: #151635;
  }
  .bottom{
    color: #5b5c64;
  }
}

</style>
