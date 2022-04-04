import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import Section, { SectionTitle, SectionBody } from '../components/Section'
import Grid from '../components/Grid'

import policy from '../assets/fake-data/contact'
import ContactCard from '../components/ContactCard'

function Contact() {
  return (
    <Helmet title='liên hệ'>
      <Section>
        <SectionBody>
          <Grid
            col={1}
            mdCol={1}
            smCol={1}
            gap={1}
          >
            {contact.map((item, index) => <Link key={index} to="/contact">
              <ContactCard
                image={item.image}
                title = {item.title}
                description={item.description}
                email={item.email}
                phone = {item.phone} />
            </Link>)}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  )
}

export default Contact