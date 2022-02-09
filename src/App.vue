<template>
    <Toast position="top-right" />
    <!-- Header -->
    <Menubar :model="navItems">
        <template #start>
            <img alt="logo" src="@/assets/sssdlogo.png" height="40" style="margin-left:0.7em;" />
        </template>
    </Menubar>

    <!-- Content -->
    <div style="margin-top: 8px; min-height: 800px;">
        <router-view />
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
                { label: 'Contact us', to: '/contact-us' }
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
</style>
