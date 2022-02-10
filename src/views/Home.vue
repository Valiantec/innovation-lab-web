<template>
    <div>
        <div
            style="
                display: grid;
                grid-gap: 8px;
                grid-template-columns: 20% auto 20%;
            "
        >
            <div></div>
            <div>
                <div style="text-align:center; height:10rem; line-height:9rem; color:#fefefe; font-size:24pt; font-family:Courier New;">
                  SSSD Innovation Lab
                </div>
                <div
                    style="
                        background-color: #333333aa;
                        padding: 1em;
                        color: white;
                    "
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis in optio, quo dolores ex libero qui adipisci iure
                    quisquam. Culpa possimus exercitationem voluptatibus eos
                    eligendi expedita nihil alias unde dolores. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Atque illum
                    soluta sint quam maiores corrupti, consequuntur ullam
                    inventore consectetur error dignissimos cupiditate eveniet
                    qui sapiente minima ipsum nulla itaque aut.
                </div>
                <div
                    class="panel"
                    style="
                        display: grid;
                        grid-gap: 8px;
                        grid-template-columns: 33% 33% 33%;
                        justify-content: center;
                    "
                >
                    <Card
                        v-for="item in newsItems"
                        :key="item.title"
                        style="width: 100%"
                    >
                        <template #header>
                            <img
                                :alt="item.title"
                                :src="require(`@/assets/${item.image}`)"
                            />
                        </template>
                        <template #title>
                            {{ item.title }}
                        </template>
                        <template #content>
                            {{ item.detail }}
                        </template>
                    </Card>
                </div>
            </div>

            <div></div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            images: null,
            newsItems: [
                {
                    title: 'Latest',
                    detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    image: 'img1.jpg'
                },
                {
                    title: 'Three',
                    detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    image: 'img2.jpg'
                },
                {
                    title: 'Posts',
                    detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    image: 'img3.jpg'
                }
            ]
        })
    };
</script>

<style scoped></style>
