import Colaborador from '../Colaborador';
import './Time.css';
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
    return (
        props.colaboradores.length > 0 && <section className='time' style={{backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(props.cor, 0.6)}}>
            <input onChange={evento => props.mudarCor(evento.target.value, props.id)} value={props.cor} type='color' className='input-cor' />
            <h3 style={{borderBottomColor: props.cor}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( (colaborador, indice) => {
                return <Colaborador key={indice} id={colaborador.id} corDeFundo={props.cor} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} aoDeletar={props.aoDeletar} favorito={colaborador.favorito} aoFavoritar={props.aoFavoritar}/>
                })}
            </div>
        </section>
    )
}

export default Time;