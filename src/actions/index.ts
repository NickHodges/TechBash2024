import { defineAction, z } from "astro:actions";

export const server = {
  contact: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(2).max(100),
      email: z.string().email(),
      message: z.string(),
    }),
    handler: async ({ name, email, message }) => {
      console.log("Received new newsletter signup:", { name, email, message });
      return { success: true };
    },
  }),
};