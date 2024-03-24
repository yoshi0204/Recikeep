import { z } from 'zod';

export const validationSchema = z.object({
  email: z.string().min(4, 'Please enter a valid email'), // スペル修正
  password: z.string().min(4, 'It has to be at least 4 characters'),
});
