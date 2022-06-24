import { Link, useNavigate } from 'react-router-dom'
import * as C from './styles';
import { useForm, FormActions} from '../../context/FormContext';
import {Theme} from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = ()=>{
    const navigate = useNavigate();
    const {state, dispatch} = useForm();//ele vai fazer a ponte para usar o context e os dados

    useEffect(()=>{
        if(state.name ===  ''){ //se caso n tiver nenhum nome digitado ele vai direto pra pagina principal
             navigate('/'); 
        }else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
      
    }, []);

    const handleNextStep = ()=>{
        if(state.email !== '' && state.github !== ''){
           console.log(state);
           navigate('/step4');
        }else{
            alert('Preencha os dados.')
        }
        
    }
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>)=>{//essa função vai passar o valor digitado para uma action do dispatch no caso o setName para alterar seu valor
        dispatch({ 
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }
    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>)=>{//essa função vai passar o valor digitado para uma action do dispatch no caso o setName para alterar seu valor
        dispatch({ 
            type: FormActions.setGithub,
            payload: e.target.value
        });
    }

    return(
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha oom seus contatos  para conseguirmos entrar em contato.</p>

                <hr />

                <label>
                    Qual seu e-mail?
                    <input
                        type="email" 
                        value={state.email}
                        onChange={handleEmailChange}
                     />
                </label>
                <label>
                    Qual seu GitHub?
                    <input
                        type="url" 
                        value={state.github}
                        onChange={handleGithubChange}
                     />
                </label>
                <Link to='/step2' className='backButton' >Voltar</Link>
                <button onClick={handleNextStep} >Finalizar Cadastro</button>
           </C.Container>
        </Theme>
        
    );
}