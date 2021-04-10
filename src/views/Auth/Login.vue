<template>
    <form @submit.prevent="Login">
        <input class="input" type="email" placeholder="E-Mail" v-model="form.email" required>
        <input class="input" type="password" placeholder="Password" v-model="form.password" required>
        <div class="checkbox">
        <!-- <input id="check" type="checkbox">
        <label for="check">Remember Me</label> -->
        <br>
        <div class="error">
            <p v-if="isUnauthorized">Invalid email or password</p>
        </div>
        </div>
        <input type="submit" value="Login">
        <hr>
        <button type="button" class="button" @click="startRegister">Create new account</button>
    </form>
    <div class="register" v-if="register">
        <Register @stop="startRegister" />
    </div>
</template>

<script>
import Register from './Register.vue'
import { mapActions } from 'vuex'

export default {
    components: {
        Register
    },
    data() {
        return {
            form: {
                email: '',
                password: '',
                remember: false,
            },
            register: false,
            isUnauthorized: false,
        }
    },
    methods: {
        ...mapActions({
            signIn: 'auth/signIn'
        }),
        Login() {
            this.signIn(this.form).then(() => {
                this.form = ''
                this.$router.replace('/')
            }).catch(() => {
                this.isUnauthorized = true
            })
            this.form.email = ''
            this.form.password = ''
        },
        startRegister(){
            this.register = !this.register
        }
    }
}
</script>

<style>
    form {
        max-width: 420px;
        margin: 30px auto;
        background: white;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
        }
    .error {
        color: red;
        font-size: 0.7em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    ::-webkit-input-placeholder {
        font-size: 0.7em !important;
        text-transform: uppercase !important;
        letter-spacing: 1px !important;
        font-weight: bold !important;
        }
    input, .input{
        background: white;
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid rgb(184, 183, 183);
        color: #555;
        }
    /* input[type="checkbox"] {
        display: inline-block;
        width: 16px;
        margin: 0 10px 0 0;
        position: relative;
        top: 2px;
        } */
    input[type="submit"], .button {
        background: #0b5dff;
        border: 0;
        padding: 10px 20px;
        margin-top: 20px;
        color: white;
        font-size: 0.8em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
        border-radius: 3px;
        }
    hr{
        margin-top: 10px;
        border: 1px solid rgb(184, 183, 183)
        }
    .button {
        margin-left: 40px;
        width: 80%;
        background: yellowgreen;
        margin-top: 5px;
        }
</style>