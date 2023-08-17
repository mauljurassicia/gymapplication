import React, { useContext, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import { ListExercisesContext } from '../App';


function SearchExercises({ setExercises, bodyPart, setBodyPart }) {
  const [search, setSearch] = useState('');
  const {listExercises: exercisesList, bodyParts } = useContext(ListExercisesContext);


  const handleSearch = async () => {
    if(search){
      
      const searchedExercises = exercisesList.filter(
        (exercise) => exercise.name.toLowerCase().includes(search) || exercise.target.toLowerCase().includes(search) || exercise.equipment.toLowerCase().includes(search) || exercise.bodyPart.toLowerCase().includes(search))
      ;

      setSearch('');
      setExercises(searchedExercises)

    }
  }

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px'}}} mb='50px' textAlign='center'>
        Awesome Exercise You <br /> Should Know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField onChange={(e) => {setSearch(e.target.value.toLocaleLowerCase())}}
          sx={{ input: { 
          fontWeight: '700', 
          border: 'none', 
          borderRadius: '4px'},
          width: { lg: '800px', xs: '350px'},
          bgcolor: '#ffffff',
          borderRadius: '40px'}} 
          value={search}
          placeholder='Search Exercises'
          type='text'
          />
        <Button
        variant='contained'
        color='error'
        sx={{
          bgcolor: '#FF2625',
          color: '#FFF',
          textTransform: 'none',
          width: { lg: '175px', xs: '100px'},
          fontSize: { lg: '20px',  xs: '14px'},
          height: '56px',
          position: 'absolute',
          right: '0'
        }}
        onClick={handleSearch}>Search</Button>
      </Box>
      <Box sx={{ position:'relative', width: '100%', p: '20px'}}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercises