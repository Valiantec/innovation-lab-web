<template>
    <Toast position="top-right" />
    <!-- Header -->
    <div style="background-color:#fefefe;width:100%;height:4rem;position:fixed;top:0px;left:0px;display:flex;justify-content:center;align-items:center;">
        <router-link v-for="item in navItems" :key="item.label" :to="item.to" style="margin-inline:1rem;text-decoration: none;height:100%;" class="nav-item">
            <div style="width:100px; text-align:center; line-height:4rem;">
                {{ item.label }}
            </div>
        </router-link>
    </div>

    <!-- Content -->
    <div style="margin-top: 6em;">
        <router-view v-slot="{Component}">
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
    export default {
        data: () => ({
            navItems: [
                { label: 'Home', to: '/' },
                { label: 'About', to: '/about' },
                { label: 'Join us', to: '/join-us' },
                { label: 'Contact us', to: '/contact-us' },
                { label: 'Suggestions', to: '/suggestion' }
            ]
        })
    };
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #footer {
        color: #eeeeee;
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
    }

    .scrollable {
        overflow: auto;
    }

    .child-margin-8 > * {
        margin-bottom: 8px;
    }

    .input-field {
        margin-top: 8px;
    }

    .nav-item {
        color:#555555;
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
</style>
