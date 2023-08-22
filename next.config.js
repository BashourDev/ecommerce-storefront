const { withStoreConfig } = require("./store-config")
const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./src/i18n.ts"
)
const store = require("./store.config.json")

module.exports = withNextIntl(
  withStoreConfig({
    experimental: {
      serverActions: true,
    },
    features: store.features,
    reactStrictMode: true,
    images: {
      domains: [
        "medusa-public-images.s3.eu-west-1.amazonaws.com",
        "localhost",
        "medusa-server-testing.s3.amazonaws.com",
      ],
    },
  })
)

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
