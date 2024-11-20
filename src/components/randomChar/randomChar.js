import React, {Component} from 'react';
import styled from 'styled-components';
import GotService from '../../services/GotService';
import Spinner  from '../spinner';
import ErrorMessage from '../errorMessage';



const RandomBlock = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
  border-radius: 10px;
`;

const Title = styled.h4`
  margin-bottom: 20px;
  text-align: center;
`;

const ListGroup = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
`;

const Term = styled.span`
  font-weight: bold;
`;
export default class RandomChar extends Component {
   

    GotService=new GotService();
    state={
        char:{},
        loading: true,
        error:false
    }
    componentDidMount(){
      this.updateChar();
       this.timerId= setInterval(this.updateChar,5500);
    }
    componentWillUnmount(){
      clearInterval(this.timerId);
    }
    onCharLoaded=(char)=>{
        this.setState({char,
            loading:false
        })
    }
    onError=(err)=>{
        this.setState({
            error:true,
            loading:false
        })

    }


    updateChar=()=>{
        const id=Math.floor(Math.random()*1000+25);
       
        
        this.GotService.getCharacter(id)
        .then(this.onCharLoaded)
        .catch(this.onError);
    }
    render(){
      

        const{char,loading,error}=this.state;
        const errorMessage = error?<ErrorMessage/>:null;
        const spinner = loading?<Spinner/>:null;
        const content = !(loading|| error)?<View char={char}/>:null;
        
        return (
            <RandomBlock>
            {errorMessage}
            {spinner}
            {content}
            </RandomBlock>
          );
    }
  
}


const View=({char})=>{
    const{name,gender,born,died,culture}=char;
    return(
        <>
        <Title>Random Character: {name}</Title>
              <ListGroup>
                <ListItem>
                  <Term>Gender</Term>
                  <span>{gender}</span>
                </ListItem>
                <ListItem>
                  <Term>Born</Term>
                  <span>{born}</span>
                </ListItem>
                <ListItem>
                  <Term>Died</Term>
                  <span>{died}</span>
                </ListItem>
                <ListItem>
                  <Term>Culture</Term>
                  <span>{culture}</span>
                </ListItem>
              </ListGroup>
        </>
    )
}
