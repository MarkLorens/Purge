<template>
    <Navbar />
    <form @submit.prevent="Change">
        <input class="input" type="password" placeholder="Old Password" v-model="form.OldPassword" required>
        <input class="input" type="password" placeholder="New Password" v-model="form.NewPassword" required>
        <input class="input" type="password" placeholder="Confirm Password" v-model="form.ConfirmPassword" required>
        <br>
        <div class="error">
            <p v-if="unmatch">{{ err }}</p>
        </div>
        <input type="submit" value="Change Password">
    </form>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import { mapActions } from 'vuex'
export default {
    components: {
        Navbar
    },
    data() {
        return {
            unmatch: false,
            form: {
                OldPassword: '',
                NewPassword: '',
                ConfirmPassword: ''
            },
            err: ''
        }
    },
    methods: {
        ...mapActions({
            changePassword: 'auth/changePassword'
        }),
        Change() {
            if(this.form.NewPassword != this.form.ConfirmPassword) {
                this.unmatch = true
                this.err = "New password and Confirm Password are not matched"
            }
            else {
                this.changePassword(this.form).then(() => {
                   alert("Password changed successfully")
                   this.unmatch = false
                   this.form.OldPassword = ''
                   this.form.NewPassword = ''
                   this.form.ConfirmPassword = '' 
                }).catch(() => {
                    this.err = "Old password is incorrect"
                })
            }
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