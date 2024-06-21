import { z } from 'zod'

export const museumSchema = z.object({
	__typename: z.literal('Museum').default('Museum'),
	id: z.string(),
})

export type Museum = z.infer<typeof museumSchema>
