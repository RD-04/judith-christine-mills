import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function About() {
  return (
    <div className="about">
      {/* <div class="col-md-12" id="toppic" style={{backgroundImage:"background.jpg"}}>
          <img alt="" src="background.jpg" id="pictop"/>
            
            </div>  */}
      <div class="container-fluid" id="main">
        <div class="row">
          
          <div class="col-md-5" id="pics">
          <Carousel autoplay>
          <div>
            <img alt="" src="https://www.canscaip.org/resources/Pictures/2020%20ART%20SHOW/JudithMillsphoto.jpg"/>
        </div>
        <div>
        <img src="/judith-mills-scans-merged-7.jpg" />
        </div>
        <div>
            <img alt="" src="https://www.canscaip.org/resources/Pictures/2020%20ART%20SHOW/JudithMillsJoyride.JPG"/>
        </div>
        <div>
            <img alt="" src="	https://pictures.abebooks.com/isbn/9781552635513-us-300.jpg"/>
        </div>
        <div>
            <img alt="" src="/jcmills2_0.jpg"/>
        </div>
    </Carousel>
          </div>
          <div class="col-md-7" >
            <h1 id="about" align="center">Judith Christine Mills</h1>
            <br/>
            <p id="aboutpara">
            Judith Christine Mills is a sculptor, painter, author and illustrator. Weaving her love of history and the natural world into both her art and stories, Mills divides her time between Toronto and the shores of southern Georgian Bay. Her paintings and sculptures can be found in many private and corporate collections including those of Anne Murray, The Toronto Board of Education, The Hospital for Sick Children, The Canada Council for The Arts, Esso Resources, Shell Oil Canada and The City of Toronto Art Collection. Over the years, she has participated in group and solo exhibitions in Toronto, Halifax, Montreal, Calgary, Edmonton, Chicago, Baltimore and Kennebunkport, Maine. Her illustrations and medallic art have been exhibited at The National Gallery in Ottawa, The Musee des beaux-arts in Montreal, The Norman and Sarah Brown Gallery in Baltimore, The Fort York National Monument, The Sculptor's Society of Canada, and The International Medal Congress in Ottawa (2018) and Tokyo (2020/21). Her illustrated books and novels have been translated into Danish, German, Italian, Korean, Japanese and Russian. Memberships include CANSCAIP  (The Canadian Society of Children's Authors, Illustrators and Performers), The Writer's Union of Canada, The Medallic Art Society of Canada, and The International Art Medal Federation.
            </p>
          </div>
        </div>
        <br/>
        <hr/>
        <br/>
        <div class="col-md-12">
          <div>
            <h1 id="awards">
            AWARDS & HONOURS
            </h1>
            <br/>
          </div>
        </div>
        <div class="row">
        <div class="col-md-6">
          <div>
          <strong>*Ontario Library Association Red Maple Award</strong> - 2003 Finalist for "The Sacred Seal"
          <br/>
          <strong>*Ontario Library Association Blue Spruce Award</strong> - 2001 Shortlist for "Wild Cameron Women"  
          <br/>
          <strong>*CBC Radio's "This Morning" Book Panel</strong> - Best Books List for Fall 2001 for "The Sacred Seal"
          <br/>
          <strong>*Winnipeg Free Press</strong> - Children's Choice Pick for "The Messengers"
          <br/>
          <strong>*Children's Librarians Association of Suffolk County, Long Island, N.Y.</strong> - Favourite Picture Books for "The Boy Who Stuck Out His Tongue"
          <br/>
          <strong>*Smithsonian Magazine</strong> - 1999 Notable Book Award for "While The Bear Sleeps"
          <br/>
          <strong>*PBS Television</strong> - 2002 Parent Recommended Title for "While The Bear Sleeps"
          <br/>
          <strong>*The Canadian Toy Testing Council</strong> - 2001 Top Books for "Wild Cameron Women"  &  2002 Top Books for "The Sacred Seal"
          <br/>
          <strong>*The Canadian Children's Book Centre Our Choice Awards:</strong>   "Bridge 6" (1999) "Wild Cameron Women" (2000) 
          <br/>"The Boy Who Stuck Out His Tongue" (2001)
          <br/>
          "The Sacred Seal" (2003) "The Book Of The Sage" (2005)
          <br/>
          "Carew" (2007)

          </div>
        </div>
        <div class="col-md-6">
          <div>
          <strong>*World Storytelling Resource Award</strong> - 2002 for "While The Bear Sleeps"
          <br/>
          <strong>*Resource Links Best Books -</strong> 2005 (Grades 7-12 category) "The Strange Voyage Of The Raconteur"  &  2007 (picture book category) "The Painted Chest"
          <br/>
          <strong>*Mississauga Arts Awards </strong>
Literary Finalist 2003
<br/>
Literary Winner 2006
<br/>
<strong>*Amelia Frances Howard Gibbon Award for Illustration</strong> - 1999 Shortlist for "Bridge 6"
<br/>
<strong>*Downtown Public Art Guide and Walk</strong> - Cornwall Centre in Regina, Saskatchewan - sculpture "Regina"
<br/>
<strong>*"The Sacred Seal" (Book One of The Goodfellow Chronicles) </strong>swas one of six Canadian children's book titles to be chosen to appear on 500,000 CHEERIOS cereal boxes in 2001/2002 along with a biography (written by J.C.Mills) of figure skating pairs champions (and susequent gold medallists) Jamie Sale and Davis Pelletier in a nationwide literacy program promoting Canadian athletes at the 2002 Olympic Winter Games in Salt Lake City, Utah.
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default About;
