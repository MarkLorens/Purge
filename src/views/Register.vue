<template>
    <div class="backdrop">
        <form @submit.prevent="Register" class="modal">
            Sign up here
            <hr class="register-header">
            <input type="text" placeholder="Name" v-model="form.name" required>
            <input type="email" placeholder="E-Mail" v-model="form.email" required>
            <input type="password" placeholder="Password" v-model="form.password" required>
            <select v-model="form.roleID" class="input" required>
                <option value="" disabled selected>Select your role</option>
                <option value=1>QA</option>
                <option value=2>Developer</option>
            </select>
            <input type="submit" value="Register">
            <hr>
            <button type="button" class="button" @click="stopRegister">Already have an account?</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            form: {
                roleID: '',
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions({
            signUp: 'auth/signUp'
        }),
        Register() {
            this.form.roleID = parseInt(this.form.roleID)
            this.signUp(this.form).then(() => {
                this.$router.replace('/')
            }).catch(() => {
                console.log('Register request failed.');
            })
        },
        stopRegister() {
            console.log('hit')
            this.$emit('stop')
        }
    }
}
</script>

<style scoped>
.modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}
.backdrop {
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
}
.register-header{
    width: 100%;
    border: 1px solid #0b5dff;
}
.input {
    font-size: 0.7em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
</style>