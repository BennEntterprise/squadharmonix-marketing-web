import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import HorizontalColorBand from '../../components/HorizontalColorBand'
import './meettheteachers.css'

import Annie from '../../images/square headshots/teachers/Teachers - Annie.jpg'
import Christina from '../../images/square headshots/teachers/Teachers - Christina.jpg'
import Johanna from '../../images/square headshots/teachers/Teachers - Johanna.jpg'
import Laura from '../../images/square headshots/teachers/Teachers - Laura.jpg'
import Matt from '../../images/square headshots/teachers/Teachers - Matt.jpg'
import Parker from '../../images/square headshots/teachers/Teachers - Parker.jpg'

function MeetTheTeachers() {
  return (
    <Container fluid id='meettheteachers'>
      <Row>
        <Col xs='12' sm='12' md='12' lg='6' xl='6'>
          <div className='teachers-container'>
            <div className='teacher-profile'>
              <HorizontalColorBand
                className='mb-4 bg-flower'
                height='30px'
                color='#fec5e9'
                style={{ width: '100%', marginBottom: '50px' }}
              />
              <img
                src={Laura}
                className='teacher-photo-l'
                alt='Teach profile photo'
              />
              <p className='bio-text font-p liberation-sans'>
                <strong>Laura Saggers</strong> (
                <em>Director/Voice Commander</em>) hails from an intense
                background of music education with 12 years studying classical
                piano with the Associated Board of the Royals Schools of Music
                in England to completing a Diploma in Vocal Performance and
                finally, finishing her degree in Music Business at the Academy
                of Contemporary Music. Laura has since moved to the US to pursue
                her career as a professional pianist and singer gaining an
                endorsement with Roland keyboards,performing up and down the
                country at multiple venues such at MGM Grand Hotel, the
                Venetian, headlining at Universal Studios for New Years and July
                4th to supporting bands such as Bow Wow Wow on tour. Laura is an
                independent singer/songwriter who performs weekly in Los Angeles
                with albums available on iTunes and Spotify.
                <br />
                <br />
                Laura has always had a huge affinity to teaching. It simple
                fascinates her and she has put just as much energy into crafting
                her skill as a musician as she has in her knowledge of teaching.
                She ADORES children and they adore her. She opened the Laura
                Jean Music Academy in 2014 and has had consistently 42+ weekly
                private students and a waiting list of more than 15 students
                ever since.
                <br />
                <br />
                With all her experience in the industry and with years of
                crafting her teaching skills Laura decided to start a
                professional vocal group for kids; a center that educates
                students in vocal performance, theory and offers incredible live
                performance opportunities where every student has the ability to
                shine if they work hard and dedicate themselves to their craft.
                <br />
                <br />
                “I spent years studying how to play and perform music but it
                wasn’t until I got into the real world and started performing
                live that the real education began. I want that for my students.
                However, just like in life, you have to earn it. Nothing will be
                handed to you and that’s one of the many life lessons we promote
                at Squad Harmonix. Children are our future and it takes a
                village to raise a child. We are proud to say that we take an
                active role in molding, motivating and supporting every single
                one of these kids in and outside of Squad Harmonix.”
              </p>
            </div>

            <div className='teacher-profile'>
              <HorizontalColorBand
                className='mb-3 bg-tortise'
                height='30px'
                style={{ width: '100%' }}
              />

              <img
                src={Matt}
                className='teacher-photo-l'
                alt='Teach profile photo'
              />
              <p className='bio-text font-p liberation-sans'>
                <strong>Matt Browne</strong> (<em>Voice Captain</em>) is an avid
                music educator, vocal arranger, and songwriter from Boston,
                Massachusetts. He received his bachelor’s of music in music
                business from the Frost School of Music at the University of
                Miami, where he studied music industry, songwriting, and
                commercial voice, and music directed and arranged for the
                award-winning a cappella group BisCaydence. He has been teaching
                voice lessons for years with a strict emphasis on all-around
                musicianship training with positive reinforcement.
                <br />
                <br />
                Through his teaching, he strives to expand many facets of
                musical excellence with his students, and works to develop an
                effective practice regiment tailored to each student for
                effective results. He has arranged for a cappella groups
                everywhere from the beginner to professional levels across the
                country, and has won state-wide, national, and international
                awards for his work with a cappella. He has also performed all
                around the country, most notably on the stages of Carnegie Hall,
                the Grand Ole Opry in Nashville, TN, and Broadway. He is
                currently an artist and songwriter, and releases music on
                streaming platforms under his stage persona, Matt Browne. He has
                also co-written songs for Janet Jackson, Beyoncé, and other
                artists. Matt is currently accepting voice and songwriting
                students.
              </p>
            </div>
            <div className='teacher-profile'>
              <HorizontalColorBand
                className='mb-4 bg-lightpurple'
                height='30px'
                style={{ width: '100%' }}
              />

              <img
                src={Annie}
                className='teacher-photo-l'
                alt='Teach profile photo'
              />

              <p className='bio-text font-p liberation-sans'>
                <strong>Annie Mauro</strong> (<em>Dance Captain</em>) is a
                singer, dancer, teacher, choreographer and choral arranger
                originally from Illinois, and she loves working with kids in
                performing arts. She was a competitive dancer with Aspire Dance
                Company in Illinois and also sang with and directed Girls Next
                Door A Cappella, a collegiate female a cappella group at the
                University of Illinois, where she also earned her choral music
                education degree. Upon relocating to Los Angeles in 2016, she
                began her professional teaching career as a K-4 music teacher.
              </p>
            </div>
          </div>
        </Col>
        <Col xs='12' sm='12' md='12' lg='6' xl='6'>
          <div className='teachers-container'>
            <div className='teacher-profile'>
              <HorizontalColorBand
                className='mb-4 bg-tortise'
                height='30px'
                style={{ width: '100%' }}
              />

              <img
                src={Parker}
                className='teacher-photo-l'
                alt='Teach profile photo'
              />
              <p className='bio-text font-p liberation-sans'>
                <strong>Parker Wright</strong> (<em>Beatboxing Commander</em>)
                was born and raised in Santa Barbara, CA. He has been beatboxing
                and singing professionally for almost 10 years and has graduated
                Cum Laude with a Bachelor in Professional Studies from Berklee
                College of Music. Parker is also an Avid Certified Pro Tools
                Operator. His obsession for singing and beatboxing originated
                from participating in Jazz Choir at high school and has
                developed into a full time career.
                <br />
                <br />
                Since then, Parker has performed for Katy Perry, supported
                Imogen Heap during her North American tour, was a featured
                artist on The X Factor, performed at various theme parks
                including Six Flags Magic Mountain, Disneyland, and Universal
                Studios Hollywood and is currently a performing member in the
                famous Harry Potter Frog Choir at Universal Studios.
                <br />
                <br />
                Not only a fearless performer, Parker is an avid music arranger
                for several a cappella performing groups including Squad
                Harmonix, City Beat and the Wholiday Singers. He formed and
                manages his own holiday a cappella group, Jingle 5, which he
                arranges, beatboxes and performs with in and around the Los
                Angeles area during the holiday season.
                <br />
                <br />
                After only the first few days of working with Squad Harmonix he
                was hooked. He is an absolute natural with children, a joy to
                learn from and a kind hearted - hard working role model. With
                beatboxing being an uncommon skill there is no current industry
                standard for teaching beatboxing. Parker is therefore currently
                designing his very own beatboxing curriculum and the results so
                far are fantastic. If you have a child that loves to beatbox
                then you have come to the right place.
              </p>
            </div>
            <div className='teacher-profile'>
              <HorizontalColorBand
                className='mb-4 bg-lightpurple'
                height='30px'
                style={{ width: '100%' }}
              />

              <img
                src={Johanna}
                className='teacher-photo-l'
                alt='Teach profile photo'
              />
              <p className='bio-text liberation-sans'>
                <strong>Johanna</strong> (<em>Voice Lieutenant</em>) has been
                passionate about music since she was a toddler. At the age of 4
                she started playing piano, and has continued for 12 years
                training at the Laura Jean Music Academy. She has been singing
                constantly for as long as she can remember, whether it’s alone
                at home, or on the stage. Johanna is currently at her school
                deeply involved in the choir, a cappella groups, and performing
                at school events.
                <br />
                <br />
                She is so excited to be a part of Squad Harmonix, and can’t wait
                for her musicality to develop through this experience!
              </p>
            </div>
            <div className='teacher-profile'>
              <HorizontalColorBand
                className='mb-4 bg-flower'
                height='30px'
                style={{ width: '100%' }}
              />

              <img
                src={Christina}
                className='teacher-photo-l'
                alt='Teach profile photo'
              />
              <p className='bio-text'>
                <strong>Christina Martino</strong> (<em>Voice Lieutennant</em>)
                is from Westchester, New York and has been performing, singing
                and writing songs for most of her life. She received her
                Bachelor of Music from the Frost School of Music at the
                University Of Miami where she focused her studies on
                contemporary voice, songwriting and music business.
                <br />
                <br />
                With extensive training in vocal styles such as classical, jazz,
                musical theater, pop and rock, she has been able to teach many
                students with varied interests and goals. She is able to teach
                students voice, music theory, songwriting, arranging and guitar
                for songwriters. As well as being a singer, Christina is a
                performer, and songwriter at heart and is a working artist with
                original music on all streaming platforms (
                <a href='http://christinamartino.com'>christinamartino.com</a>).
                <br />
                <br />
                She also loves a cappella music and artistic directed,
                choreographed and arranged for her college group, Biscaydence,
                which placed 2nd at ICCA finals in 2019. Overall, Christina has
                a passion for connecting with others through music and loves to
                work with people to find their unique sound and abilities, while
                laying a foundation of technique. If you are an aspiring singer,
                performer and/or songwriter, you will be in good hands!
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default MeetTheTeachers
