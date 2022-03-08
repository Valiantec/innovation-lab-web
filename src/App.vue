<template>
    <Toast position="top-right" />
    <!-- Header -->
    <div
        style="
            background-color: #fefefe;
            width: 100%;
            height: 4rem;
            position: fixed;
            top: 0px;
            left: 0px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        "
    >
        <AppTriView :breadcrumb="false">
            <div
                style="
                    display: flex;
                    justify-content: center;
                    align-items: center;
                "
            >
                <router-link to="/">
                    <div style="padding-inline: 1rem; height: 64px">
                        <img
                            src="@/assets/lablogo-notext.svg"
                            style="max-height: 55px; margin-top: 7px"
                        />
                    </div>
                </router-link>
                <router-link
                    v-for="item in navItems"
                    :key="item.label"
                    :to="item.to"
                    style="
                        margin-inline: 1rem;
                        text-decoration: none;
                        height: 100%;
                    "
                    class="nav-item"
                >
                    <div
                        style="
                            width: 100px;
                            text-align: center;
                            line-height: 4rem;
                        "
                    >
                        {{ item.label }}
                    </div>
                </router-link>
                <!-- <router-link
            to="/dashboard"
            style="margin-inline: 1rem; text-decoration: none; height: 100%"
            class="nav-item"
        >
            <div style="width: 100px; text-align: center; line-height: 4rem">
                Dashboard
            </div>
        </router-link> -->
            </div>
            <template #right>
                <div
                    style="
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    "
                >
                    <Button
                        label="Log in"
                        class="p-button-text"
                        @click="loginDialogVisible = true"
                    />
                </div>
            </template>
        </AppTriView>
    </div>
    <Dialog position="topright" :modal="true" v-model:visible="loginDialogVisible" header="Log in">
        <LoginPanel />
    </Dialog>

    <!-- Content -->
    <div style="margin-top: 5em">
        <router-view v-slot="{ Component }">
            <transition name="fadescale" mode="out-in">
                <component :is="Component" :key="$route.path"></component>
            </transition>
        </router-view>
    </div>

    <!-- Footer -->
    <footer id="footer">
        <p style="text-align: center; font-size: small">
            <small>
                &copy; Copyright 2022, Second Step for Software Development
            </small>
        </p>
    </footer>
</template>

<script>
    import LoginPanel from './components/LoginPanel.vue';
    export default {
        components: {
            LoginPanel
        },
        data: () => ({
            navItems: [
                { label: 'About us', to: '/about-us' },
                { label: 'Join us', to: '/join-us' },
                { label: 'Contact us', to: '/contact-us' },
                { label: 'Suggestions', to: '/suggestions' },
                { label: 'Forms', to: '/forms' }
            ],
            loginDialogVisible: false
        }),
        methods: {}
    };
</script>

<style>
    :root {
        --color-primary: #1eafe4;
        --color-primary-light: #6be1ff;
        --color-primary-dark: #0080b2;
        --color-secondary: #70e0c1;
        --color-secondary-light: #a4fff4;
        --color-secondary-dark: #39ae91;
        --color-text-dark: #212121;
        --color-text-light: #fafafa;
    }
    #app {
        font-family: 'Roboto', Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #footer {
        color: #e7ffff;
    }

    .rounded-corners {
        border-radius: 3px;
        overflow: hidden;
    }

    .panel {
        border-radius: 3px;
        overflow: hidden;
        border: solid 1px #dddddd;
        padding: 8px;
        background-color: white;
        box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%),
            0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
    }

    .scrollable {
        overflow: auto;
    }

    .child-margin-8 > * {
        margin-bottom: 8px;
    }

    .child-block > * {
        display: block;
    }

    .input-field {
        margin-top: 8px;
    }

    .nav-item {
        color: #555555;
    }
    .nav-item:hover {
        color: rgb(73, 156, 122);
    }

    a.router-link-exact-active {
        background-color: rgb(232, 255, 246);
        outline: solid 7px rgb(166, 255, 218);
        font-weight: bold;
    }

    .fadescale-enter-active,
    .fadescale-leave-active {
        transition: opacity 0.2s, transform 0.2s;
    }
    .fadescale-enter-from,
    .fadescale-leave-to {
        opacity: 0;
        transform: scale(90%);
    }

    .md-elevation-1 {
        box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%),
            0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
    }
    .md-elevation-2 {
        box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%),
            0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
    }
    .md-elevation-3 {
        box-shadow: 0 3px 3px -2px rgb(0 0 0 / 20%),
            0 3px 4px 0 rgb(0 0 0 / 14%), 0 1px 8px 0 rgb(0 0 0 / 12%);
    }
    .md-elevation-4 {
        box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%),
            0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
    }
    .md-elevation-5 {
        box-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%),
            0 5px 8px 0 rgb(0 0 0 / 14%), 0 1px 14px 0 rgb(0 0 0 / 12%);
    }
    .md-elevation-6 {
        box-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%),
            0 6px 10px 0 rgb(0 0 0 / 14%), 0 1px 18px 0 rgb(0 0 0 / 12%);
    }
    .md-elevation-7 {
        box-shadow: 0 4px 5px -2px rgb(0 0 0 / 20%),
            0 7px 10px 1px rgb(0 0 0 / 14%), 0 2px 16px 1px rgb(0 0 0 / 12%);
    }
    .md-elevation-8 {
        box-shadow: 0 5px 5px -3px rgb(0 0 0 / 20%),
            0 8px 10px 1px rgb(0 0 0 / 14%), 0 3px 14px 2px rgb(0 0 0 / 12%);
    }
    .md-elevation-9 {
        box-shadow: 0 5px 6px -3px rgb(0 0 0 / 20%),
            0 9px 12px 1px rgb(0 0 0 / 14%), 0 3px 16px 2px rgb(0 0 0 / 12%);
    }
    .md-elevation-10 {
        box-shadow: 0 6px 6px -3px rgb(0 0 0 / 20%),
            0 10px 14px 1px rgb(0 0 0 / 14%), 0 4px 18px 3px rgb(0 0 0 / 12%);
    }
    .md-elevation-24 {
        box-shadow: 0 11px 15px -7px rgb(0 0 0 / 20%),
            0 24px 38px 3px rgb(0 0 0 / 14%), 0 9px 46px 8px rgb(0 0 0 / 12%);
    }
</style>
