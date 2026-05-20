import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'parceiro',
  title: 'Parceiro',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      title: 'Nome',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logótipo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'logoUrl',
      title: 'URL do Logo (externo)',
      type: 'url',
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
    defineField({
      name: 'ordem',
      title: 'Ordem',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Ordem',
      name: 'ordemAsc',
      by: [{field: 'ordem', direction: 'asc'}],
    },
  ],
  preview: {
    select: {title: 'nome', media: 'logo'},
  },
})
