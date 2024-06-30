<script setup lang="ts">
import { onMounted } from "vue";
import Logger from "js-logger";
import { powerSync, kysleyDb } from "./plugins/powerSync";
import { supabase } from "./plugins/supabase";

Logger.useDefaults();
Logger.setLevel(Logger.DEBUG);

onMounted(async () => {
    await powerSync.init();
    await powerSync.connect(supabase);
    await supabase.init();

    const result = await kysleyDb.selectFrom("todos").selectAll().execute();
    console.log(result);
});
</script>

<template>
    <router-view />
</template>
