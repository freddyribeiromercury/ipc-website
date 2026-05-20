import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'servico',
  title: 'Serviço (Gabinete)',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      title: 'Nome do Serviço',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {source: 'nome'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'numero',
      title: 'Número (ex: 01)',
      type: 'string',
    }),
    defineField({
      name: 'descricao',
      title: 'Descrição Curta',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'conteudo',
      title: 'Conteúdo da Página',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'foto',
      title: 'Foto',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'fotoUrl',
      title: 'URL da Foto (externo)',
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
    select: {title: 'nome', subtitle: 'numero', media: 'foto'},
  },
})
