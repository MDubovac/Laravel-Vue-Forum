<template>
    <v-form @submit.prevent="login"> 

        <v-text-field
            label="E-mail"
            v-model="form.email"
            type="email"
            required
        ></v-text-field>

        <v-text-field
            label="Password"
            v-model="form.password"
            type="password"
            required
        ></v-text-field>

        <v-btn
            color="blue"
            type="submit"
            style="color:white"
        >Login</v-btn>
    </v-form>
</template>

<script>
    export default {
        data(){
            return {
                form: {
                    email: null,
                    password: null
                }
            }
        },
        methods: {
            login(){
               User.login(this.form)
            }
        }
    }
</script>
