import { useNavigate, Link  } from 'react-router-dom'
import * as C from './styles';
import { useForm, FormActions} from '../../context/FormContext';
import {Theme} from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react';
import {SelectOptions} from '../../components/SelectOption'

export const FormStep2 = ()=>{
    const navigate = useNavigate();
    const {state, dispatch} = useForm();//ele vai fazer a ponte para usar o context e os dados

    useEffect(()=>{
        if(state.name ===  ''){ //se caso n tiver nenhum nome digitado ele vai direto pra pagina principal
             navigate('/'); 
        }else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
        }
      
    }, []);


    const handleNextStep = ()=>{
        if(state.name !== ''){
            navigate('/step3');//ele vai mudar de pag
        }else{
            alert('Preencha os dados.')
        }
        
    }
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>)=>{//essa função vai passar o valor digitado para uma action do dispatch no caso o setName para alterar seu valor
        dispatch({ 
            type: FormActions.setName,
            payload: e.target.value
        });
    }

    const setLevel = (level: number) => {
        dispatch({ 
            type: FormActions.setLevel,
            payload: level
        });
    }

    return(
        <Theme>
            <C.Container>
                <p>Passo 2/3 </p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>

                <hr />

                <SelectOptions
                    title="Sou iniciante"
                    description="Comecei a programar há menos de 2 anos"
                    icon="🥳"
                    selected={state.level === 0} // se for 0 vai dar true
                    onClick={()=> setLevel(0)}
                />
                <SelectOptions
                    title="Sou Programdor"
                    description="Já programo há 2 anos ou mais"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={()=> setLevel(1)}
                />


                <Link to='/' className='backButton' >Voltar</Link>
                <button onClick={handleNextStep} >Próximo</button>
           </C.Container>
        </Theme>
        
    );
}