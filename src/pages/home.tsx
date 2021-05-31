import React from 'react';
import './home.scss';
import {Chart1} from '../components/chart-1';
import {Chart2} from '../components/chart-2';

export const Home = () => {

    return (
        <div className='home'>
          <header />
          <main>
              <section className="section1">
                  <Chart1/>
                  <Chart2/>
              </section>
              <section className="section2 bordered" />
              <section className="section3 bordered" />
              <section className="section4 bordered" />
              <section className="section5 bordered" />
          </main>
        </div>
    );
};
