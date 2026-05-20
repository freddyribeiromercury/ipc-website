import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'areaFormacao',
  title: 'Área de Formação',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      title: 'Nome',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'nome' },
    }),
    defineField({
      name: 'icone',
      title: 'Ícone (emoji)',
      type: 'string',
      description: 'Ex: 🔍, 🧪, ⚖️',
    }),
    defineField({
      name: 'descricao',
      title: 'Descrição',
      type: 'text',
      rows: 2,
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
    select: {title: 'nome', subtitle: 'icone'},
    prepare({title, subtitle}) {
      return {title: `${subtitle || ''} ${title}`}
    },
  },
})
