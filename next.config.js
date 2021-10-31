const withPWA = require('next-pwa')
module.exports = {
  reactStrictMode: true,
}

const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
