import { Route, Routes} from 'react-router-dom';
import { FormStepe1 } from './pages/FormStep1';
import { FormStep2 } from './pages/FormStep2';
import { FormStep3 } from './pages/FormStep3';
import { FormStepe4 } from './pages/FormStep4';

export const Router =() =>{
    return(
           <Routes>
                <Route path='/' element={<FormStepe1/>}/>
                <Route path='/step2' element={<FormStep2/>}/>
                <Route path='/step3' element={<FormStep3/>}/>
                <Route path='/step4' element={<FormStepe4/>}/>
            </Routes> 
    );
}


