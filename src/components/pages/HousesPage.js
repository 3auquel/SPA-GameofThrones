import React, { Component} from 'react';
import ItemList from '../itemList';
import ItemDetails,{Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/GotService';
import RowBlock from '../rowBlock';






export default class HousesPage extends Component{
    GotService = new GotService();

    state={
        selectedHouse:null,
        hasError:false
    }
    componentDidCatch(error){
        console.log('ошибка',error)
        this.setState({hasError:true})
       }
       onItemSelected=(id)=>{
        this.setState({
            selectedHouse:id
        })

    }
    
    render(){
        if (this.state.hasEerror){
            return <ErrorMessage/>
        }
        const itemList =(
            <ItemList 
            onItemSelected={this.onItemSelected}
                 getData={this.GotService.getAllHouses}
                 renderItem={({name})=>name }/>
        )


        const itemDetails =  (
            <ItemDetails
             itemId={this.state.selectedHouse}
             getData={this.GotService.getHouse}>
            <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                <Field field='ancestralWeapons' label='Ancestral Weapons'/>
            </ItemDetails>
            )
        return(

           <RowBlock left={itemList} right={itemDetails}/>
        )

        
    }
}