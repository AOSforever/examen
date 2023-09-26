import { AccessibilityOutlined, Check } from '@mui/icons-material'
import { Box, Button, ButtonGroup, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

export const Juego = () => {
    const [state, setState] = useState({ player1: 0, player2: 0})

    const calculateWinner = () => {
      let winner;
      (state.player1 > state.player2) ? winner = 'Jugador 1 ¡GANÓ!' :
      (state.player2 == state.player1) ? winner = '¡EMPATE!':
      winner = 'Jugador 2 ¡GANÓ!'
      
        return `${ winner } <br/> Jugador 1: ${ state.player1 } <br/> Jugador 2: ${ state.player2 }`
    }

    const onRandomPlayerOne = () => setState({ ...state, ['player1']: Math.floor( Math.random()*6 ) });

    const onRandomPlayerTwo = () => setState({ ...state, ['player2']: Math.floor( Math.random()*6 )  });

    const onViewResults = () => document.querySelector('.jgA-B-player-info p').innerHTML = calculateWinner();

    const onReset = () => {
      document.querySelector('.jgA-B-player-info p').innerHTML = 'Sin Resultados';
      setState({ player1: 0, player2: 0 })
    }


  return (
    <Grid container className='jgA'>
      <Grid item xs={ 6 } className='jgA-B'>
        <Typography variant='h3' component='h5' align='center'> JUEGO </Typography>
        <Grid container className='jgA-B-player'>
          <Grid item xs={ 6 } className='jgA-B-playerA'>
            <Stack 
              className='jgA-B-playerA-ct'
              alignItems={'center'} 
            >
              <Typography paragraph>
                JUGADOR 1
              </Typography>
              <Button
                variant='contained'
                color='warning'
                fullWidth
                startIcon={ state.player1 ? <Check/> : <AccessibilityOutlined/> }
                onClick={ onRandomPlayerOne }
              >
                Iniciar Jugada
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={ 6 } className='jgA-B-playerB'>
            <Stack 
              className='jgA-B-playerB-ct'
              alignItems={'center'} 
            >
              <Typography paragraph>
                JUGADOR 2
              </Typography>
              <Button
                variant='contained'
                color='warning'
                fullWidth
                startIcon={ state.player2 ? <Check/> : <AccessibilityOutlined/> }
                onClick={ onRandomPlayerTwo }
              >
                Iniciar Jugada
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={ 12 } className='jgA-B-playerResult'>
            <ButtonGroup variant='contained'>
              <Button
                disabled={ !(state.player1 && state.player2) }
                onClick={ onViewResults }
              >
                Ver Resultados
              </Button>
              <Button color='error' onClick={ onReset }>
                Reiniciar
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={ 12 } className='jgA-B-player-info'> 
              <Typography variant='p' component='p' align='center'>Sin Resultados</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
