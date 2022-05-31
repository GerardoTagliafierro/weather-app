import { useContext } from 'react';
import ThemeContext  from './ThemeContext';

const useTheme = () => {

    const {styles} = useContext(ThemeContext);

    return styles;
}

export default useTheme;