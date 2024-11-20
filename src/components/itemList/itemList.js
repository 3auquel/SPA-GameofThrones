import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';

const ItemListContainer = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const ListItem = styled.li`
    cursor: pointer;
    padding: 10px 15px;
    border: 1px solid #dee2e6;
    margin-bottom: -1px; 
    background-color: #fff;
    &:hover {
        background-color: #f8f9fa;
    }
`;

const ItemList = ({ getData, onItemSelected, renderItem }) => {
    const [itemList, setItemList] = useState(null);

    
    useEffect(() => {
        getData()
            .then((data) => setItemList(data))
            .catch((error) => console.error('Ошибка загрузки данных:', error));
    }, [getData]);

   
    const renderItems = (arr) => {
        return arr.map((item) => {
            const { id } = item;
            const label = renderItem(item);
            return (
                <ListItem key={id} onClick={() => onItemSelected(id)}>
                    {label}
                </ListItem>
            );
        });
    };

    if (!itemList) {
        return <Spinner />;
    }

    const items = renderItems(itemList);

    return <ItemListContainer>{items}</ItemListContainer>;
};

export default ItemList;
