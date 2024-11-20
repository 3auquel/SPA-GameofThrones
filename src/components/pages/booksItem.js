import React from 'react';
import { useParams } from 'react-router-dom';
import GotService from '../../services/GotService';
import ItemDetails, { Field } from '../itemDetails';

const BooksItem = () => {
    const { id } = useParams(); 
    const gotService = new GotService();

    return (
        <ItemDetails itemId={id} getData={gotService.getBook}>
            <Field field="numberOfPages" label="Number of pages" />
            <Field field="publisher" label="Publisher" />
            <Field field="released" label="Released" />
        </ItemDetails>
    );
};

export default BooksItem;
