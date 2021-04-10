<template>
    <Navbar />
    <h2>Create new issue</h2>
    <form @submit.prevent = "CreateIssue">
        <label>Issue: </label>
        <input type="text" v-model="form.title" required>
        <label>Description: </label>
        <input type="text" v-model="form.Body" required>
        <label>Severity: </label>
        <select v-model="form.severity" required>
            <option value="" disabled selected>Select severity</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <div v-if="err" class="error">{{ msg }}</div>
        <button>Submit</button>
    </form>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import { mapActions } from 'vuex'

export default {
    components:{
        Navbar
    },
    data() {
        return {
            form: {
                title: '',
                Body: '',
                severity: 0
            },
            err: false,
            msg: 'Error, issue was not created'
        }
    },
    methods: {
        ...mapActions({
            createIssue: 'issue/createIssue'
        }),
        CreateIssue() {
            this.createIssue(this.form)
                .then(() => {
                    alert('Issue successfully created')
                    this.err = false
                    this.form.title = ''
                    this.form.description = ''
                    this.form.severity = ''
                    this.$router.replace('/')
                })
                .catch(() => {
                    this.err = true
                })
        }
    }
}
</script>

<style scoped>
    form {
        max-width: 420px;
        margin: 30px auto;
        text-align: left;
        background: #1f2430;
        padding: 40px;
        border-radius: 10px;
    }
    label {
        color: #fbce7b;
        display: inline-block;
        margin: 25px 0 15px;
        font-weight: bold;
    }
    input, select {
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        background: #1f2430;
        border-bottom: 1px solid #ddd;
        font: inherit;
        color: white;
    }
    button {
        margin-top: 10px;
        height: 30px;
        width: 90px;
        border-radius: 5px;
        border: 1px solid white;
        font-family:inherit;
    }
    .error {
        color: crimson;
        font-weight: bold;
        margin-top: 10px;
    }
    h2 {
        color: #c8a47b;
        position: absolute;
        margin-left: 38rem;
    }
</style>