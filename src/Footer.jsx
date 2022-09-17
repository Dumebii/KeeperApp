var date = new Date();
var specificDate = date.getFullYear();

function Footer() {
    return (<div>
        <footer>
            <p>
                Copyright {specificDate}
            </p>
        </footer>
    </div>)
}

export default Footer;