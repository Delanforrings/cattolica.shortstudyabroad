import React, {Component} from 'react';
import {MDBView, MDBContainer, MDBCol, MDBRow, MDBTableHead, MDBTableBody, MDBTable, MDBMask } from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./Life.css";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

class HavingFun extends React.Component {
    render () {
        return (
            <div id="Life">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Having fun in Milan</title>
                </Helmet>

                <MDBView className="banner"/>
                <br/>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size="10">
                            <h1>
                                Having fun in Milan
                            </h1>
                            <hr/>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="10">
                            <p>
                                Milan is recognized as a fashion and design capital, and has a major global influence in commerce, industry, music, sport, literature, art and media.
                            </p>

                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="10">
                            <p>
                                There is an extraordinary beauty to the city of Milan, one which has inspired the creativity behind some of the world's iconic fashion labels. Delight in the Piazzas and cafes, laneways and parklands. Feast on the culinary marvels of this city, renowned for affordable and exquisite food.
                            </p>

                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="10">
                            <p>
                                Milan is recognized as a fashion and design capital, and has a major global influence in commerce, industry, music, sport, literature, art and media.
                            </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="10">
                            <div id="pill_tabs">
                                <Tabs defaultActiveKey="enjoy" >
                                    <Tab eventKey="enjoy" title="Enjoy Milan">
                                        <br/>
                                        <p>
                                            Take advantage of the prime location of Cattolica in the heart of the city. The Cattolica campus challenges all expectations of a university setting. Designed by Renaissance architect Bramante it is part of the former monastery of St. Ambrose Basilica located in the heart of the historic city center where Roman ruins can still be found.
                                        </p>

                                        <p>
                                            The campus is just a few minutes from the bustling financial center, capital of the Italian economy, and is walking distance from the art and fashion districts that distinguish the city of Milan - a perfect blend of classicism and vibrant urban life.
                                        </p>

                                        <p>
                                            Between classes grab a coffee at a café in via Dante or have a picnic in the Parco Sempione, Milan’s Central Park. But you can decide to stay on campus and stroll through the cloisters and admire their beauty. Search out the tranquil Santa Caterina garden if you’re looking for peace and quiet to study or simply wanting to enjoy a beautiful day. Find everything you might need right outside your classroom.
                                        </p>
                                    </Tab>
                                    <Tab eventKey="places" title="Places to see">
                                        <br/>
                                        <h5>
                                            Navigli
                                        </h5>
                                        <p>
                                            The origins of the Navigli date back to about 1100, but this stretch of water was only made navigable from the Ticino to the center of Milan at the end of the 14th century, to help transport the marble that was needed to build the Duomo. Today the Naviglio Grande and the Naviglio Pavese (that connects Milan to Pavia) make up one of the most charming places in Milan, with the old, typical "case di ringhiera" houses, antique shops and hundreds of clubs, bars and restaurants standing on each side.
                                        </p>
                                        <br/>
                                        <h5>
                                            Brera
                                        </h5>
                                        <p>
                                            This is one of the most exclusive and fashionable places in Milan, with an atmosphere vaguely reminiscent of Paris, with its artists, open-air coffee shops and sophisticated boutiques. This area, which could be described as "luxury Bohemian", includes Via Brera, Via Solferino, Via Pontaccio and Corso Garibaldi.
                                        </p>
                                        <br/>
                                        <h5>
                                            Corso Como
                                        </h5>
                                        <p>
                                            Along this street there are many eighteenth century palaces including Palazzo Brera at number 28 Corso Como that houses the famous Pinacoteca. The area is also known for its nightlife as it contains many bars and clubs.
                                        </p>
                                        <br/>
                                        <h5>
                                            Parco Sempione
                                        </h5>
                                        <p>
                                            This Park stands behind Castello Sforzesco and is the ideal place to spend a Sunday afternoon in the sun and fresh air. The Park is home to monuments such as the Arena Napoleonica, the Tower designed by Giò Ponti and the Triennale di Milano.
                                        </p>
                                        <br/>
                                        <h5>
                                            Galleria Vittorio Emanuele
                                        </h5>
                                        <p>
                                            The gallery with its glass and iron structure was built around 1870 and is called the "salotto di Milano" (The Milan Lounge). It houses old coffee shops, restaurants, boutiques and historical bookshops.
                                        </p>
                                    </Tab>
                                    <Tab eventKey="monuments" title="Monuments and Churches">
                                        <br/>
                                        <h5>
                                            Castello Sforzesco
                                        </h5>
                                        <p>
                                            The Sforzesco castle and fortress, which dates back to 1450, has wonderful interior courtyards, built in Gothic-Renaissance style and incredible halls, designed by Leonardo, and frescos painted by master painters such as Bramante. The Castle now hosts important art exhibitions.
                                        </p>
                                        <br/>
                                        <h5>
                                            The Monumental Cemetery
                                        </h5>
                                        <p>
                                            This great cemetery was built around 1860 where some of the most famous people from Italian and European culture have been laid to rest, such as Alessandro Manzoni, Salvatore Quasimodo, Eugenio Montale and Maria Callas.
                                        </p>
                                        <br/>
                                        <h5>
                                            Royal Palace
                                        </h5>
                                        <p>
                                            The Royal Palace, in Piazza Duomo, dates back to 1100 and has been home to the most powerful men in Milan over the centuries, from the Viscontis to the Sforza family, the Spanish governors and Austrian rulers. Several temporary art exhibitions are held inside the building today.
                                        </p>
                                        <br/>
                                        <h5>
                                            La Scala Theater
                                        </h5>
                                        <p>
                                            A Temple to Opera music, built at the end of the 1700s over the remains of the Church of Santa Maria della Scala, from which the theater then took its name. Some of the greatest names in opera have made their debuts in this theater: Rossini, Donizetti, Bellini, Puccini and, in 1839, Giuseppe Verdi.
                                        </p>
                                        <br/>
                                        <h5>
                                            Columns of San Lorenzo
                                        </h5>
                                        <p>
                                            This is the only monument that dates back to the Roman era, which has managed to survive up to the present day. These sixteen columns that stand opposite the Basilica of San Lorenzo are all that remains of an ancient Roman temple, that probably dates back to the 2nd century.
                                        </p>
                                        <br/>
                                        <h5>
                                            The Duomo
                                        </h5>
                                        <p>
                                            The most outstanding example of Gothic-Lombard architecture, the Duomo dates back to 1300. Built on the wishes of Gian Galeazzo Visconti, this imposing religious building, second only to St Peter's Cathedral in Rome, houses almost 3,500 statues that are spread over an area of almost 12,000 square meters. The rooftop of the Duomo offers a magnificent view of the city and on clear days one can see the Alps to the north.
                                        </p>
                                        <br/>
                                        <h5>
                                            Basilica of Sant'Ambrogio
                                        </h5>
                                        <p>
                                            This is the symbol of Milan's religiousness. It was built in 379 A.D. in the Romanesque-Lombard style, and was consecrated by the famous Bishop Ambrogio, who lent his name to the Ambrosian Church. Inside there are valuable artifacts and works of art that tell the story of about 1,600 years of Milan's history.
                                        </p>
                                        <br/>
                                        <h5>
                                            Santa Maria delle Grazie
                                        </h5>
                                        <p>
                                            This church was built in the second half of the fifteenth century. It was only completed years later by "il Bramante" on the wishes of Ludovico il Moro. The famous architect designed the wonderful apse, the cloisters and the old sacristy. Leonardo da Vinci painted "The Last Supper" in the refectory, which is one of the most famous works of art ever painted.
                                        </p>
                                    </Tab>
                                    <Tab eventKey="events" title="Events in Milan">
                                        <br/>
                                        <h5>
                                            Fashion shows
                                        </h5>
                                        <p>
                                            These are held from January to March and from September to October each year and include:
                                        </p>
                                        <ul>
                                            <li>
                                                Milano Moda Uomo (Men's Fashion) autumn/winter (January)
                                            </li>
                                            <li>
                                                Milano Moda Donna (Women's Fashion) autumn/winter (February - March)
                                            </li>
                                            <li>
                                                Milano Moda Donna (Women's Fashion) spring/summer (September - October)
                                            </li>
                                        </ul>
                                        <br/>
                                        <h5>
                                            Vogue Fashion's night out
                                        </h5>
                                        <p>
                                            Held in over 16 countries, including Milan, Vogue Fashion's Night Out is a global initiative, sponsored by Vogue and the Council of Fashion Designers of America, and began as a means to encourage consumers to shop and support the fashion industry. The city transforms into an evening of shopping, events and socialization.
                                            Month: September
                                        </p>
                                        <br/>
                                        <h5>
                                            Design week, Salone del mobile, Fuorisalone
                                        </h5>
                                        <p>
                                            Design week is one of the most important, if not, the most important event in the world related to design: a series of events and exhibitions transform the city of Milan every year.
                                            Month: April
                                        </p>
                                        <br/>
                                        <h5>
                                            MiArt
                                        </h5>
                                        <p>
                                            MiArt is an international fair held in Milan every year in which modern and contemporary art communicates ideas, representations and everyday matters.
                                            Month: March
                                        </p>
                                        <br/>
                                        <h5>
                                            Fiera degli Obej-obej
                                        </h5>
                                        <p>
                                            On December 7th and 8th, during one of the festivities to honor Castello Sforzesco, the patron saint of the city, the Fiera degli "oh bei, oh bei" is organized around the Basilica di Sant'Ambrogio. During these two days there are market stalls of all kinds, some of them similar to the ones from Senigallia, flower stalls and sweet and cake stalls, all full of color that attract and amaze. The name of the fair comes from term that the stall owners used to catch the attention of the people passing by.
                                        </p>
                                        <br/>
                                        <h5>
                                            Milan Derby/Derby della Madonnina
                                        </h5>
                                        <p>
                                            Taking place at least twice during the year via the league fixtures, the Derby della Madonnina is a football match between the two prominent Milanese clubs A.C. Milan and Inter Milan of Italy.
                                        </p>
                                        <br/>
                                        <h5>
                                            Opera alla Scala
                                        </h5>
                                        <p>
                                            A world-renowned opera house in Milan, Italy. Date: season traditionally opens December
                                        </p>
                                        <br/>
                                        <h5>
                                            Triennale di Milano
                                        </h5>
                                        <p>
                                            Set up in 1923, with the intention of being the overview of the decorative arts and modern industries, and to stimulate relations between industry, production sectors and applied arts. The Triennale was soon found to be the mirror of artistic and architectural culture.
                                        </p>
                                        <br/>
                                        <h5>
                                            Serie A/ Champions League Soccer matches - from September to June
                                        </h5>
                                        <p>
                                            Milan is home to two of the most important Italian and European soccer teams, AC Milan and Inter Milan. Its stadium at San Siro, the Giuseppe Meazza, holds 80,000 seats and sells out regularly during the Serie A, the national league championship, and the UEFA Champions League games. San Siro is also the largest venue for concerts during the late Spring and Summer months.
                                        </p>
                                        <p>
                                            Travelling at the weekend to see other areas is easy to do because of the convenient transport links with other cities such as Genoa, Venice, Turin and Verona. The Alps are a couple of hours away, while Lake Como is close enough for a day trip. Hiking in the Cinque Terre would make a wonderful weekend trip while if you want a beach trip, both the Adriatic Sea and the Liguria coast are within easy reach.
                                        </p>
                                    </Tab>
                                </Tabs>
                            </div>

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}

export default HavingFun;
