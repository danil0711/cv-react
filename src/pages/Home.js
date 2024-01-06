import Header from "../Components/Header/Header";

const Home = () => {
    return (
        <> 
        <Header></Header>
        <main className="section">
            <div className="container">
    
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>JavaScript, React.JS, HTML, CSS, Bootstrap5.0</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Backend</h2>
                            <p>Немного знаю Python(PyQT), C++, Java.</p>
                        </li>
                    </ul>
    
            </div>
        </main>
        </>
     );
}
 
export default Home;