import PropTypes from 'prop-types'
import { FilterBtn } from './FilterButton.styled';

export function FilterButton({ options, onFilter}) {
    
    return ( 
        
        options.map(option => (
            <FilterBtn
                key={option}
                onClick={() => onFilter(option)}
                style={{ marginTop: '100px' }}
            >{option}</FilterBtn>
        ))
     );
}

FilterButton.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onFilter: PropTypes.func.isRequired
}