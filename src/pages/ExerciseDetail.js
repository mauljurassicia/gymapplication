import { useState, useEffect, useContext, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Detail from '../Components/Detail';
import ExerciseVideos from '../Components/ExerciseVideos';
import SimilarExercises from '../Components/SimilarExercises';
import { ListExercisesContext } from '../App';
import { fetchData, youtubeOptions } from '../utils/fetchData';



function ExerciseDetail() {
  const { listExercises } = useContext(ListExercisesContext);
  const [exerciseDetail, setExercisesDetail] = useState(undefined);
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();
  const count = useRef(1);


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setExercisesDetail(listExercises.find(exercise => exercise.id === id));

    setTargetMuscleExercises(listExercises.filter(exercise => exercise.target === exerciseDetail?.target));

    setEquipmentExercises(listExercises.filter(exercise => exercise.equipment ===
      exerciseDetail?.equipment))

    if (exerciseDetail) {
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      const fetchYoutube = async () => {
        const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetail.name} exercise`, youtubeOptions);
        if(exerciseVideosData){
          setExerciseVideos(exerciseVideosData.contents);}

      }

      fetchYoutube();
    }

    console.log(`how many time is run ${count.current}`)
    count.current = count.current + 1;


  }, [id, listExercises, exerciseDetail]);


  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail?.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail