import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap'
import Infocard from '../components/Infocard'
import Winner from '../components/Winner'
import styles from '../styles/Home.module.css'

export default function Home() {

  const dinoFacts = [
    ["🕹", "There is an amazing Chrome dino game"],
    ["👴", "They are very old, almost as old as Ryan Swift"],
    ["7️⃣", "The old dinosaur ever found was at 7"],
    ["7️⃣", "The old dinosaur ever found was at 7"]
  ]

  const melonFacts = [
    ["☠️", "Jack is allergic to them"],
    ["🏆", "They have a Local Hack Day subguild thing named after them"],
    ["🎉", "They are yeetful"],
    ["🎉", "They are yeetful"]
  ]

  return (
    <>
      <header className={styles.header}>
        <h1>Melons vs Dinos</h1>
      </header>
      <article>
        <Container className={styles.content}>
          <Winner winner={dinoFacts.length > melonFacts.length ? "dino" : dinoFacts.length == melonFacts.length ? "draw" : "melon"} />
          <Row>
            <Col xs={12} md={6}>
              <h2 className={styles.melonHeader}>Melons</h2>
              {
                melonFacts.map((fact) =>
                  <Infocard text={fact[1]} emoji={fact[0]} type="melon" />
                )
              }
            </Col>
            <Col xs={12} md={6}>
              <h2 className={styles.dinoHeader}>Dinos</h2>
              {
                dinoFacts.map((fact) =>
                  <Infocard text={fact[1]} emoji={fact[0]} type="dino" />
                )
              }
            </Col>
          </Row>
        </Container>
        <Container className={styles.content}>
          ...
        </Container>
      </article>
    </>
  )
}
