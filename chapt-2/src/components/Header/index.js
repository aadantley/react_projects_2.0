import './styles.css';

export default function Header({logo}) {
    return (
        <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>Eidt <code>src/App.js</code> and save to reload.</p>
            <a
                className='App-link'
                href='https://react.js.org'
                target='_blank'
                rel='noopener noreferrer'
            >learn React </a>
        </header>
    )

}