import { defineAction, z } from "astro:actions";
import { db, Contacts, NOW } from 'astro:db';

export const server = {
  contact: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().min(2).max(100),
      email: z.string().email(),
      message: z.string(),
    }),
    handler: async ({ name, email, message }) => {
      const timestamp = NOW;
      if (typeof name === 'string' && typeof email === 'string' && typeof message === 'string') {
        await db.insert(Contacts).values({ timestamp, name, email, message });
      }
      return { success: true };
    },
  }),
};