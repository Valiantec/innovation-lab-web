<template>
    <AppTriView>
        <template #left>
            <PanelMenu :model="leftNavItems" />
        </template>

        <div class="panel">
            mid
        </div>

        <template #right>
            <div class="panel">right</div>
        </template>
    </AppTriView>
</template>

<script>
    export default {
        data: () => ({
            leftNavItems: [
                {
                    label: 'Posts',
                    icon: 'pi pi-fw pi-file',
                    items: [
                        {
                            label: 'New',
                            icon: 'pi pi-fw pi-plus'
                        }
                    ]
                }
            ]
        })
    };
</script>
