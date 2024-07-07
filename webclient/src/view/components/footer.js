import { Divider } from 'primereact/divider';

function Footer() {
    return (
        <><div className="spaceVertical"></div><div className="spaceVertical"></div>
        <Divider />
        <div className="spaceVertical"></div><div className="spaceVertical"></div>
        <footer>
            <div className='footer'>
                <p>Follow us on</p>
                <a href='https://github.com/mikael-bth/vteam09'><i className="pi pi-facebook"></i></a>
                <a href='https://github.com/mikael-bth/vteam09'><i className="pi pi-instagram"></i></a>
                <a href='https://github.com/mikael-bth/vteam09'><i className="pi pi-twitter"></i></a>
                <a href='https://github.com/mikael-bth/vteam09'><i className="pi pi-github"></i></a>
                <p className='copyright'>2023 &copy; vteam09, All rights reserved.</p>
            </div>
        </footer></>
    );
}
export default Footer;