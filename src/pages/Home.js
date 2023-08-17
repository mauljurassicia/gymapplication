import { useState } from 'react';
import { Box } from '@mui/material';
import SearchExercises from '../Components/SearchExercises';
import HeroBanner from '../Components/HeroBanner';
import Exercises from '../Components/Exercises';

function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HeroBanner />
      <SearchExercises setBodyPart={setBodyPart} setExercises={setExercises} bodyPart={bodyPart}/>
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  )
}

export default Home