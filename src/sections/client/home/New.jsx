import React from 'react'
import { Box, Typography, Container, Grid, Button, Stack } from '@mui/material'
import styled from 'styled-components'

const New = () => {
  return (
    <Box sx={{ padding: { md: '70px 0', xs: '50px 0' } }}>
      <Container
        maxWidth='xl'
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box>
          <Stack sx={{ marginBottom: '60px', textAlign: 'center' }}>
            <Typography variant='enText'>Blog</Typography>
            <Typography variant='viText'>Tin mới nhất</Typography>
          </Stack>
          <Box>
            <Grid container>
              <Grid container item xs={12} sm={6} md={6}>
                <Box>
                  <ImgNew src='http://www.nicdarkthemes.com/themes/beauty/wp/demo/beauty-salon/wp-content/uploads/sites/2/2017/01/blog-1-1024x576.jpg' />
                </Box>
              </Grid>
              <Grid container item xs={12} sm={6} md={6}>
                <Box sx={{ padding: { sm: '20px', md: '30px', lg: '50px' } }}>
                  <CateNew>NEWS</CateNew>
                  <NameNew>New Oil Treatments Available</NameNew>
                  <DateNew>24 JANUARY</DateNew>
                  <DesNew>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at
                    porttitor vehicula nullam augue.
                  </DesNew>
                  <ReadMoreButton>Read more</ReadMoreButton>
                </Box>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{
                marginTop: { xs: '20px', lg: '30px' },
                flexDirection: { xs: 'column-reverse', sm: 'row' },
              }}
            >
              <Grid container item xs={12} sm={6} md={6}>
                <Box sx={{ padding: { sm: '20px', md: '30px', lg: '50px' } }}>
                  <CateNew>RELAX</CateNew>
                  <NameNew>New Site Available</NameNew>
                  <DateNew>24 JANUARY</DateNew>
                  <DesNew>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at
                    porttitor vehicula nullam augue.
                  </DesNew>
                  <ReadMoreButton>Read more</ReadMoreButton>
                </Box>
              </Grid>
              <Grid container item xs={12} sm={6} md={6}>
                <Box>
                  <ImgNew src='http://www.nicdarkthemes.com/themes/beauty/wp/demo/beauty-salon/wp-content/uploads/sites/2/2017/01/blog-2-1024x576.jpg' />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

const ImgNew = styled('img')`
  width: 100%;
  border-radius: 10px;
`
const CateNew = styled(Typography)`
  font-size: 15px;
  line-height: 15px;
  color: #ff6073;
  font-weight: bold;
  letter-spacing: 3px;
  @media (max-width: 1024px) {
    font-size: 13px;
    line-height: 13px;
  }
`
const DateNew = styled(Typography)`
  color: #a3a3a3;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 3px;
  font-weight: lighter;
  margin-top: 13px;
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const DesNew = styled(Typography)`
  color: #a3a3a3;
  font-size: 15px;
  line-height: 29px;
  margin-top: 10px;
  font-family: 'Open Sans', sans-serif;
  @media (max-width: 768px) {
    line-height: 20px;
    font-size: 14px;
  }
`

const NameNew = styled(Typography)`
  color: #727475;
  font-size: 30px;
  line-height: 30px;
  margin-top: 10px;
  @media (max-width: 1024px) {
    font-size: 25px;
    line-height: 25px;
  }
  @media (max-width: 768px) {
    font-size: 23px;
  }
`
const ReadMoreButton = styled(Button)({
  boxShadow: 'none',
  fontSize: '13px',
  padding: '8px 12px',
  border: '1px solid',
  lineHeight: '16px',
  borderColor: '#FF6073',
  backgroundColor: '#FF6073',
  color: '#fff',
  borderRadius: '10px',
  boxSizing: 'border-box',
  letterSpacing: '2px',
  display: 'flex',
  justifyContent: 'flex-start',
  width: 'fit-content',
  transition: 'all .3s',
  display: 'inline-block',
  marginTop: '20px',
  '&:hover': {
    backgroundColor: '#ff6073cc',
    borderColor: '#ff6073cc',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
  },
})

export default New
