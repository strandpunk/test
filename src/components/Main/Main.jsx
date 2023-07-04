import './Main.css';



function Main() {
    return (
        <div className="Main">
            <h2>Hanna</h2>
            <div className='BoxWrapper'>
                <div className='Box'>
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
                <div className='Box'>
                    <div className='Wrapper1'>
                        <div className='ImgBox' id='Border'></div>
                        <div className='ImgBox'>
                            <div id='Box2Text'>Hanna Heller is a fifteen-year-old girl who lives with her father, Erik, in rural northern Finland.
                                Since the age of two, Hanna has been trained by him, an ex-CIA operative from Germany, to be a skilled assassin.
                                He teaches her hand-to-hand combat and drills her in target shooting.
                                Erik knows a secret that cannot become public and Marissa Wiegler, a senior CIA officer, seeks to eliminate him. <br></br>
                                <div className='btn-wrapper'>
                                    <button className='btn' type='button'>Learn more</button>
                                </div>
                            </div>
                            <div id='Box2Img'><img id='Marissa' src="/MarissaWiegler2011.webp" alt="Marissa" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;