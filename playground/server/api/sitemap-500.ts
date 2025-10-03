import { createError, defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(() => {
  throw createError({
    statusCode: 500,
    message: '500 error response test',
  })
})
