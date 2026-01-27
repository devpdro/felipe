// Meta tags são gerenciadas pelo layout.tsx usando metadata do Next.js
// Este componente é mantido apenas para compatibilidade, mas não renderiza nada

export type MetaProps = {
  title?: string
  description?: string
  keywords?: string
  image?: string
  canonical?: string
  ogType?: string
  ogSiteName?: string
  twitterCard?: string
  twitterSite?: string
}

const DEFAULT_TITLE = 'Meta Corpo - Treinamento Direto para Transformar seu Corpo'
const DEFAULT_DESCRIPTION = 'Meta Corpo é um treinamento direto que leva o corpo de volta ao estado onde sustentar sua própria energia é natural e até prazeroso. Quando o corpo entra no eixo, o cansaço perde força, a mente desacelera e a ação volta.'
const DEFAULT_KEYWORDS = 'meta corpo, treinamento corporal, energia natural, foco e disciplina, transformação física, movimento e respiração, jejum e treino, presença no corpo, superação pessoal, energia estável, foco no dia a dia, treinamento direto, corpo no eixo, transformação do corpo, Felipe Lino dos Santos'
const DEFAULT_IMAGE = '/og-image.png'
const DEFAULT_OG_TYPE = 'website'
const DEFAULT_OG_SITE_NAME = 'Meta Corpo'
const DEFAULT_TWITTER_CARD = 'summary_large_image'
const DEFAULT_TWITTER_SITE = ''

const Meta = ({
  title,
  description,
  keywords,
  image,
  canonical,
  ogType,
  ogSiteName,
  twitterCard,
  twitterSite,
}: MetaProps) => {
  const router = typeof window !== 'undefined' ? window.location : undefined
  const url = canonical || (router ? router.href : '')
  const pageTitle = title || DEFAULT_TITLE
  const metaDescription = (description && description.length > 160)
    ? description.slice(0, 157) + '...'
    : (description || DEFAULT_DESCRIPTION)

  // Meta tags são gerenciadas pelo layout.tsx
  // Não renderiza nada para evitar blocking render
  return null
}

export default Meta