import React, { useEffect, useState, useContext } from 'react';
import { Pagination, Box, Typography, Stack } from '@mui/material';
import { fetchData, exercisesOptions } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import { ListExercisesContext } from '../App';

function Exercises({ setExercises, exercises, bodyPart }) {
  const [exercisesPerPage] = useState(6)
  const [currentPage, setCurrentPage] = useState(1);
  const { listExercises: exercisesList } = useContext(ListExercisesContext);

  useEffect(() => {

    console.log(exercisesList)
    let exercisesData = [];
    if (bodyPart === 'all') {
      exercisesData = exercisesList
    } else {
      exercisesData = exercisesList.filter((exercise) => (
        exercise.bodyPart == bodyPart
      ));
    }

    setExercises(exercisesData);
  }, [bodyPart, exercisesList]);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };



  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  return (
    <Box id='exercises'
      sx={{ mt: { lg: '110px' } }}
      mt='50px'
      p='20px'>
      <Typography variant='h3' mb='46px'>
        Showing Result
      </Typography>
      <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap={'wrap'} justifyContent={'center'}>
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > 9 && (
          <Pagination
            count={Math.ceil(exercises.length / exercisesPerPage)}
            color='standard'
            shape='rounded'
            defaultPage={1}
            page={currentPage}
            onChange={paginate}
            size='large' />
        )}

      </Stack>

    </Box>
  )
}

export default Exercises