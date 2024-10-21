import { TextField, Button } from '@mui/material'

export const Filters = () => {
  return (
    <div className="search-filter">
        <TextField id="outlined-basic" label="Buscar Pokémon" variant="outlined" />
        <Button variant="contained" disableElevation>
          Ver Resultados
        </Button>
        <TextField id="outlined-basic" label="Buscar Pokémon" variant="outlined" />
    </div>
  )
}
