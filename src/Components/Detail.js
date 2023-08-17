import React, { useEffect, useState } from 'react';
import { Typography, Stack, Button, Skeleton } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png'


function Detail({ exerciseDetail }) {
    const tempDetail = { bodyPart: '', giftUrl: '', name: '', target: '', equipment: '' }
    const [detail, setDetail] = useState(tempDetail);
    const { bodyPart, gifUrl, name, target, equipment } = detail;

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ];

    useEffect(() => {
        
        if (exerciseDetail) {
            setDetail(exerciseDetail)
        }
    }, [exerciseDetail])


    return (
        <Stack gap="60px" sx={{
            flexDirection: { lg: 'row' }, p: '20px',
            alignItems: 'center',
        }}>
            <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />:

            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
                <Typography variant='h4' textTransform={'capitalize'}>
                    {name}
                </Typography>
                <Typography >Exercises keep you strong.{' '}
                    <span style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>{name}</span> bup is one of the best  exercises to target your {target}. It will help you improve your{' '}
                    mood and gain energy.</Typography>
                {extraDetail?.map((item, index) => (
                    <Stack key={index} direction="row" gap="24px" alignItems="center">
                        <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
                            <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
                        </Button>
                        <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}

export default Detail