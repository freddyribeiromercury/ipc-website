import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'membroEquipa',
  title: 'Membro da Equipa',
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
      options: {source: 'nome'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cargo',
      title: 'Cargo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Biografia (curta) — cartão na homepage',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'intro',
      title: 'Introdução — subtítulo da página de perfil',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'bioLonga',
      title: 'Biografia Completa — parágrafos da página de perfil',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'credenciais',
      title: 'Credenciais — secções laterais da página de perfil',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'grupo',
          title: 'Grupo',
          fields: [
            {name: 'label', title: 'Título do Grupo', type: 'string'},
            {name: 'items', title: 'Itens', type: 'array', of: [{type: 'string'}]},
          ],
          preview: {select: {title: 'label'}},
        },
      ],
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
      description: 'Se a foto estiver em servidor externo (ex: ipcriminologia.pt)',
    }),
    defineField({
      name: 'iniciais',
      title: 'Iniciais (se sem foto)',
      type: 'string',
      description: 'Ex: MG — aparece quando não há foto',
    }),
    defineField({
      name: 'ordem',
      title: 'Ordem de Apresentação',
      type: 'number',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn (URL)',
      type: 'url',
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
    select: {title: 'nome', subtitle: 'cargo', media: 'foto'},
  },
})
