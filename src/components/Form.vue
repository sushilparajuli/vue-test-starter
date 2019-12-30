<template>
    <form name="email-form" @submit="onSubmit">
        <input type="email" v-model="email" />
        <button type="submit">Submit </button>
    </form>
</template>

<script>
export default {
    data: () => ({
        email: null
    }),
    methods: {
        onSubmit (event) { 
            this.axios.post('http://demo7437963.mockable.io/validate', { 
            email: this.email
        })
        this.$emit('form-submitted')
        }
    }
}
</script>
