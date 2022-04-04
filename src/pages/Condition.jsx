import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import Section, { SectionTitle, SectionBody } from '../components/Section'
import PolicyCard from '../components/PolicyCard'
import Grid from '../components/Grid'

import policy from '../assets/fake-data/policy'

function Condition() {
  return (
    <Helmet title='chính sách'>
      <Section>
        <SectionTitle>
          ĐIỀU KIỆN CHÍNH SÁCH
          </SectionTitle>
        <SectionBody>
          <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {policy.map((item, index) => <Link key={index} to="/policy">
              <PolicyCard
                name={item.name}
                description={item.description}
                icon={item.icon} />
            </Link>)}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  )
}

export default Condition