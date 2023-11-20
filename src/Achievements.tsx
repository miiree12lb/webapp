import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// @ts-ignore
import "./css/achievements.css";
import Popup from "./PopupInterface.tsx";
// @ts-ignore
import diagram from "./assets/images/theoretical-diagram.png";
// @ts-ignore
import diploma from "./assets/images/Diploma_Mireia.png";
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

export default function Achievements(){
    const navigate = useNavigate();
    //first summer popup jic
    const [isFirstSummerJicOpen, setIsFirstSummerJicOpen] = useState(false);

    const openFirstSummerJic = () => {
        setIsFirstSummerJicOpen(true);
    }

    const closeFirstSummerJic = () => {
        setIsFirstSummerJicOpen(false);
    }
    
    const firstSummerJicTitle = "MonNatura Pirineus";

    const firstSummerJicContent = <div>
        <p>
            I was one of 12 candidates selected to participate in the program: 'Looking from the Sky: How Does Climate Change Affect Our Forests?'.
            The program lasted two weeks. We did theoretical lessons by researchers in the 'Universitat de Lleida' as well as went to the forest to analyze trees...
            always intending to answer two research questions:
            <ol>
                <li>How can climate change affect mountain forests?</li>
                <li>After a disturbance, some trees survive: How does the disturbance affect the resilience of these trees to climate change?</li>
            </ol>
        </p>
        <p>
            After that, I had to write a scientific article supervised by a researcher in the 'Universitat de Lleida' to get to the next phase of the program, the second summer.
            I decided to produce a systematic review of the factors that alter the quantity of carbon that urban trees can store as well as the effects that
            pollution has on the growth of urban trees. You can take a look to the article below. Thanks to the article I was assigned to the program in Geneva, NY
            during summer 2022.
        </p>
        <p className="read_more_inline" onClick={() => {navigate("/article")}}>Read Article</p>
    </div>

    //second summer popup jic
    const [isSecondSummerJicOpen, setIsSecondSummerJicOpen] = useState(false);

    const openSecondSummerJic = () => {
        setIsSecondSummerJicOpen(true);
    }

    const closeSecondSummerJic = () => {
        setIsSecondSummerJicOpen(false);
    }
    
    const secondSummerJicTitle = "Environmental Studies Summer Youth Institute (ESSYI)";

    const secondSummerJicContent = <div>
        <p>
            For the second summer, 'La Pedrera' Foundation has some reserved places in national research centers. All the participants take a look at 
            what every center offers and make a list of the 10 centers they like the most. They then distribute the places according to the article. However, 
            they also put on the list several international research centers to which we could apply.
        </p>
        <p>
            I decided to apply to the ESSYI program and I got selected. The program will take place between July 10 and July 23.
        </p>
    </div>

    //third summer popup jic
    const [isThirdSummerJicOpen, setIsThirdSummerJicOpen] = useState(false);

    const openThirdSummerJic = () => {
        setIsThirdSummerJicOpen(true);
    }
    
    const closeThirdSummerJic = () => {
        setIsThirdSummerJicOpen(false);
    }

    const thirdSummerJicTitle = "LMH Summer Programmes";

    const thirdSummerJicContent = <div>
        <p>
            In my third summer in the program I had the opportunity to go to the Lady Margaret Hall College at the Univeristy of Oxford.
            There were two different programs, I attended the course <i>'Artificial Intelligence and Machine Learning: Theory and Practice'</i>.
            This was a 3 week program, and each week we attended lectures in the morning, seminars in the afternoon, and there were some organized activities
            in the evening: ~add some examples :)~. Every week we had to submit an assignment and explain our approach to the tutor in the tutorial.
        </p>
        <p>
            The grade obtained at the end of the program was an average grade of the 3 assignments submitted. The assignments were about: ~update explanation lol~
            <ol>
                <li><b>Lineal Regression:</b></li>
                <li><b>Neural Networks:</b></li>
                <li><b>Convolutional Neural Networks:</b></li>
            </ol>
        </p>
        <p>
            During the weekends there were organized trips, where we could discover the culture of England. We had the opportunity to go to the 
            Blenheim Palace, and to London. In the trip to London, we visited the British Museum and walked around the city seeing the most iconing areas and buildings.
        </p>
    </div>

    //fisidabo popup
    const [isFisidaboPopupOpen, setIsFisidaboPopupOpen] = useState(false);

    const openFisidaboPopup = () => {
        setIsFisidaboPopupOpen(true);
    }

    const closeFisidaboPopup = () => {
        setIsFisidaboPopupOpen(false);
    }

    const fisidaboPopupTitle = "Fisidabo";

    const fisidaboPopupContent = <div>
        <h2>Theoretical Diagram</h2>
        <div style={{ textAlign: 'center' }}><img src={diagram} alt="diagram" width="80%"/></div>

        <h2>Description of the experiment</h2>
        <p>
            In this experiment to find how the degree of inclination of a Diavolo chair affects its speed, we will tape a box as light as possible to one of the chairs so 
            that it does not affect its travel. Inside the box we will have to attach a force sensor to the ceiling, from which we will hang a weight (black square in the diagram) 
            with a known mass, and on the floor of the box we will add an inclinometer that will be fixed with tape. The inclinometer will have to be recorded with video capture on 
            the mobile, and the values of the force sensor will be recorded with a camera placed inside the box. Before using the attraction, we will have to measure the distance of 
            the chair to the central point of the conical pendulum (value 'r' in the diagram). Therefore, when the Diavolo starts up, the two sensors will capture all the values of 
            the inclination (or angle) of the system, and all the values of the tension generated by the weight inside the box during a certain period of time.
        </p>

        <h2>Physical Concept</h2>
        <p>
            In a system like that of the box and the chair, the mass of the chair and that of the box can be considered as proportional and therefore, if you take into account that 
            the inclination would be the same, since the box is attached to the chair, Thales could be applied, and the same would happen with the tensions, then we know that the 
            relationship between the masses and the tensions of the chair and the box is as follows:

            <BlockMath math="\frac{T_1 \cdot \cos\theta}{m_1 \cdot g} = \frac{T_2 \cdot \cos\theta}{m_2 \cdot g} \implies \frac{T_1}{m_1} = \frac{T_2}{m_2}" />
        </p>

        <h2>Equations</h2>
        <ul>
            <li>Distance equation: <InlineMath math="d = L \sin \theta + r" /></li>
            <li>Force equations:
                <ul>
                    <li><InlineMath math="T \cdot \cos{\theta} = m \cdot g" /></li>
                    <li>< InlineMath math="T \cdot \sin{\theta} = \frac{mv^2}{d}" /></li>
                </ul>
            </li>
            <li>Velocity equtions: <InlineMath math="T \sin \theta = \frac{mv^2}{d} \rightarrow dT \sin \theta = mv^2 \rightarrow v = \sqrt{\frac{(L \sin \theta + r)T \sin \theta}{m}}" /></li>
        </ul>
    </div>

    const [isDiplomaPopupOpen, setIsDiplomaPopupOpen] = useState(false);

    const openDiplomaPopup = () => {
        setIsDiplomaPopupOpen(true);
    }

    const closeDiplomaPopup = () => {
        setIsDiplomaPopupOpen(false);
    }

    const diplomaPopupTitle = "OIFem 2021 Diploma";

    const diplomaPopupContent = <div>
        <div style={{ textAlign: 'center' }}><img src={diploma} alt="diagram" width="90%"/></div>
    </div>


    return <>
        <Popup isOpen={isFirstSummerJicOpen} onRequestClose={closeFirstSummerJic} title={firstSummerJicTitle} content={firstSummerJicContent} />
        <Popup isOpen={isSecondSummerJicOpen} onRequestClose={closeSecondSummerJic} title={secondSummerJicTitle} content={secondSummerJicContent} />
        <Popup isOpen={isThirdSummerJicOpen} onRequestClose={closeThirdSummerJic} title={thirdSummerJicTitle} content={thirdSummerJicContent} />
        <Popup isOpen={isFisidaboPopupOpen} onRequestClose={closeFisidaboPopup} title={fisidaboPopupTitle} content={fisidaboPopupContent} />
        <Popup isOpen={isDiplomaPopupOpen} onRequestClose={closeDiplomaPopup} title={diplomaPopupTitle} content={diplomaPopupContent} />

        <h1>Achievements</h1>
        <div id="jic">
			<h2><a href="https://www.fundaciocatalunya-lapedrera.com/en/youth-and-science">Youth and Science</a></h2>
            <p>
                Youth and Science program of the 'La Pedrera' Foundation is a gifted program aimed at talented young students in the 4th year 
                of compulsory secondary education (ESO) to promote their scientific careers. Every year many grade 10 (4th of ESO) students 
                apply their candidature to participate in the program and only 50 of them get selected. However, due to COVID 19,
                students from 2004 couldn't enter the program in 2020. That's why in 2021 there were 30 people selected that were born in 2004 
                and 30 that were born in 2005. The program is three years long. During three summers the candidates have the opportunity 
                to research. In addition to this, between the first and the second summer participants have to write a scientific article. 
                In the first year, all the participants go to MonNatura Pirineus in five different programs. The second summer is normally in a 
                national center and the third one in an international center.
            </p>
            <div className="overview">
                <div className="content">
                    <h3>Monnatura Pirineus</h3>
                    <h4>First summer (2021)</h4>
                    <h4>Catalan Pyrenees</h4>
                    <p>
                        I was one of 12 candidates selected to participate in the program: 'Looking from the Sky: How Does Climate Change 
                        Affect Our Forests?'.
                    </p>
                    <button className="read_more" onClick={openFirstSummerJic}>Read More</button>
                </div>

                <div className="content">
                    <h3><a href="http://essyi.hws.edu/">ESSYI</a></h3>
                    <h4>Second summer (2022)</h4>
                    <h4>Geneva, NY, USA</h4>
                    <p>
                        I was 1 of the 46 selected studies into the 2 week summer course in environmental science through scientific, social, 
                        economic, philosophical, ethical, and political perspectives.
                    </p>
                    <button className="read_more" onClick={openSecondSummerJic}>Read More</button>
                </div>

                <div className="content">
                    <h3><a href="https://www.lmh.ox.ac.uk/prospective-students/lmh-summer-programmes">LMH, Oxford</a></h3>
                    <h4>Third summer (2023)</h4>
                    <h4>Oxford, UK</h4>
                    <p>
                        This course is designed to introduce students to the basic concepts of machine learning (ML) and artificial 
						intelligence (AI) in a hands-on manner
                    </p>
                    <button className="read_more" onClick={openThirdSummerJic}>Read More</button>
                </div>
            </div>
        </div>

        <div id="oifem">
            <h2><a href="https://oifem.es/">OIFem</a></h2>
            <p>
                As mentioned in the <Link to="/" id="link">'About me'</Link> page, the last years of high school I participated in several Informatics olympiads. One of them is
				OIFem (<i>Olimpiada Informática Femenina</i>, Women's Spanish Informatics Olympiads). In 2021 OIFem had two phases: the classificatorials 
                and the final. Only the first 15 girls in the classificatorials could get into the final. I manage to finish the classificatorials inside 
                the top 15 and I reached the finals. 
            </p>
            <p className="read_more_inline" onClick={openDiplomaPopup}>See diploma</p>
        </div>

        <div>
            <h2><a href="https://fisidabo.upc.edu/ca">Fisidabo Hypatia</a></h2>
            <p>
                On the mountain of Collserola, in Barcelona, there is an amusement park, the Tibidabo. The FIsidabo project involves doing physics experiments 
				at Tibidabo. They offer four different activities:
                <ul>
                    <li>Fisidabo 2k</li>
                    <li>Fisidabo Hypatia</li>
                    <li>Fisidabo LABSHOW</li>
                    <li>Support for physics teachers</li>
                </ul>
            </p>

            <p>
                In Fisidabo Hypatia groups of between 3-5 students of Physics on their Baccalaureate or Physics Engineering present an idea of experiments to 
				Fisidabo. The presentation of the experiment includes the experimental process, necessary material, theoretical background, etc. The teams that
				would like to participate send their ideas. After that, they choose the ones they like the most. Those groups have the opportunity to go day to
				the amusement Park and also to do the experiment that they presented to Fisidabo.
            </p>

            <p>
                In my group, we were 3 people. The attraction we chose to experiment with is the Diavolo. The purpose was to answer the question: <b>How does the angle of
				inclination of the chair affect the Diavolo concerning his speed?</b>
            </p>
            <p className="read_more_inline" onClick={openFisidaboPopup}>Read More</p>
        </div>
    </>
}