import { defineAction, z } from "astro:actions";

export const server = {
  contact: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().min(2).max(100),
      email: z.string().email(),
      message: z.string(),
    }),
    handler: async ({ name, email, message }) => {
      console.log('Contact Info -- ', 'Name: ', name, 'Email: ', email, '', 'Message: ', message);
      return { success: true };
    },
  }),
};