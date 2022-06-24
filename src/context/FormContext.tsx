
import React, {createContext, ReactNode, useContext, useReducer} from 'react'; //um cria o contexto outro cria o contexto e outro usa e cria o reducer

//types
type State = {
    currentStep: number;
    name: string;
    level: 0 | 1; //pq so tem duas opçoes
    email: string;
    github: string;
};

type Action = {
    type: FormActions;
    payload: any;
};

type ContextTyoe = {
    state: State;
    dispatch: (action: Action) => void; //é uma função q n retorna nada e tem action como parametro
}

type FormProviderProps = {
    children: ReactNode
}



const initialData: State = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: ''
}


//Context
const FormContext = createContext<ContextTyoe | undefined>(undefined);//ele precisa de valor inicial e passodo que é o type context ou undefined

//Reducer 
export enum FormActions {//açoes que podem ser ultilizadas quando der o dispatch
    setCurrentStep,//qual etapa esta
    setName,//nome
    setLevel,//o level
    setEmail,//email
    setGithub//gituhub
}

const formReducer = (state: State, action: Action) =>{ //ela recebe state q é os nossos dados e action q é a ação
    switch(action.type){ //reducer são as açãoes que mudam context
        case FormActions.setCurrentStep://type é a ação q quer executar 
            return {...state, currentStep: action.payload};//payload é os dados que vão executados q no caso é dado que vai ser trocado antigo para o novo que foi enviado
        case FormActions.setName:
            return {...state, name: action.payload};
        case FormActions.setLevel:
            return {...state, level: action.payload};
        case FormActions.setEmail:
            return {...state, email: action.payload};
        case FormActions.setGithub:
            return {...state, github: action.payload};
        default://caso mandar uma ação q n tem retorna o state normal
            return state;     
    }
}

//Provider
export const FormProvider = ({children}: FormProviderProps)   =>{// ele cria ambiente inteiro do site e coloca dentro do provider para oa dados de comunicar em toda aplicação
    const [state, dispatch] = useReducer(formReducer, initialData) //ele usa o reducer e ele passa q o primeiro parametro é o reducer e segundo é os dados iniciais que vem quando inicia o sitema
    // state tem o dados e dispatch tem uma função que executa as ações

    const value = {state, dispatch};

    return (
        <FormContext.Provider value={value}> 
            {children}
        </FormContext.Provider>
    );

}


//Context Hook
export const useForm = () =>{
    const context = useContext(FormContext);
    if(context === undefined){ //se caso vir sem nada, q dizer que ele n esta dentro do provider e n tem acesso aos dados
        throw new Error('useForm precisa ser usado dentro do FormProvider');
    }
        return context;
};