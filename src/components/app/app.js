import React, { Component} from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {CharacterPage,HousesPage,BooksPage,BooksItem} from '../pages';
import GotService from '../../services/GotService';
import './app.css';



export default class App extends Component {
    GotService=new GotService();
    state={
        showRandomChar:true,
        error:false

    }
   componentDidCatch=()=>{
    console.log('error');
    this.setState({
        error:true
    })
   }
    toggleRandomChar = () => {
        this.setState((state)=>{
            return{
            showRandomChar:!state.showRandomChar}
        })
       
    };
    
 




render(){
    const char=this.state.showRandomChar?<RandomChar/>:null;
    if (this.state.error){
        return <ErrorMessage/>
    }
    return (
        <Router>
            <div className='app'>
            <Container>
                <Header />
            </Container>
            <Container>
               
                <Row>
                    <Col lg={{ size: 5, offset: 0 }}>
                        {char}
                        <button className='buttonchange'
                    onClick={this.toggleRandomChar} 
                    style={{
                        marginBottom: '20px', 
                        padding: '10px 20px', 
                        cursor: 'pointer'
                    }}>
                    {this.state.showRandomChar ? 'Hide RandomChar' : 'Show RandomChar'}
                </button>
                    </Col>
                    
                </Row>
                <Routes>
                
                <Route path='/' exact element={()=> <h1>Welcome to page</h1>}/>
                <Route path='/characters' Component={CharacterPage}/>
                <Route path='/houses' Component={HousesPage}/>
                <Route path='/books' exact Component={BooksPage}/>
                <Route path="/books/:id" element={<BooksItem />} />
                 </Routes>
               
            </Container>
        </div>
        </Router>
        
    );

}
    
};
 

