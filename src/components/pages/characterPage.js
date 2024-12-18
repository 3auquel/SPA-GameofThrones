import React, { Component } from 'react';
import ItemList from '../itemList';
import ItemDetails, { Field } from '../itemDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/GotService';
import RowBlock from '../rowBlock';

export default class CharacterPage extends Component {
    GotService = new GotService();

    state = {
        selectedChar: null,
        hasError: false
    };

    componentDidCatch(error) {
        console.log('Ошибка:', error);
        this.setState({ hasError: true });
    }

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        });
    };

    render() {
        if (this.state.hasError) {
            return <ErrorMessage />;
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.GotService.getAllCharacters}
                renderItem={({ name, gender }) => `${name} (${gender})`}
            />
        );

        const itemDetails = (
            <ItemDetails
                itemId={this.state.selectedChar}
                getData={this.GotService.getCharacter}
            >
                <Field field='gender' label='Gender' />
                <Field field='born' label='Born' />
                <Field field='died' label='Died' />
                <Field field='culture' label='Culture' />
            </ItemDetails>
        );

        return <RowBlock left={itemList} right={itemDetails} />;
    }
}
