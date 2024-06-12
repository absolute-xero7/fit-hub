import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

            setBodyParts(['all', ...bodyPartsData])
        }

        fetchExercisesData()
    }, [])

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)

            const searchedExercises = exercisesData.filter(
                (item) => item.name.toLowerCase().includes(search)
                    || item.target.toLowerCase().includes(search)
                    || item.equipment.toLowerCase().includes(search)
                    || item.bodyPart.toLowerCase().includes(search),
            )

            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })

            setSearch('')
            setExercises(searchedExercises)
        }
    }

    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} fontFamily='Nunito' color='#FFFFFF' mb="49px" textAlign="center">
                The Only Exercise Database <br /> You'll Ever Need
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    height="76px"
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '80px',
                            color: 'black', // Default text color
                            fontFamily: 'Nunito',
                        },
                        width: {
                            lg: '1170px',
                            md: '800px', // Width for medium screens
                            sm: '500px', // Width for small screens
                            xs: '320px'
                        },
                        fontFamily: 'Nunito',
                        backgroundColor: 'white', // Default background color
                        borderRadius: '20px',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'white', // Default border color
                                borderRadius: '20px',
                            },
                            '&:hover fieldset': {
                                borderColor: 'white', // Border color on hover
                                borderRadius: '20px',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'white', // Border color when focused
                                borderRadius: '20px',
                            },
                            '&:hover': {
                                backgroundColor: 'white', // Background color on hover
                                borderRadius: '20px',
                                '& input': {
                                    color: 'black', // Text color on hover
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'black', // Label color on hover
                                },
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: 'white', // Default label color
                            '&.Mui-focused': {
                                color: 'white', // Label color when focused
                            },
                        },
                    }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercises"
                    type="text"
                    variant="outlined"
                />
                <Button
                    className="search-btn"
                    sx={{
                        bgcolor: '#000000',
                        color: '#FFFFFF',
                        textTransform: 'none',
                        border: '2px solid',
                        borderRadius: '20px',
                        width: { lg: '173px', xs: '80px' },
                        height: '56px',
                        position: 'absolute',
                        right: '0px',
                        fontSize: { lg: '20px', xs: '14px' },
                        '&:hover': {
                            bgcolor: '#000000', // Background color on hover
                            color: '#000000', // Text color on hover
                            borderColor: '#000000', // Border color on hover
                        }
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
            </Box>
        </Stack>
    )
}

export default SearchExercises