<template>
    <div
        style="
            display: grid;
            grid-gap: 8px;
            grid-template-columns: 20% auto 20%;
        "
    >
        <div></div>
        <div>
            <h2 style="color: #fefefe">Suggestions</h2>
            <div class="panel child-margin-8">
                <TabView>
                    <TabPanel header="Add New">
                        <Panel header="Add a Suggestion">
                            <span class="p-float-label input-field">
                                <InputText
                                    id="name"
                                    type="text"
                                    v-model="name"
                                />
                                <label for="name">Name</label>
                            </span>

                            <span
                                class="p-float-label input-field"
                                style="margin-top: 24px"
                            >
                                <Textarea
                                    id="suggestion"
                                    :autoResize="true"
                                    rows="5"
                                    cols="54"
                                    v-model="suggestion"
                                />
                                <label for="suggestion">Suggestion</label>
                            </span>
                            <Button
                                label="Submit"
                                icon="pi pi-check"
                                iconPos="right"
                                style="float: right"
                                @click="submitSuggestion()"
                            />
                        </Panel>
                    </TabPanel>
                    <TabPanel header="Other Suggestions">
                        <Card
                            v-for="sugg in suggestionLog"
                            :key="sugg.creationDate"
                        >
                            <template #title>
                                {{ sugg.author }}
                            </template>
                            <template #subtitle>
                                {{ sugg.creationDate }}
                            </template>
                            <template #content>
                                {{ sugg.body }}
                            </template>
                        </Card>
                    </TabPanel>
                </TabView>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
    import api from '../api';
    export default {
        data: () => ({
            name: '',
            suggestion: '',
            suggestionLog: []
        }),
        methods: {
            submitSuggestion() {
                api.suggestion
                    .addSuggestion(this.name, this.suggestion)
                    .then(() => {
                        this.$toast.add({
                            severity: 'success',
                            summary: 'Suggestion Sent',
                            life: 3000,
                            closable: false
                        });
                    })
                    .catch((err) => {
                        this.$toast.add({
                            severity: 'error',
                            summary: 'Failed to Send Your Suggestion',
                            detail: err.message,
                            life: 3000,
                            closable: false
                        });
                    });
            }
        },
        mounted() {
            api.suggestion.getAll().then((res) => {
                this.suggestionLog = res.data;
            });
        }
    };
</script>

<style scoped></style>
