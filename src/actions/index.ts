import { defineAction } from "astro:actions";
import { Contacts, db, NOW } from "astro:db";
import { z } from 'astro:schema';

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

     await db.insert(Contacts).values({ timestamp, name, email, message });
      const timestamp = NOW;

     await db.insert(Contacts).values({ timestamp, name, email, message });
      return { success: true };
    },
  }),
};