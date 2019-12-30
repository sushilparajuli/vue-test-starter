<template>
 <Modal
      v-if="displayModal"
      @close-modal="closeModal"
    >
      <Form v-on:form-submitted="closeModal" />
    </Modal>
</template>

<script>
import Form from './components/Form'
import Modal from './components/Modal'
export default {
  name: 'App',
  data: () => ({
    displayModal: true
  }),
  components: {
    Form,
    Modal
  },
  methods: {
    closeModal () {
      this.displayModal = false
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
