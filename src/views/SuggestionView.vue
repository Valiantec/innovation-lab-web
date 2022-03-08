<template>
    <AppTriView>
        <div class="rounded-corners md-elevation-2">
            <TabView>
                <TabPanel header="Add New">
                    <Panel header="New Suggestion">
                        <div class="child-margin-8">
                            <HorizontalFlowPanel style="align-items: center">
                                <InputText
                                    type="text"
                                    v-model="author"
                                    style="width: 250px"
                                    placeholder="Name"
                                />
                            </HorizontalFlowPanel>
                            <HorizontalFlowPanel>
                                <Textarea
                                    :autoResize="true"
                                    rows="5"
                                    v-model="suggestion"
                                    style="width: 30rem"
                                    placeholder="Suggestion"
                                />
                            </HorizontalFlowPanel>
                        </div>
                        <div style="display: flex; justify-content: right">
                            <Button
                                label="Submit"
                                icon="pi pi-check"
                                iconPos="right"
                                @click="submitSuggestion()"
                                class="p-button-raised"
                            />
                        </div>
                    </Panel>
                </TabPanel>
                <TabPanel header="Other Suggestions">
                    <Card
                        v-for="s in suggestionLog"
                        :key="s.creationDate"
                        style="margin-bottom: 12px"
                    >
                        <template #title>
                            {{ s.author }}
                        </template>
                        <template #subtitle>
                            {{ new Date(s.creationDate).toLocaleString() }}
                        </template>
                        <template #content>
                            <div style="white-space: pre-wrap">
                                {{ s.content }}
                            </div>
                        </template>
                    </Card>
                </TabPanel>
            </TabView>
        </div>
    </AppTriView>
</template>

<script>
    import api from '../api';
    export default {
        data: () => ({
            author: '',
            suggestion: '',
            suggestionLog: []
        }),
        methods: {
            submitSuggestion() {
                api.suggestion
                    .addSuggestion(this.author, this.suggestion)
                    .then(() => {
                        this.suggestionLog.unshift({
                            author: this.author,
                            content: this.suggestion,
                            creationDate: new Date(Date.now())
                        });
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
                            detail: err.response.data.message,
                            life: 3000,
                            closable: false
                        });
                    });
            }
        },
        mounted() {
            api.suggestion
                .getAll()
                .then((res) => {
                    this.suggestionLog = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
</script>

<style scoped></style>
