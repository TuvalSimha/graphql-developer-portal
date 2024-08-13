import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  transform(result, { route }) {
    if (route && !result.includes('getStaticProps')) {
      const banner = `import { buildDynamicMeta } from "nextra/remote";

export const getStaticProps = async context => ({
  props: {
    ...(await buildDynamicMeta())
  }
})`
      result += banner
    }
    return result
  },
});

export default withNextra();
