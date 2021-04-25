/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Link} from 'gatsby'
import Layout from 'components/layout'
import Seo from 'components/seo'

export default function IndexPage() {
  return (
    <Layout showFooter={false}>
      <Seo
        title="Janislley Oliveira"
        description="I'm an Embedded SW Engineer and I mostly do Linux kernel work."
      />
      <section>
        <p sx={{m: 0, fontSize: 3, color: 'text'}}>
          Software developer based in Manaus - Brazil.
        </p>
        <p sx={{m: 0, fontSize: 3, color: 'text'}}>Exploring the embedded world/p>
      </section>
      <nav sx={{display: 'inline-flex', flexDirection: 'column', pt: 4}}>
        <Link sx={linkStyles} to="/blog">
          /Blog
        </Link>
        <Link sx={linkStyles} to="/mail">
          /mail
        </Link>
        <Link sx={linkStyles} to="/now">
          /now
        </Link>
        <Link sx={linkStyles} to="/contact">
          /contact
        </Link>
        <a href="https://github.com/janislley" sx={linkStyles}>
          /GitHub
        </a>
        <a href="https://twitter.com/janislley" sx={linkStyles}>
          /Twitter
        </a>
      </nav>
    </Layout>
  )
}

const linkStyles = {
  textDecoration: 'none',
  color: 'primary',
  fontFamily: 'menlo, monospace',
  fontSize: 2,
  fontWeight: 'body',
  textTransform: 'lowercase',
  mb: 3,
}
