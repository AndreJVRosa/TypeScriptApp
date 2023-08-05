import React, { useState, useEffect, useRef } from "react";

//Image
import searchIcon from '../../assets/search-icon.svg'
//Styles
import { Wrapper, Content } from "./SearchBar.styles";

//Types
type Props = {
    setSearchTerm: React.Dispatch<React.SetStateAction<String>>
}

const SearchBar: React.FC<Props> = ({setSearchTerm}) => {
    const [state, setState] = useState('');
    const initial = useRef(true);

    initial.current

    useEffect(() => {
        if(initial.current){
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500)

        return () => clearTimeout(timer)
    }, [setSearchTerm, state])

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon}  alt="search-icon"/>
                <input
                type="text"
                placeholder="Search Movie"
                onChange={event => setState(event.currentTarget.value)}
                value={state}
                />
            </Content>
        </Wrapper>
    );
};

export default SearchBar;