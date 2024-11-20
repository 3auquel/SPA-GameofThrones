import React, { Component } from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/GotService';
import { useNavigate } from 'react-router-dom';

// Обёртка для использования хука в классовом компоненте
function withNavigation(Component) {
    return (props) => {
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate} />;
    };
}

class BooksPage extends Component {
    GotService = new GotService();

    state = {
        hasError: false,
    };

    componentDidCatch(error) {
        console.error('Ошибка:', error);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorMessage />;
        }

        return (
            <ItemList
                onItemSelected={(itemId) => {
                    this.props.navigate(itemId);
                }}
                getData={this.GotService.getBooks}
                renderItem={({ name }) => name}
            />
        );
    }
}

export default withNavigation(BooksPage);
