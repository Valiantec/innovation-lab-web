<template>
    <AppTriView>
        <div class="panel child-margin-8">
            <div style="padding-block: 1rem">
                If you are interested in joining us, please fill out the form
                below and we will get back to you as soon as we have reviewed
                your application.
            </div>
            <Panel header="Basic Info">
                <div class="child-margin-8">
                    <HorizontalFlowPanel style="align-items: center">
                        <div style="width: 100px">Full Name</div>
                        <InputText
                            type="text"
                            class="p-inputtext-sm"
                            v-model="name"
                            style="width: 300px"
                            placeholder="Ex. John Doe"
                        />
                    </HorizontalFlowPanel>
                    <HorizontalFlowPanel style="align-items: center">
                        <div style="width: 100px">Occupation</div>
                        <Dropdown
                            class="p-inputtext-sm"
                            v-model="selectedOccupation"
                            :options="occupations"
                            style="width: 300px"
                        />
                    </HorizontalFlowPanel>
                    <HorizontalFlowPanel style="align-items: center">
                        <div style="width: 100px">Email</div>
                        <InputText
                            type="email"
                            class="p-inputtext-sm"
                            v-model="email"
                            style="width: 300px"
                            placeholder="user@example.com"
                        />
                    </HorizontalFlowPanel>
                </div>
            </Panel>
            <Panel header="Experience">
                <p style="margin-top: 0">
                    This can be anything from work experience to personal
                    projects you worked on
                </p>
                <Textarea
                    :autoResize="true"
                    rows="7"
                    v-model="experience"
                    style="width: 100%; font-size: 0.875rem"
                />
            </Panel>
            <Panel header="Project Idea (optional)">
                <p style="margin-top: 0">
                    Briefly describe the project idea you want to introduce to
                    the lab
                </p>
                <Textarea
                    :autoResize="true"
                    rows="7"
                    v-model="projectDescription"
                    style="width: 100%; font-size: 0.875rem"
                />
            </Panel>
            <div style="margin: auto; width: fit-content">
                <Button
                    label="Submit"
                    icon="pi pi-check"
                    iconPos="right"
                    style="width: 120px"
                    @click="
                        this.$toast.add({
                            severity: 'success',
                            summary: 'Application Sent',
                            detail: 'We will contact you after reviewing it.',
                            life: 5000,
                            closable: false
                        })
                    "
                    class="p-button-raised"
                />
            </div>
        </div>
    </AppTriView>
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
