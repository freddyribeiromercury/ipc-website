import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'formacao',
  title: 'Formação',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {source: 'titulo'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'badge',
      title: 'Badge (ex: 6ª Edição, Pós-Graduação)',
      type: 'string',
    }),
    defineField({
      name: 'preco',
      title: 'Preço (ex: €69 – €99, Consultar)',
      type: 'string',
    }),
    defineField({
      name: 'descricao',
      title: 'Descrição Curta',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'conteudo',
      title: 'Conteúdo da Página',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'imagem',
      title: 'Imagem de Capa',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'area',
      title: 'Área',
      type: 'reference',
      to: [{type: 'areaFormacao'}],
    }),
    defineField({
      name: 'emDestaque',
      title: 'Em Destaque na Página Principal?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'dataInicio',
      title: 'Data de Início',
      type: 'date',
    }),
    defineField({
      name: 'ordem',
      title: 'Ordem',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Em Destaque',
      name: 'destaqueDesc',
      by: [{field: 'emDestaque', direction: 'desc'}],
    },
    {
      title: 'Data',
      name: 'dataAsc',
      by: [{field: 'dataInicio', direction: 'asc'}],
    },
  ],
  preview: {
    select: {title: 'titulo', subtitle: 'badge', media: 'imagem'},
  },
})
