import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './Components/Navbar';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Footer from './Components/Footer';
import { createContext, useEffect, useState } from 'react';
import { exercisesOptions, fetchData } from './utils/fetchData';

import './App.css';

export const ListExercisesContext = createContext()

function App() {
  const [listExercises, setListExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchDataExerciseList = async () => {
      const exercisesList = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);
      setListExercises(exercisesList);

      const bodyParts = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions);

      setBodyParts(['all', ...bodyParts]);
    }

    fetchDataExerciseList()
  }, [])



  return (
    <ListExercisesContext.Provider value={{listExercises, bodyParts}} >
      <Box width='400px' sx={{ width: { xl: '1488px' } }} m="auto" >
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exercise/:id' element={< ExerciseDetail />} />
        </Routes>
        <Footer />
      </Box>
    </ListExercisesContext.Provider>
  )
}

export default App