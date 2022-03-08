<template>
    <div
        style="
            display: grid;
            grid-gap: 8px;
            grid-template-columns: 10% auto 10%;
        "
    >
        <div>
            <slot name="left" />
        </div>
        <div class="child-margin-8">
            <Breadcrumb
                v-if="breadcrumb"
                :home="breadcrumbData.home"
                :model="breadcrumbData.items"
                class="md-elevation-2"
            />
            <div>
                <slot />
            </div>
        </div>
        <div>
            <slot name="right" />
        </div>
    </div>
</template>

<script>
    import util from '../util';

    export default {
        data: () => ({
            breadcrumbData: {
                home: {
                    icon: 'pi pi-home',
                    to: '/'
                },
                items: []
            }
        }),
        props: { breadcrumb: { type: Boolean, default: true } },
        mounted() {
            const currentPath = window.location.pathname;
            const pathParts = currentPath.split('/');
            pathParts.shift();
            let url = '';
            pathParts.forEach((part) => {
                url += '/' + part;
                this.breadcrumbData.items.push({
                    label: util.kebabToUserString(part),
                    to: url
                });
            });
        }
    };
</script>

<style scoped></style>
