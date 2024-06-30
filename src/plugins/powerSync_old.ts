// src/plugins/powersync.ts
import { AppSchema } from "../library/AppSchema.ts";
import { PowerSyncDatabase } from "@powersync/web";
import { createPowerSyncPlugin } from "@powersync/vue";

export const powerSync = new PowerSyncDatabase({
    schema: AppSchema,
    database: {
        dbFilename: "vue-todo.db",
    },
});

export const powerSyncPlugin = createPowerSyncPlugin({ database: powerSync });
