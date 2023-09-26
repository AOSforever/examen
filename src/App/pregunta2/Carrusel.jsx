import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material'
import { Box, ButtonGroup, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const titles = ['Titulo 1','Titulo 2','Titulo 3','Titulo 4']

export const Carrusel = () => {
    const [state, setState] = useState( 0 );
    const [manipulation,setManipulation] = useState( true )

    const onTranslateLeft = () => {
      setManipulation( false );
      ( state <= 0 ) ? setState( titles.length - 1 ) : setState( state => state - 1 );
    };
    const onTranslateRight = () => {
      setManipulation( false );
      ( state >= titles.length - 1 ) ? setState( 0 ) : setState( state => state + 1 )
    };
         
    
    useEffect(() => {
      ( manipulation )
        ? setTimeout(() => ( state >= titles.length - 1 ) ? setState( 0 ) : setState( state => state + 1 ),3000)
        : null
      },[ state ])

  return (
    <Box component={'header'} className='slide'>
      <Box className='hdr' sx={{ translate: `-${ state }00%` }}>
        {
          titles.map( (title,index) => (
            <Box className='hdr-abs'>
              <img src={`/assets/problema2/banner${ index + 1 }.jpg`}/>
              <Typography variant='h1'>{ title }</Typography>
            </Box>
          ))
        }
      </Box>
      <Box className='slide-nav'>
        <ButtonGroup variant='contained'>
          <IconButton onClick={ onTranslateLeft }>
            <ArrowCircleLeft/>
          </IconButton>
          <IconButton onClick={ onTranslateRight }>
            <ArrowCircleRight/>
          </IconButton>
        </ButtonGroup>
      </Box>
    </Box>
  )
}
