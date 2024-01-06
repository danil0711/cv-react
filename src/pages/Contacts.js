const Contacts = () => {
    return ( 
    <main className="section">
        <div className="container contacts-section">
            <h1 className="title-1">Контакты</h1>

            <ul className="content-list">
                <li className="content-list__item">
                    <h2 className="title-2">Местоположение</h2>
                    <p>Екатеринбург, Россия</p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Telegram / WhatsApp</h2>
                    <p><a className="title-3" href="tel:+79122292165">+7 (912) 229-21-65</a></p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Email</h2>
                    <p><a className="title-3" href="mailto:danilmitsenko21@gmail.com">danilmitsenko21@gmail.com</a></p>
                </li>
            </ul>

    </div>
</main>
);
}
 
export default Contacts;