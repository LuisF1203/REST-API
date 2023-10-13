"use strict";

class Movie{
    constructor(title, director, year, genre) {
        this.title = title;
        this.director = director;
        this.year = year;
        this.genre = genre;
    }


    // Getter para el título de la película
    get getTitle() {
        return this.title;
    }

    // Setter para el título de la película
    set setTitle(newTitle) {
        this.title = newTitle;
    }

    // Getter para el director de la película
    get getDirector() {
        return this.director;
    }

    // Setter para el director de la película
    set setDirector(newDirector) {
        this.director = newDirector;
    }

    // Getter para el año de la película
    get getYear() {
        return this.year;
    }

    // Setter para el año de la película
    set setYear(newYear) {
        this.year = newYear;
    }

    // Getter para el género de la película
    get getGenre() {
        return this.genre;
    }

    // Setter para el género de la película
    set setGenre(newGenre) {
        this.genre = newGenre;
    }




    static generateMovie(movie) {
        let title = movie.title;
        let director = movie.director;
        let year = movie.year;
        let genre = movie.genre;
        return new Movie(title, director, year, genre);
    }

}


module.exports = Movie;