<template>
    <div>
        <div style="display: flex">
            <div class="rounded-corners">
                <Galleria
                    :value="images"
                    :responsiveOptions="responsiveOptions"
                    :numVisible="5"
                    containerStyle="max-width: 720px"
                >
                    <template #item="{ item }">
                        <img
                            :src="require('@/assets/' + item.image)"
                            style="width: 100%; display: block"
                        />
                    </template>
                    <template #thumbnail="{ item }">
                        <div class="thumbnails">
                            <img
                                :src="require('@/assets/' + item.image)"
                                style="display: block; height: 70px"
                            />
                        </div>
                    </template>
                    <template #caption="{ item }">
                        <h2 style="margin-bottom: 0.5em; margin-top: 0em;">{{ item.title }}</h2>
                    </template>
                </Galleria>
            </div>
            <div class="panel" style="margin-left: 8px; width: 250px">
                <div
                    style="
                        text-align: center;
                        font-weight: bold;
                        border-bottom: solid 1px #cccccc;
                        margin-bottom: 8px;
                    "
                >
                    News
                </div>
                <div
                    v-for="item in newsItems"
                    :key="item.title"
                    class="panel"
                    style="margin-bottom: 3px; cursor:pointer;"
                >
                    <div>{{ item.title }}</div>
                    <div style="color: #666666">{{ item.detail }}</div>
                </div>
            </div>
        </div>
        <div class="panel" style="margin-top: 8px; height:250px;"></div>
    </div>
</template>

<script>
    import api from '@/api/api';

    export default {
        data() {
            return {
                images: null,
                responsiveOptions: [
                    {
                        breakpoint: '1024px',
                        numVisible: 5
                    },
                    {
                        breakpoint: '768px',
                        numVisible: 3
                    },
                    {
                        breakpoint: '560px',
                        numVisible: 1
                    }
                ],
                newsItems: [
                    {
                        title: 'First Post',
                        detail: 'This is the first post'
                    },
                    {
                        title: 'Second Post',
                        detail: 'This is the second post'
                    }
                ]
            };
        },
        mounted() {
            this.images = api.getImages();
        }
    };
</script>

<style scoped>
    .thumbnails {
        justify-content: center;
        display: grid;
    }
</style>
