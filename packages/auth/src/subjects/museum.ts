import { z } from 'zod'

import { museumSchema } from '../models/museum'

export const museumSubject = z.tuple([
	z.union([
		z.literal('visualize'),
		z.literal('create'),
		z.literal('delete'),
		z.literal('manage'),
	]),
	z.union([z.literal('Museum'), museumSchema]),
])

export type MuseumSubject = z.infer<typeof museumSubject>
