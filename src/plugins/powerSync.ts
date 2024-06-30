// plugins/powersync.ts
import { AppSchema, Database } from "../library/AppSchema.ts";
import { PowerSyncDatabase } from "@powersync/web";
import { createPowerSyncPlugin } from "@powersync/vue";
import { wrapPowerSyncWithKysely } from "@powersync/kysely-driver";

export const powerSync = new PowerSyncDatabase({
    schema: AppSchema,
    database: {
        dbFilename: "vue-todo.db",
    },
});

export const powerSyncPlugin = createPowerSyncPlugin({ database: powerSync });
export const kysleyDb = wrapPowerSyncWithKysely<Database>(powerSync);
