import { useNavigate } from 'react-router-dom'
import * as C from './styles';
import { useForm, FormActions} from '../../context/FormContext';
import {Theme} from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react';

export const FormStepe4 = ()=>{
    const navigate = useNavigate();
    const {state, dispatch} = useForm();//ele vai fazer a ponte para usar o context e os dados

    useEffect(()=>{
        if(state.name === ''){
            navigate('/');
        }else{
            dispatch({ //quando att a tela ele manda para context qual etapa ele esta
                type: FormActions.setCurrentStep,
                payload: 4
            });
        }
       
    }, []);


    const handleNextStep = ()=>{
        navigate('/')
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 0 
        });
        dispatch({
            type: FormActions.setName,
            payload: '' 
        });
        dispatch({
            type: FormActions.setEmail,
            payload: '' 
        });
        dispatch({
            type: FormActions.setGithub,
            payload: ''
        });

        
    }

    const dado= state.level;

    return(
        <Theme>
            <C.Container>
                <p>Dados do cadastro </p>
                <h1>{state.name}, seu cadastro foi realizado com sucesso!</h1>
                <p>Agora so aguradar sua vaga no seu email.</p>

                <hr />
                <div className='teka'>
                    <h1>Nome: </h1>
                    <h2>{state.name}</h2>
                    <hr />
                    <h1>E-mail: </h1>
                    <h2>{state.email}</h2>
                    <hr />
                    <h1>GitHub: </h1>
                    <h2>{state.github}</h2>
                    <hr />

                  
                 
                </div>
                {state.level === 0 &&
                     <div className='icon-area'>
                     🥳 Programador iniciante
                    </div>
                   
                    
                }
                  {state.level === 1 &&
                     <div className='icon-area'>
                     😎 Programador Experiente
                    </div>
                   
                    
                }
                
               
                <button onClick={handleNextStep} >Cadastrar</button>
           </C.Container>
        </Theme>
        
    );
}