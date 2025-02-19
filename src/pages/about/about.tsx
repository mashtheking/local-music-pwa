import { VoidComponent } from 'solid-js'
import { version, description } from '../../../package.json'
import { Scaffold } from '~/components/scaffold/scaffold'
import * as styles from './about.css'

const AboutPage: VoidComponent = () => (
  <Scaffold title='About' scrollable>
    <section class={styles.section}>
      <img src='/icons/icon_responsive.svg' class={styles.logo} />
      <div>{version}</div>
      <h1 class={styles.title}>Mziki music player</h1>
      
      <a href='https://mziki.africa'>
        Join Our Community on Mziki Africa 
      </a>
      <a href='https://mziki.africa/privacy.html'>Privacy</a>
    </section>
  </Scaffold>
)

export default AboutPage
