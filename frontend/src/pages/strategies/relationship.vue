<template>
  <q-page>
    <div class="row col-12">
      <p class="col-12 text-h6 text-center q-mb-md q-mt-sm">
        Asocia la palabra con su significado
      </p>
    </div>

    <div class="row col-12" v-for="(element,index) in elements" :key="element.uuid" >

      <div class="col-4 col-md-2 q-px-md q-py-md">
        <div
          v-ripple
          class="relative-position flex flex-center q-px-md q-pt-md cursor-pointer"
          @mousedown=" statusIMG[index].state != 'FOUND' ?  currentIMG = index : currentIMG "
          @click="playAudio(require(`../../assets/relationship/${element.audio}`), index) "
          :style="statusIMG[index].style"
        >
          <q-img
          :src="require(`../../assets/relationship/${element.image}`)"
            :ratio="4/3"
            spinner-color="primary"
            spinner-size="82px"
            style="max-height: 30vh;"
          />
          <p class="q-mt-sm">{{ element.word }}</p>
        </div>
      </div>

      <div class="col-8 col-md-10 q-px-md q-py-md flex flex-center">
        <div
          v-ripple
          class="relative-position flex q-px-md q-py-md cursor-pointer"
          style="min-height: 100%; min-width: 100%;"
          @click="toggleMeaning(index)"
          @mousedown=" statusMeaning[index].state != 'FOUND' ? currentMeaning = index : currentMeaning  "
          :style="statusMeaning[index].style"
          >
          <div v-html="significados[index].significado"></div>
        </div>
      </div>
    </div>

    <!-- dialog exitoso -->
    <q-dialog
      v-model="fullWidth"
      :maximized="true"
      persistent
      @hide="onDialogHide"
    >
      <q-card :class="$q.dark.isActive ? 'card-theme--dark':'card-theme--light'">

        <q-card-section class="row" :class="$q.dark.isActive ? 'title-theme--dark':'title-theme--light'">
          <div class="text-h6 col-10 text-white">Resultados</div>
          <q-btn flat icon="close" class="col-2 text-white" v-close-popup/>
        </q-card-section>

        <q-card-section>
          <p class="text-h3 text-center q-mt-lg">Felicidades</p>
          <p class="text-h6 text-center q-py-md">Haz completado el ejercicio</p>
          <p class="text-center q-py-md text-bold text-subtitle1"> Tiempo : {{timeUser}} </p>
          <p class="text-center q-py-sm"><b>Respuestas fallidas</b> : {{wrongs}} </p>
          <div class="row justify-center">
            <q-img
            class="col-12 col-md-4"
              src="~/assets/read.svg"
              :ratio="16/9"
              spinner-color="primary"
              spinner-size="82px"
            />
          </div>
          <br/>
          <br/>
          <p class="text-center q-py-lg"> Continua aprendiendo, lo haz hecho muy bien </p>
        </q-card-section>
        <q-card-section class="row justify-center">
          <q-btn
            rounded
            v-close-popup
            :class="$q.dark.isActive ? 'button-theme--dark': 'button-theme--light'"
            size="md"
            label="Aceptar"
          />
        </q-card-section>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted, reactive } from 'vue'
import { useThemeStore } from '../../stores/themes'
import { api } from 'boot/axios'
import { Notify, Dark } from 'quasar'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'strategyRelationship',
  setup () {
    const errorMsg = {
      message: '<b>ERROR: No se puede consultar la información intente más tarde</b>',
      color: 'red',
      icon: 'dangerous',
      html: true
    }
    const router = useRouter()
    const buffer = ref('')

    // Selección de grupo temas
    const groupSelected = ref('')
    const themeStore = useThemeStore()
    groupSelected.value = themeStore.groupSelected || 3

    // Comportamiento reactivos
    const elements = ref([])
    const significados = ref([])

    onMounted(() => {
      const selection = ['AGES', 'TonicaAtona', 'Tritonica']
      // Cargamos los datos
      api.get(`strategy-relationship/elements/${selection[groupSelected.value - 1]}`).then(({ data }) => {
        buffer.value = data.data
        elements.value = buffer.value[0].content
        significados.value = elements.value.map(e => ({ uuid: e.uuid, significado: e.significado })).sort(() => Math.random() - 0.5)
      }).catch((e) => {
        Notify.create(errorMsg)
        router.push({ path: '/themePage' })
      })
      startTime.value = Date.now()
    })

    function playAudio (path, index) {
      const audio = ref(new Audio(path))
      audio.value.currentTime = 0
      audio.value.play()
      toggleIMG(index)
    }

    // SELECTION
    const currentMeaning = ref(null)
    const currentIMG = ref(null)
    // NOTA se puede construir en el mounted los OBJECT statuDs, para obtener el numero de llaves
    const statusMeaning = reactive({
      0: { state: 'NONE', style: 'box-shadow: 0px 1px 5px gray;' },
      1: { state: 'NONE', style: 'box-shadow: 0px 1px 5px gray;' },
      2: { state: 'NONE', style: 'box-shadow: 0px 1px 5px gray;' }
    })

    const statusIMG = reactive({
      0: { state: 'NONE', style: 'box-shadow: 0px 1px 5px gray;' },
      1: { state: 'NONE', style: 'box-shadow: 0px 1px 5px gray;' },
      2: { state: 'NONE', style: 'box-shadow: 0px 1px 5px gray;' }
    })

    function toggleMeaning (index) {
      switch (statusMeaning[index].state) {
        case 'NONE':
          statusMeaning[index].style = 'border: solid 2px #008580;'
          statusMeaning[index].state = 'SELECTED'
          if (currentIMG.value != null) compare()
          else if (currentIMG.value == null) {
            Object.keys(statusMeaning).forEach(e => {
              // eslint-disable-next-line eqeqeq
              if (statusMeaning[e].state != 'FOUND' && currentMeaning.value != e) {
                statusMeaning[e].style = 'box-shadow: 0px 1px 5px gray;'
                statusMeaning[e].state = 'NONE'
              }
            })
          }
          break
        case 'SELECTED':
          if (currentIMG.value == null) {
            Object.keys(statusMeaning).forEach(e => {
              // eslint-disable-next-line eqeqeq
              if (statusMeaning[e].state != 'FOUND' && currentMeaning.value == e) {
                statusMeaning[e].style = 'box-shadow: 0px 1px 5px gray;'
                statusMeaning[e].state = 'NONE'
                currentMeaning.value = null
              }
            })
          }
          break
      }
    }

    function toggleIMG (index) {
      switch (statusIMG[index].state) {
        case 'NONE':
          statusIMG[index].style = 'border: 2px solid #008580;;'
          statusIMG[index].state = 'SELECTED'
          if (currentMeaning.value != null) compare()
          else if (currentMeaning.value == null) {
            Object.keys(statusIMG).forEach(e => {
              // eslint-disable-next-line eqeqeq
              if (statusIMG[e].state != 'FOUND' && currentIMG.value != e) {
                statusIMG[e].style = 'box-shadow: 0px 1px 5px gray;'
                statusIMG[e].state = 'NONE'
              }
            })
          }
          break
        case 'SELECTED':
          if (currentMeaning.value == null) {
            Object.keys(statusIMG).forEach(e => {
              // eslint-disable-next-line eqeqeq
              if (statusIMG[e].state != 'FOUND' && currentIMG.value == e) {
                statusIMG[e].style = 'box-shadow: 0px 1px 5px gray;'
                statusIMG[e].state = 'NONE'
                currentIMG.value = null
              }
            })
          }
          break
      }
    }

    function compare () {
      const meaningValue = significados.value[currentMeaning.value]?.uuid
      const imgValue = elements.value[currentIMG.value]?.uuid

      // eslint-disable-next-line eqeqeq
      if (imgValue == meaningValue) {
        // Se colocan estilos
        statusMeaning[currentMeaning.value].style = 'background-color: rgba(0,0,0,0.1)'
        statusIMG[currentIMG.value].style = 'background-color: rgba(0,0,0,0.1)'
        statusMeaning[currentMeaning.value].state = 'FOUND'
        statusIMG[currentIMG.value].state = 'FOUND'

        Notify.create({
          color: Dark.isActive ? 'indigo' : 'primary',
          html: true,
          position: 'center',
          icon: 'thumb_up',
          timeout: 100
        })
        asserts.value++
        nextExercise()
      }
      // eslint-disable-next-line eqeqeq
      if (imgValue != meaningValue) {
        statusMeaning[currentMeaning.value].style = 'box-shadow: 0px 1px 5px gray;'
        statusIMG[currentIMG.value].style = 'box-shadow: 0px 1px 5px gray;'
        statusMeaning[currentMeaning.value].state = 'NONE'
        statusIMG[currentIMG.value].state = 'NONE'

        Notify.create({
          color: Dark.isActive ? 'accent' : 'negative',
          html: true,
          position: 'center',
          icon: 'mood_bad',
          timeout: 100
        })
        wrongs.value++
      }
      // Se restauran punteros
      currentMeaning.value = null
      currentIMG.value = null
    }

    // Avance  y finalización del juego
    const asserts = ref(0)
    const wrongs = ref(0)
    const currentExercise = ref(0)
    function nextExercise () {
      if (asserts.value === elements.value.length) {
        asserts.value = 0
        if (currentExercise.value >= buffer.value.length - 1) {
          fullWidth.value = true
          endTime.value = Date.now()
          const elapsed = Math.floor((endTime.value - startTime.value) / 1000)
          timeUser.value = `${Math.floor(elapsed / 60)} : ${(elapsed % 60).toString().padStart(2, '0')}`
        } else {
          currentExercise.value++
          // Restaurar todos los elementos al esto inicial
          Object.keys(statusMeaning).forEach(e => {
            statusMeaning[e].style = 'box-shadow: 0px 1px 5px gray;'
            statusMeaning[e].state = 'NONE'
          })
          Object.keys(statusIMG).forEach(e => {
            statusIMG[e].style = 'box-shadow: 0px 1px 5px gray;'
            statusIMG[e].state = 'NONE'
          })
          // Mostrar los nuevos elementos
          elements.value = buffer.value[currentExercise.value].content
          significados.value = elements.value.map(e => ({ uuid: e.uuid, significado: e.significado })).sort(() => Math.random() - 0.5)
        }
      }
    }

    /**
     * DIALOG FINAL
     */
    const fullWidth = ref(false)
    const onDialogHide = () => {
      router.push({ path: '/menuStrategiesPage' })
    }
    const timeUser = ref(null)
    const startTime = ref(null)
    const endTime = ref(null)

    return {
      elements,
      playAudio,
      significados,
      // SELECTION
      currentMeaning,
      currentIMG,
      toggleMeaning,
      toggleIMG,
      statusMeaning,
      statusIMG,
      compare,
      // DIALOG
      fullWidth,
      onDialogHide,
      timeUser,
      wrongs
    }
  }
})
</script>

<style lang="scss" scoped>
.title-theme--dark {
  background-color: #150831 !important;
}
.title-theme--light {
  background-color:$primary;
}
.card-theme--dark{
  background-color: #3C3C58;
}

.card-theme--light{
  background-color: #F6F4FB;
}

.button-theme--dark{
  background-color: #6B6A80;
  color: white;
}

.button-theme--light {
  background-color:$primary;
  color: white;
}

</style>
