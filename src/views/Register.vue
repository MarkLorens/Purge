<template>
    <div class="backdrop">
        <form @submit.prevent="Register" class="modal">
            Sign up here
            <hr class="register-header">
            <input type="text" placeholder="Name" v-model="name" required>
            <input type="email" placeholder="E-Mail" v-model="email" required>
            <input type="password" placeholder="Password" v-model="password" required>
            <select v-model="role" class="input" required>
                <option value="" disabled selected>Select your role</option>
                <option value=1>QA</option>
                <option value=2>Developer</option>
            </select>
            <input type="submit" value="Register">
            <hr>
            <button type="button" class="button" @click="stopRegister">Already have an account?</button>
        </form>
        {{role}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            role: '',
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
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