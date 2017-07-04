/**
 * Export `redirect`
 */

var Router = require('next/router')

module.exports = redirect

/**
 * Redirect
 */

function redirect (ctx, path) {
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: path })
    ctx.res.end()
  } else {
    Router.replace(path)
  }
}
