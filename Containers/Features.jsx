import Image from "next/image";
import Layout from "../Components/Layout/Layout";
import {Box, Typography} from '@mui/material';
import { ScaleUp, SlideUp } from '../helpers/framerAnimations';

import icon1 from '../public/features/accessibility.svg';
import icon2 from '../public/features/analytics.svg';
import icon3 from '../public/features/customization.svg';
import icon4 from '../public/features/messaging.svg';

const features = [
    {
        icon: icon1,
        title: 'Use Accessibility',
        text: 'we are driven beyond just finishing the projects. We want to find smart solutions.',
    },
    {
        icon: icon2,
        title: 'Help and support',
        text: 'we are driven beyond just finishing the projects. We want to find smart solutions.',
    },
    {
        icon: icon3,
        title: 'User Customization',
        text: 'we are driven beyond just finishing the projects. We want to find smart solutions.',
    },
    {
        icon: icon4,
        title: 'Find work and grow',
        text: 'we are driven beyond just finishing the projects. We want to find smart solutions.',
    },
];

const Features = () => {
    return(
        <Box>
      <Layout id="features" style={{ textAlign: 'center' }}>
        <SlideUp sx={styles.features__info}>
          <Typography variant="h2">Businesses start with great features</Typography>
          <Typography variant="body2">
            Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents.
          </Typography>
        </SlideUp>
        <Box sx={styles.features__flex}>
          {features.map((feature, i) => (
            <ScaleUp sx={styles.feature} key={feature.title} multiplier={i}>
              <Box>
                <Image src={feature.icon} alt={feature.title} height="75px" width="75px" />
              </Box>
              <Typography variant="body3" sx={{ fontWeight: '600' }}>
                {feature.title}
              </Typography>
              <Typography variant="body3">{feature.text}</Typography>
            </ScaleUp>
          ))}
        </Box>
      </Layout>
    </Box>
    )
}

export default Features;

const styles = {
  features__container: {
    textAlign: 'center',
    color: 'white',
  },
  features__info: {
    margin: '0 auto',
    width: ['100%', '100%', '50%'],
    color: 'white',
  },
  features__flex: {
    marginTop: '6rem',
    display: 'grid',
    gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(4, 1fr)'],
    gridGap: '2rem',
    color: 'white',
  },
  feature: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
    marginBottom: '2rem',
  },
};