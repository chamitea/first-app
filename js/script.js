'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm1 = prompt('Один из последних просмотренных фильмов?',''),
      scoreOfLastFilm1 = prompt('На сколько оцените его?',''),
      lastFilm2 = prompt('Один из последних просмотренных фильмов?',''),
      scoreOfLastFilm2 = prompt('На сколько оцените его?','');

personalMovieDB.movies[lastFilm1] = scoreOfLastFilm1;
personalMovieDB.movies[lastFilm2] = scoreOfLastFilm2;

console.log(personalMovieDB);