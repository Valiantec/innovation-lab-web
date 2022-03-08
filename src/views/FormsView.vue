<template>
    <AppTriView>
        <div class="child-margin-8">
            <Panel header="1. Download a Form" class="md-elevation-2">
                <div class="form-container">
                    <Card
                        v-for="file in formFiles"
                        :key="file.title"
                        style="width: 200px; margin: 4px"
                    >
                        <template #subtitle>
                            <strong>{{ file.title }}</strong>
                        </template>
                        <template #content>
                            {{ file.detail }}
                        </template>
                        <template #footer>
                            <Button
                                label="Download"
                                @click="download(file.uri)"
                                style="display: block; margin-inline: auto"
                                class="p-button-raised"
                            />
                        </template>
                    </Card>
                </div>
            </Panel>
            <Panel header="2. Fill the Form" class="md-elevation-2">
                Fill the form(s) you downloaded with the required information.
            </Panel>
            <Panel header="3. Upload Filled Forms" class="md-elevation-2">
                <FileUpload
                    name="forms"
                    :multiple="true"
                    :fileLimit="5"
                    :url="`${config.backendUri}/upload`"
                />
            </Panel>
        </div>
    </AppTriView>
</template>

<script>
    import config from '../../config';

    export default {
        data: () => ({
            config,
            formFiles: [
                {
                    title: 'Suggestion Form',
                    detail: 'Suggest your idea and have a chance for it to be selected',
                    uri: '/download/SuggestionForm.docx'
                },
                {
                    title: 'Form 1',
                    detail: 'Description here'
                },
                {
                    title: 'Form 2',
                    detail: 'Description here'
                }
            ]
        }),
        methods: {
            download(uri) {
                window.open(uri, '_blank');
            }
        },
        mounted() {
            const cardBodies = document.getElementsByClassName('p-card-body');
            for (let i = 0; i < cardBodies.length; ++i) {
                cardBodies[i].setAttribute(
                    'style',
                    'height:100%;display: flex;flex-direction: column;justify-content: space-between;'
                );
            }
        }
    };
</script>

<style scoped>
    .form-container {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
</style>
