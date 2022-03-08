<template>
    <div
        style="padding: 1rem; display: flex; flex-direction: column"
        class="child-margin-8"
    >
        Email
        <div>
            <InputText
                type="email"
                class="p-inputtext-sm"
                v-model="email"
                style="width: 300px"
                placeholder="user@example.com"
            />
        </div>
        Password
        <div>
            <InputText
                type="password"
                class="p-inputtext-sm"
                v-model="password"
                style="width: 300px"
                placeholder="Password"
            />
        </div>
        <p style="text-align: center">or</p>
        <div style="display: flex; justify-content: center">
            <Button
            @click="login('google')"
                icon="pi pi-google"
                class="p-button-rounded p-button-secondary p-button-raised"
                style="margin: 3px"
            />
            <Button
                @click="login('github')"
                icon="pi pi-github"
                class="p-button-rounded p-button-secondary p-button-raised"
                style="margin: 3px"
            />
        </div>
        <Button label="Log in" @click="login()" class="p-button-raised" />
    </div>
</template>

<script>
    import {
        getAuth,
        signInWithEmailAndPassword,
        signInWithPopup,
        GoogleAuthProvider,
        GithubAuthProvider
    } from 'firebase/auth';
    export default {
        data: () => ({
            email: '',
            password: ''
        }),
        methods: {
            login(provider = null) {
                if (provider == null) {
                    signInWithEmailAndPassword(
                        getAuth(),
                        this.email,
                        this.password
                    )
                        .then((credential) => {
                            console.log(credential);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                } else {
                    if (provider == 'google') {
                        provider = new GoogleAuthProvider();
                    } else if (provider == 'github') {
                        provider = new GithubAuthProvider();
                    }
                    signInWithPopup(getAuth(), provider)
                        .then((result) => {
                            console.log(result);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }
            }
        }
    };
</script>

<style scoped></style>
