import { Box, Grid } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from 'react'

export const Producto = () => {
  const [state, setState] = useState('/assets/problema4/vistaG1.jpg');
  return (
    <>
      <Grid container>
        <Grid item xs={ 12 }>
          <img src={ state }/>
        </Grid>
        <Grid item>
        </Grid>
      </Grid>
      <Swiper
        slidesPerView={ 5 }
      >
        <SwiperSlide>
          <img src='/assets/problema4/vistaG1.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='/assets/problema4/vistaG2.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='/assets/problema4/vistaG3.jpg'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='/assets/problema4/vistaP1.jpg'/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
