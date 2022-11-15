const TYPINGS_FOR_CSS_MODULES_LOADER = {
  loader: '@teamsupercell/typings-for-css-modules-loader',
  options: { disableLocalsExport: true },
}

require('util').inspect.defaultOptions.depth = null

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    for (const rule of config.module.rules.find(rule => rule.oneOf).oneOf) {
      if (!isUsedForLoadingStyles(rule) || !isUsedForStyleModules(rule)) {
        continue
      }

      const [firstLoader, ...otherLoaders] = rule.use

      rule.use = [firstLoader, TYPINGS_FOR_CSS_MODULES_LOADER, ...otherLoaders]
    }

    return config
  },
}

module.exports = nextConfig

function isUsedForLoadingStyles(rule) {
  return rule.use && rule.use[0] && rule.use[0].loader === 'next-style-loader'
}

function isUsedForStyleModules(rule) {
  return rule.test.test('x.module.css') || rule.test.test('x.module.scss')
}
