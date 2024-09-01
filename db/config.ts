import { column, defineDb, defineTable, NOW } from 'astro:db';

const Contacts = defineTable ({
  columns: {
    id: column.number({ primaryKey: true }),
    timestamp: column.date({ default: NOW }),
    name: column.text(),
    email: column.text(),
    message: column.text(),
  },
   indexes: [
    { on: ["id"], unique: true },
  ]

})

// https://astro.build/db/config
export default defineDb({
  tables: { Contacts}
});