/**
 * Export `redirect`
 */

module.exports = redirect

/**
 * Redirect
 */

function redirect (ctx, path) {
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: path })
    ctx.res.end()
  } else {
    const [ pathname, search ] = path.split('?')
    const { location } = document
    
    if (search) {
      location.href = `${location.origin}${pathname}?${search}`
    } else {
      location.href = `${location.origin}${pathname}`
    }
  }
}
