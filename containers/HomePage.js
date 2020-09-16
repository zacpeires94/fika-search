import React, { useEffect, useState} from 'react';
import { ScrollView } from 'react-native';
import { LargeBrandText, RegularBodyText } from '../components/Typography';
import { FullPageDarkContainer } from '../components/Background'
import styled from 'styled-components';
import axios from 'axios';

const BrandLogo = styled.View`
    border-radius: 3px;
    background: rgb(245, 197, 24);
    color: black;
    width: 62px;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    width: auto;
    height: auto;
    padding: 12px;
    margin-bottom: 70px;
`;

const ImageContainer = styled.View`
    justify-content: flex-start;
    margin-right: 20px;
`;

const FilmImage = styled.Image`
    height: 300px
`;






export default ( ) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getAndEditMovies = async () => {
            const movies = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1');
            const genres = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US');
            const updatedMovies = movies.data.results.map(movie => {
                let namedGenres = [];
                  movie.genre_ids.forEach(genreId =>{
                      genres.data.genres.forEach(genre => {
                          if (genre.id === genreId) {
                            namedGenres.push(genre.name)
                          }
                      })
                  })
                  let updatedMovie = {...movie};
                  updatedMovie.genre_ids = namedGenres.join(', ');
                  return updatedMovie
              })
              setMovies(updatedMovies)
        }
       
    
        getAndEditMovies();

    }, [])

    return (
        <FullPageDarkContainer>
            <BrandLogo>
            <LargeBrandText brandLogo>
                Fika Search
            </LargeBrandText>
            </BrandLogo>
            <LargeBrandText>
                Featured today
            </LargeBrandText>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    movies.map((movie, index) => {
                        return (
                         <ImageContainer key={index}>
                            <FilmImage resizeMode={'contain'} source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}} />
                            <RegularBodyText homePageImage>
                                {movie.genre_ids}
                            </RegularBodyText>
                           </ImageContainer>
                        )
                    })
                }
            </ScrollView>
        </FullPageDarkContainer>
    )
}

