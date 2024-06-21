import { AbilityBuilder } from '@casl/ability'

import { AppAbility } from '.'
import { User } from './models/user'
import { Role } from './roles'

type PermissionsByRole = (
	user: User,
	builder: AbilityBuilder<AppAbility>,
) => void

export const permissions: Record<Role, PermissionsByRole> = {
	ADMIN(_, { can }) {
		can('manage', 'all')
		can(['visualize'], 'Museum')
	},
	MEMBER(_, { can }) {
		can(['visualize'], 'Museum')
	},
	MUSEUM_ADMIN(user, { can }) {
		can(['visualize'], 'Museum')
		can(['manage'], 'Museum', ['id'], {
			id: {
				$eq: user.museum_id,
			},
		})
	},
}
