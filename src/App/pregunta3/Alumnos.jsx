import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export const Alumnos = () => {
  
  const showNote = () => {
    const array = [];
    let sumPromt = 0;
    let numberPromt;
    
    do {
      numberPromt = parseInt(prompt( `Nota del alumno ${ array.length + 1 }`))
      array.push( numberPromt );
    } while(numberPromt > 0);

    array.forEach( elements => {
      sumPromt += elements;
    })

    alert( `El promedio de las notas es de:  ${sumPromt / array.length}` )
  }
  return (
    <> 
    <Box sx={{ bgcolor: '#ddd', display: 'flex', justifyContent: 'center', py: 3, my: 5 }}>
      <Typography variant='h4' component='h2'>INGRESAR NOTAS</Typography>
      <Button variant='contained' color='error' sx={{ fontSize: '1.2rem' }} onClick={ showNote }>
        Empezar
      </Button>
    </Box>
    </>
  )
}
