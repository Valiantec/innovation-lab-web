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
            <div class="panel child-margin-8">
                <div style="padding: 1rem">
                    If you are interested in joining us, please fill out the
                    form below and we will get back to you as soon as we have
                    reviewed your application.
                </div>
                <Panel header="Basic Info">
                    <span class="p-float-label input-field">
                        <InputText id="name" type="text" v-model="name" />
                        <label for="name">Full Name</label>
                    </span>

                    <span
                        class="p-float-label input-field"
                        style="margin-top: 24px"
                    >
                        <Dropdown
                            id="occupation"
                            v-model="selectedOccupation"
                            :options="occupations"
                        />
                        <label for="occupation">Occupation</label>
                    </span>

                    <span
                        class="p-float-label input-field"
                        style="margin-top: 24px"
                    >
                        <InputText id="email" type="email" v-model="email" />
                        <label for="email">Email</label>
                    </span>
                </Panel>
                <Panel header="Experience">
                    <span class="p-float-label input-field">
                        <Textarea
                            id="experience"
                            :autoResize="true"
                            rows="5"
                            cols="54"
                            v-model="experience"
                        />
                        <label for="experience">Experience</label>
                    </span>
                </Panel>
                <Panel header="Project Idea (optional)">
                    <span class="p-float-label input-field">
                        <Textarea
                            id="project-description"
                            :autoResize="true"
                            rows="5"
                            cols="54"
                            v-model="projectDescription"
                        />
                        <label for="project-description">Description</label>
                    </span>
                </Panel>
                <Button
                    label="Submit"
                    icon="pi pi-check"
                    iconPos="right"
                    style="float: right"
                    @click="
                        this.$toast.add({
                            severity: 'success',
                            summary: 'Application Sent',
                            detail: 'We will contact you after reviewing it.',
                            life: 5000,
                            closable: false
                        })
                    "
                />
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                email: '',
                experience: '',
                projectDescription: '',
                selectedOccupation: '',
                occupations: [
                    'High School Student',
                    'University Student',
                    'Employed',
                    'SSSD Employee'
                ]
            };
        }
    };
</script>

<style scoped></style>
