import './App.css';
import Button from './components/Button/Button';
// import Card, { SuperCard } from './components/Card';
import Card from './components/Card';
import Spacer from './components/Spacer';

function App() {
    return (
        <>
            <section>
                <h1>BOTOES</h1>
                <Button label="🚀 vamos primary" variant={'primary'} />

                <Spacer size="1rem" />

                <Button label="🚀 vamos secondary" variant="secondary" />
                <Spacer size="16px" />
                <Button
                    onClick={() => {
                        console.log('ola');
                        alert('ola');
                    }}
                    disabled={true}
                    label="🚀 vamos"
                    variant="secondary"
                />
            </section>
            <Spacer size="4rem" />

            <section>
                <Card corDoFundo="gray">
                    <h1>TESTE</h1>
                </Card>
                <Card corDoFundo="green">
                    <h1>TESTE</h1>
                </Card>
                <Card corDoFundo="blue">TESTE</Card>
            </section>
            {/* <SuperCard
                corTitulo="royalblue"
                corBody={'green'}
                CorFooter={'gray'}
                bgColor="green"
                titulo={'titulo'}
                footerMessage={'mensagem footer'}>
                <h1>TEXTO qualquer</h1>
            </SuperCard> */}
        </>
    );
}

export default App;
