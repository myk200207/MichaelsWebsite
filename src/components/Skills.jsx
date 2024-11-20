import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Skills = () => {
  return (
    <>
      <section className="flex flex-col flex-wrap h-auto min-h-screen  text-center text-white justify-start items-center gap-4 2xl:px-32" id="SkillPage">
        <div className="my-20">
          <h1 className="font-bold text-5xl">Skills</h1>
          <br/>
          <div >Here are some things I am good at</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="p-2">
            <div className="flex-1 flex flex-row">
              <div className="px-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  fill="white"
                  className="bi bi-filetype-java"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.521 15.175a1.3 1.3 0 0 1-.082-.466h.765a.6.6 0 0 0 .073.27.5.5 0 0 0 .454.246q.285 0 .422-.164.138-.165.138-.466V11.85h.79v2.725q0 .66-.357 1.005-.354.345-.984.345a1.6 1.6 0 0 1-.568-.094 1.1 1.1 0 0 1-.408-.266 1.1 1.1 0 0 1-.243-.39m3.972-.354-.314 1.028h-.8l1.342-3.999h.926l1.336 3.999h-.84l-.314-1.028zm1.178-.59-.49-1.616h-.035l-.49 1.617zm2.342 1.618h.952l1.327-3.999h-.878l-.888 3.138h-.038L8.59 11.85h-.917zm3.087-1.028-.314 1.028h-.8l1.342-3.999h.926l1.336 3.999h-.84l-.314-1.028zm1.178-.59-.49-1.616h-.035l-.49 1.617z"
                  />
                </svg>
              </div>
              <div>
                <p className="px-6">
                  Java became one of my favorite language to use after data
                  structure and algorithm and software essential class where I
                  had to do most of my assignments and projects in Java. It was
                  a hard language to learn but it was one of the most engaging
                  exciting languages to program with. I used many frameworks,
                  libraries, and tools that can be used with Java as JavaFX,
                  Gradle, Maven, JUnit, Mockito, and Hibernate. It is on my
                  bucket list and am eager to learn Spring, Swing, Docker Java,
                  Apache, and more in the future.
                </p>
              </div>
            </div>
          </div>
          <div className="p-2">
            <div className="flex-1 flex flex-row">
              <div className="px-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  fill="white"
                  className="bi bi-filetype-py"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 4.5V14a2 2 0 0 1-2 2H7v-1h5a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM0 11.85h1.6q.434 0 .732.179.302.175.46.477t.158.677-.16.677q-.158.299-.464.474a1.45 1.45 0 0 1-.732.173H.79v1.342H0zm2.06 1.714a.8.8 0 0 0 .085-.381q0-.34-.185-.521-.185-.182-.513-.182H.788v1.406h.66a.8.8 0 0 0 .374-.082.57.57 0 0 0 .238-.24m2.963.75v1.535H4.23v-1.52L2.89 11.85h.876l.853 1.696h.032l.856-1.696h.855z"
                  />
                </svg>
              </div>
              <div>
                <p className="px-6">
                  Python was the first programming language that I learned, and
                  because I had a good and positive learning experience, I
                  decided to pursue programming. I got a chance to do create a
                  simple project that would encrypt a message by generating RSA
                  encryption and decryption key. I made Another project that
                  enabled facial recognition and could be used in multiple apps
                  such as banking, social-media, and other.
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 ">
            <div className="flex-1 flex flex-row">
              <div className="px-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  fill="currentColor"
                  className="bi bi-filetype-js"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 4.5V14a2 2 0 0 1-2 2H8v-1h4a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.186 15.29a1.2 1.2 0 0 1-.111-.449h.765a.58.58 0 0 0 .255.384q.105.073.249.114.143.041.319.041.246 0 .413-.07a.56.56 0 0 0 .255-.193.5.5 0 0 0 .085-.29.39.39 0 0 0-.153-.326q-.151-.12-.462-.193l-.619-.143a1.7 1.7 0 0 1-.539-.214 1 1 0 0 1-.351-.367 1.1 1.1 0 0 1-.123-.524q0-.366.19-.639.19-.272.528-.422.336-.15.776-.149.457 0 .78.152.324.153.5.41.18.255.2.566h-.75a.56.56 0 0 0-.12-.258.6.6 0 0 0-.247-.181.9.9 0 0 0-.369-.068q-.325 0-.513.152a.47.47 0 0 0-.184.384q0 .18.143.3a1 1 0 0 0 .405.175l.62.143q.327.075.566.211.24.136.375.358t.135.56q0 .37-.188.656a1.2 1.2 0 0 1-.539.439q-.351.158-.858.158-.381 0-.665-.09a1.4 1.4 0 0 1-.478-.252 1.1 1.1 0 0 1-.29-.375m-3.104-.033A1.3 1.3 0 0 1 0 14.791h.765a.6.6 0 0 0 .073.27.5.5 0 0 0 .454.246q.285 0 .422-.164.138-.165.138-.466v-2.745h.79v2.725q0 .66-.357 1.005-.354.345-.984.345a1.6 1.6 0 0 1-.569-.094 1.15 1.15 0 0 1-.407-.266 1.1 1.1 0 0 1-.243-.39"
                  />
                </svg>
              </div>
              <div>
                <p className="px-6">
                  My first job mainly entailed fullstack development using
                  javascript. I have developed numerous websites that enabled
                  government clients to record and manage their personnel,
                  projects, teams, organizations, and finances. After my first
                  job, it became my strongest and most proficient programming
                  language.
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 ">
            <div className="flex-1 flex flex-row">
              <div className="px-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  heigth="70"
                  fill="white"
                  className="bi bi-filetype-sql"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 4.5V14a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM0 14.841a1.13 1.13 0 0 0 .401.823q.194.162.478.252c.284.09.411.091.665.091q.507 0 .858-.158.355-.159.54-.44a1.17 1.17 0 0 0 .187-.656q0-.336-.135-.56a1 1 0 0 0-.375-.357 2 2 0 0 0-.565-.21l-.621-.144a1 1 0 0 1-.405-.176.37.37 0 0 1-.143-.299q0-.234.184-.384.187-.152.513-.152.214 0 .37.068a.6.6 0 0 1 .245.181.56.56 0 0 1 .12.258h.75a1.1 1.1 0 0 0-.199-.566 1.2 1.2 0 0 0-.5-.41 1.8 1.8 0 0 0-.78-.152q-.44 0-.776.15-.337.149-.528.421-.19.273-.19.639 0 .302.123.524t.351.367q.229.143.54.213l.618.144q.31.073.462.193a.39.39 0 0 1 .153.325q0 .165-.085.29A.56.56 0 0 1 2 15.31q-.167.07-.413.07-.176 0-.32-.04a.8.8 0 0 1-.248-.115.58.58 0 0 1-.255-.384zm6.878 1.489-.507-.739q.264-.243.401-.6.138-.358.138-.806v-.501q0-.556-.208-.967a1.5 1.5 0 0 0-.589-.636q-.383-.225-.917-.225-.527 0-.914.225-.384.223-.592.636a2.14 2.14 0 0 0-.205.967v.5q0 .554.205.965.208.41.592.636a1.8 1.8 0 0 0 .914.222 1.8 1.8 0 0 0 .6-.1l.294.422h.788ZM4.262 14.2v-.522q0-.369.114-.63a.9.9 0 0 1 .325-.398.9.9 0 0 1 .495-.138q.288 0 .495.138a.9.9 0 0 1 .325.398q.115.261.115.63v.522q0 .246-.053.445-.053.196-.155.34l-.106-.14-.105-.147h-.733l.451.65a.6.6 0 0 1-.251.047.87.87 0 0 1-.487-.147.9.9 0 0 1-.32-.404 1.7 1.7 0 0 1-.11-.644m3.986 1.057h1.696v.674H7.457v-3.999h.79z"
                  />
                </svg>
              </div>
              <div>
                <p className="px-6">
                  I have used SQL for probably most of my client's work. I have
                  imported sharepoint database and created internal database
                  using Alasql and have build an asp.net project using entity
                  framework integrated with Sqlite for storing and managing
                  government's military assets.
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 my-9">
            <div className="flex-1 flex flex-row">
              <div className="px-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  heigth="70"
                  fill="white"
                  className="bi bi-filetype-css"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.397 14.841a1.13 1.13 0 0 0 .401.823q.195.162.478.252.284.091.665.091.507 0 .859-.158.354-.158.539-.44.187-.284.187-.656 0-.336-.134-.56a1 1 0 0 0-.375-.357 2 2 0 0 0-.566-.21l-.621-.144a1 1 0 0 1-.404-.176.37.37 0 0 1-.144-.299q0-.234.185-.384.188-.152.512-.152.214 0 .37.068a.6.6 0 0 1 .246.181.56.56 0 0 1 .12.258h.75a1.1 1.1 0 0 0-.2-.566 1.2 1.2 0 0 0-.5-.41 1.8 1.8 0 0 0-.78-.152q-.439 0-.776.15-.337.149-.527.421-.19.273-.19.639 0 .302.122.524.124.223.352.367.228.143.539.213l.618.144q.31.073.463.193a.39.39 0 0 1 .152.326.5.5 0 0 1-.085.29.56.56 0 0 1-.255.193q-.167.07-.413.07-.175 0-.32-.04a.8.8 0 0 1-.248-.115.58.58 0 0 1-.255-.384zM.806 13.693q0-.373.102-.633a.87.87 0 0 1 .302-.399.8.8 0 0 1 .475-.137q.225 0 .398.097a.7.7 0 0 1 .272.26.85.85 0 0 1 .12.381h.765v-.072a1.33 1.33 0 0 0-.466-.964 1.4 1.4 0 0 0-.489-.272 1.8 1.8 0 0 0-.606-.097q-.534 0-.911.223-.375.222-.572.632-.195.41-.196.979v.498q0 .568.193.976.197.407.572.626.375.217.914.217.439 0 .785-.164t.55-.454a1.27 1.27 0 0 0 .226-.674v-.076h-.764a.8.8 0 0 1-.118.363.7.7 0 0 1-.272.25.9.9 0 0 1-.401.087.85.85 0 0 1-.478-.132.83.83 0 0 1-.299-.392 1.7 1.7 0 0 1-.102-.627zM6.78 15.29a1.2 1.2 0 0 1-.111-.449h.764a.58.58 0 0 0 .255.384q.106.073.25.114.142.041.319.041.245 0 .413-.07a.56.56 0 0 0 .255-.193.5.5 0 0 0 .085-.29.39.39 0 0 0-.153-.326q-.152-.12-.463-.193l-.618-.143a1.7 1.7 0 0 1-.539-.214 1 1 0 0 1-.351-.367 1.1 1.1 0 0 1-.123-.524q0-.366.19-.639.19-.272.527-.422t.777-.149q.456 0 .779.152.326.153.5.41.18.255.2.566h-.75a.56.56 0 0 0-.12-.258.6.6 0 0 0-.246-.181.9.9 0 0 0-.37-.068q-.324 0-.512.152a.47.47 0 0 0-.184.384q0 .18.143.3a1 1 0 0 0 .404.175l.621.143q.326.075.566.211t.375.358.135.56q0 .37-.188.656a1.2 1.2 0 0 1-.539.439q-.351.158-.858.158-.381 0-.665-.09a1.4 1.4 0 0 1-.478-.252 1.1 1.1 0 0 1-.29-.375"
                  />
                </svg>
              </div>
              <div>
                <p className="px-10">
                 I saw the use and the power behind css, and learning it intrigued me because there were so many ways to create and modify the front-end using css. 
                 There are numerous and facinating properties to learn and they are all facinating. Most of my work entailed customizing websites with css along
                 with bootstraps and tailwind. 
                  
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 my-9">
            <div className="flex-1 flex flex-row">
              <div className="px-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  fill="currentColor"
                  className="bi bi-filetype-jsx"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.075 14.841a1.13 1.13 0 0 0 .401.823q.194.162.478.252.284.091.665.091.507 0 .858-.158.355-.158.54-.44a1.17 1.17 0 0 0 .187-.656q0-.336-.135-.56a1 1 0 0 0-.375-.357 2 2 0 0 0-.565-.21l-.621-.144a1 1 0 0 1-.405-.176.37.37 0 0 1-.143-.299q0-.234.184-.384.188-.152.513-.152.214 0 .37.068a.6.6 0 0 1 .245.181.56.56 0 0 1 .12.258h.75a1.1 1.1 0 0 0-.199-.566 1.2 1.2 0 0 0-.5-.41 1.8 1.8 0 0 0-.78-.152q-.44 0-.776.15-.337.149-.528.421-.19.273-.19.639 0 .302.123.524t.351.367q.229.143.54.213l.618.144q.31.073.462.193a.39.39 0 0 1 .153.326.5.5 0 0 1-.085.29.56.56 0 0 1-.255.193q-.167.07-.413.07-.176 0-.32-.04a.8.8 0 0 1-.248-.115.58.58 0 0 1-.255-.384zM0 14.791q0 .247.082.466.083.22.243.39.165.17.407.267.246.093.569.093.63 0 .984-.346.357-.345.358-1.004v-2.725h-.791v2.745q0 .302-.138.466t-.422.164a.5.5 0 0 1-.454-.246.6.6 0 0 1-.073-.27zm8.907-2.859H9.8l-1.274 2.007L9.78 15.93h-.908l-.85-1.415h-.035l-.853 1.415h-.861l1.24-2.016-1.228-1.983h.931l.832 1.438h.036l.823-1.438Z"
                  />
                </svg>
              </div>
              <div>
                <p className="px-6">
                    React was one of my first frameworks I wanted to learn because of the ease of developing an application using this component-based UI framework, and also it is widely accepted and used among multiple companies. I have developed this personal website using
                    react and developed an IOS/Android app using expo and react-native.  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export default Skills
