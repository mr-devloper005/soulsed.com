import { siteIdentity } from '@/config/site.identity'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'

const { recipe } = getFactoryState()

export const slot4BrandConfig = {
  siteName: siteIdentity.name,
  tagline: siteIdentity.tagline,
  domain: siteIdentity.domain,
  baseUrl: siteIdentity.url,
  productKind: getProductKind(recipe),
  ogImage: siteIdentity.ogImage,
  // Matter reference: an uncompromising black editorial masthead on warm paper.
  accents: { primary: '#111111', surface: '#f7f5f0' },
} as const
