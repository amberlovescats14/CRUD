import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Link } from 'react-router-dom'
import Router from './Router'
import Johnson from './components/details/Johnson'
import Rhett from './components/details/Rhett'
import Grande from './components/details/Grande'
import Starlito from './components/details/Startlito'
import Gates from './components/details/Gates'

export default {
  home: "HOME",
  music : [
    {
      id: 1,
      artist: "Cody Johnson",
      song: "On my way to you",
      year: 2018,
      genre: "Country",
      link: <Link to="/details/CodyJohnson">Music</Link>
    },
    {
      id:2,
      artist: "Thomas Rhett",
      song: "Remember you young",
      year: 2019,
      genre: "country",
      link: "Thomas-Rhett"
      // link: <Link to="/details/ThomasRhett">Music</Link>

    },
    {
      id: 3,
      artist: "Ariana Grande",
      song: "7 Rings",
      year: 2019,
      genre: "Hip-Hop",
      link: "Ariana-Grande"
      // link: <Link to="/details/ArianaGrande">Music</Link>

    },
    {
      id: 4,
      artist: "Starlito ft. Don Trip",
      song: "My Love",
      year: 2017,
      genre: "Rap",
      link: "Starlito"
      // link: <Link to="/details/Starlito">Music</Link>

    },
    {
      id: 5,
      artist: "Kevin Gates",
      song: "World Luv",
      year: 2019,
      genre: "Rap",
      link: "Kevin-Gates"
      // link: <Link to="/details/KevinGates">Music</Link>

    }
  ]
}


