import { useNavigate } from 'react-router-dom'
import * as C from './styles';
import { useForm, FormActions} from '../../context/FormContext';
import {Theme} from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react';

export const FormStepe1 = ()=>{
    const navigate = useNavigate();
    const {state, dispatch} = useForm();//ele vai fazer a ponte para usar o context e os dados

    useEffect(()=>{
        dispatch({ //quando att a tela ele manda para context qual etapa ele esta
            type: FormActions.setCurrentStep,
            payload: 1
        });
    }, []);


    const handleNextStep = ()=>{
        if(state.name !== ''){
            navigate('/step2');//ele vai mudar de pag
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
    return(
        <Theme>
            <C.Container>
                <p>Passo 1/3 </p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>

                <hr />

                <label>
                    Seu nome Completo
                    <input
                        type="text" 
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                     />
                </label>
                <button onClick={handleNextStep} >Próximo</button>
           </C.Container>
        </Theme>
        
    );
}