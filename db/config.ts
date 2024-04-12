import { defineDb, defineTable, column } from 'astro:db';

const User = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    username: column.text(),
  }
});

const Session = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    userId: column.number({ references: () => User.columns.id }),
    expiresAt: column.number()
  }
})

const Comment = defineTable({
  columns: {
    authorId: column.number({ references: () => User.columns.id }),
    content: column.text(),
  }
});

const CulturalEntity = defineTable({
  columns: {
    Category: column.text(),
    Location: column.text(),
    SubjectArea: column.text(),
    Contact: column.text(),
  }
})

export default defineDb({
  tables: { CulturalEntity },
})
