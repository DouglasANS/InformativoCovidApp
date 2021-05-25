import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import { Welcome } from '../pages/welcome';
import { InformativoCovid } from '../pages/informativoCovid';
import { Sintomas } from '../pages/sintomas';
import { AoChegarEmCasa } from '../pages/aoChegarEmCasa';
import { DisqueSaude } from '../pages/disqueSaude';
import { Transmissao } from '../pages/transmissao';
import { Precaucao } from '../pages/precaucao';

const stack = createStackNavigator()

const AppRoutes: React.FC = () => (
    <stack.Navigator  headerMode='none'>

        
    <stack.Screen 
        name="Welcome"
        component={Welcome}
    />

    <stack.Screen 
        name="InformativoCovid"
        component={InformativoCovid}
    />

    <stack.Screen 
        name="Sintomas"
        component={Sintomas}
    />

    <stack.Screen 
        name="AoChegarEmCasa"
        component={AoChegarEmCasa}
    />

    <stack.Screen 
        name="DisqueSaude"
        component={DisqueSaude}
    />

    <stack.Screen 
        name="Transmissao"
        component={Transmissao}
    />

    <stack.Screen 
        name="Precaucao"
        component={Precaucao}
    />

    </stack.Navigator>
)

export default AppRoutes;