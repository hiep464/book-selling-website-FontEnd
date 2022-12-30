import { useLocation } from 'react-router-dom';

function GlobalStyles({ children }) {
    const location = useLocation();

    // only load css for user page
    if (!location.pathname.startsWith('/admin')) import('./GlobalStyles.scss');

    return children;
}

export default GlobalStyles;
