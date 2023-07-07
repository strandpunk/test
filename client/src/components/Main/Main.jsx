import { useState } from 'react';
import PopUp from '../PopUp/PopUp';
import './Main.css';





function Main() {

    const [popUpActive, setPopUpActive] = useState(false)

    return (
        <>
            <PopUp active={popUpActive} setActive={setPopUpActive}>
                <p>Hanna Heller is a fifteen-year-old girl who lives with her father, Erik, in rural northern Finland. Since the age of two, Hanna has been trained by him, an ex-CIA operative from Germany, to be a skilled assassin. He teaches her hand-to-hand combat and drills her in target shooting. Erik knows a secret that cannot become public and Marissa Wiegler, a senior CIA officer, seeks to eliminate him.
                    <br></br> <br></br>
                    Erik has trained Hanna with the intent to kill Marissa. One night, she tells him she is "ready" to face their enemies. Erik digs up a radio beacon that will alert the CIA to their presence. Although he warns Hanna that a confrontation with Marissa will be fatal for either her or Marissa, he leaves the final decision to her and she activates the beacon. Erik leaves, instructing her to meet him in Berlin.
                    <br></br> <br></br>
                    Hanna is seized by special forces and taken to an underground CIA complex where a suspicious Marissa sends a decoy to interrogate Hanna when she asks for her by name. While talking to the double, Hanna starts to cry and embraces her tightly, which makes her captors uneasy. They send guards to sedate her.
                    <br></br> <br></br>
                    As they enter the cell, Hanna kills the double along with some guards and escapes, discovering that she is in Morocco. Hanna meets Sebastian and Rachel, who are on a camper-van holiday with their children, Sophie and Miles, and stows away in the vehicle on a ferry to Spain, seeking to reach Berlin. The family is kind to her, and she and Sophie become friends: Hanna even tells her about the Berlin rendezvous and they kiss.
                    <br></br> <br></br>
                    Marissa hires Isaacs, a sadistic former agent, to capture Hanna while other agents are searching for Erik. She kills Hanna's maternal grandmother after failing to learn anything useful from her. Isaacs and two skinheads have discovered from the Moroccan hotelier with whom Hanna escaped and trail them. Cornering her and the family sometime down the road, Isaacs attacks but Hanna manages to escape after a vicious fight.
                    <br></br> <br></br>
                    Marissa interrogates the family and discovers from Miles that Hanna is heading to Berlin. The family is never seen again. Meanwhile, in Berlin, Erik fights off an attempted assassination and tries but fails to kill Marissa.
                    <br></br> <br></br>
                    Arriving at the rendezvous in an abandoned Berlin amusement park, Hanna meets Knepfler, an eccentric magician and friend of Erik's who lives there. Before Erik arrives, Marissa and Isaacs appear. Hanna escapes, but overhears comments that suggest Erik is not her biological father.
                    <br></br> <br></br>
                    Hanna then goes to her grandmother's empty apartment where she finds Erik, who admits he is not her biological father but loves her as his own. He explains that he once recruited pregnant women into a CIA program where their children's DNA was enhanced to create super-soldiers. After the project was shut down, its subjects – all except Hanna – were eliminated.
                    <br></br> <br></br>
                    Marissa and Isaacs arrive; Erik acts as a distraction to allow Hanna to escape. He kills Isaacs, but is shot dead by Marissa, who then returns to Knepfler's house in the abandoned amusement park and finds Hanna, who has just discovered Knepfler hanging dead upside-down, having been tortured to death by Isaacs. Hanna flees taking one of the arrows used to kill Knepfler.
                    <br></br> <br></br>
                    After Hanna flees, she is cornered by Marissa. In a final confrontation, Hanna turns her back to Marissa who shoots at her; but Hanna wounds Marissa by shooting an arrow at her. A now-staggering Marissa, pursued by Hanna, trips, leaving her badly injured. Hanna picks up Marissa's gun and uses it to kill her with two shots — a method she had previously used while hunting a deer at the film's beginning.
                </p>
            </PopUp>
            <div className="main">
                <h2>Hanna</h2>
                <div className='main__boxWrapper'>
                    <div className='main__box'>
                        <h2>Characters</h2>
                        <ul>
                            <li>Hanna Heller</li>
                            <li>Erik Heller</li>
                            <li>Johanna Zadek</li>
                            <li>Marissa Wiegler</li>
                            <li>Lewis</li>
                            <li>Walt</li>
                            <li>Bob</li>
                            <li>Burton</li>
                            <li>False Marissa</li>
                            <li>Sophie</li>
                            <li>Miles</li>
                            <li>Rachel</li>
                            <li>Sebastian</li>
                            <li>Moroccan Hotel Owner</li>
                            <li>Isaacs</li>
                            <li>Titch</li>
                            <li>Razor</li>
                            <li>Feliciano</li>
                            <li>Knepfler</li>
                        </ul>
                    </div>
                    <div className='main__box'>
                        <div className='Wrapper1'>
                            <div className='ImgBox' id='Border'></div>
                            <div className='ImgBox'>
                                <div id='Box2Text'>
                                    <h2>Plot</h2>
                                    <p>Hanna Heller is a fifteen-year-old girl who lives with her father, Erik, in rural northern Finland.
                                        Since the age of two, Hanna has been trained by him, an ex-CIA operative from Germany, to be a skilled assassin.
                                    </p> <br></br>
                                    <div className='btn-wrapper'>
                                        <button className='open-btn' onClick={() => setPopUpActive(true)}>Learn more</button>
                                    </div>
                                </div>
                                <div id='Box2Img'><img id='Marissa' src="/MarissaWiegler2011.webp" alt="Marissa" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    );
}

export default Main;