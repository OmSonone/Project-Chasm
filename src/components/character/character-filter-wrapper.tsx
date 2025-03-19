'use server'

import { GET_ALL_ELEMENTS, GET_ALL_WEAPON_TYPES } from '@/sanity/lib/queries'
import { client } from '@/sanity/lib/client'
import { CharacterFilter } from './character-filter'

export async function CharacterFilterWrapper() {
    const [elements, weaponTypes] = await Promise.all([
        client.fetch(GET_ALL_ELEMENTS),
        client.fetch(GET_ALL_WEAPON_TYPES),
    ])

    return <CharacterFilter elements={elements} weaponTypes={weaponTypes} />
} 