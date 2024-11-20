import React, { Component } from 'react';
import styled from 'styled-components';
import GotService from '../../services/GotService';
import './itemDetails.css'

const CharDetailsContainer = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`;

const Title = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`;

const ListGroup = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    border: 1px solid #dee2e6;
`;

const Field=({item,field,label})=>{
    return(
        <ListItem>
        <span className="term">{label}</span>
        <span>{item[field]}</span>
    </ListItem>
    )

}
export{
    Field
}


export default class ItemDetails extends Component {
    GotService= new GotService();
    state={
        item:null
    }

    componentDidMount(){
        this.updateItem();
    }

    componentDidUpdate(prevProps){
        if(this.props.itemId!==prevProps.itemId){
            this.updateItem();
        }
    }
    updateItem(){
        const {itemId,getData}= this.props;
        if(!itemId){return;}

        getData(itemId)
        .then((item)=>{
            this.setState({item})
        })
        
    }
   
    
    render() {

        if(!this.state.item){
            return <span className='select-error'>Please selected a character</span>
        }
        const{item}=this.state;
        const{name}=item;

        return (
            <CharDetailsContainer>
                <Title>{name}</Title>
                <ListGroup>
                   {
                    React.Children.map(this.props.children,(child)=>{
                        return React.cloneElement(child,{item})
                    }
                    )
                   }
                </ListGroup>

            </CharDetailsContainer>
        );
    }
}
