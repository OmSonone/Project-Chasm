import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('elements').title('Elements'),
      S.documentTypeListItem('weaponType').title('Weapon Type'),
      S.documentTypeListItem('character').title('Character'),
      S.documentTypeListItem('artifact').title('Artifact'),
      S.documentTypeListItem('book').title('Book'),
      S.documentTypeListItem('weapon').title('Weapon'),
      S.documentTypeListItem('version').title('Version'),
    ])
