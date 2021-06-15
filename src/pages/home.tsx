import React from 'react';
import './home.scss';
import {Chart1} from '../components/chart-1';
import {Chart2} from '../components/chart-2';
import {Chart3} from '../components/chart-3';
import {Chart4} from '../components/chart-4';

export const Home = () => {

    return (
        <div className='home'>
          <header />
          <main>
              <section className="section1">
                  <Chart1/>
                  <Chart2/>
              </section>
              <section className="section2">
                  <Chart3 />
                  <Chart4 />
              </section>
              <section className="section3 bordered" />
              <section className="section4 bordered" />
              <section className="section5 bordered" />
          </main>
         <footer>
            大屏数据平台利用大数据技术采集犯罪作案信息Copyright&copy;rourou
         </footer>
        </div>
    );
};
