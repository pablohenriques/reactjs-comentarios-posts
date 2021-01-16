import React from 'react';
import Post from './Post';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <Post title="Primeiro App em ReactJS"/>
                <Post title="Desenvolvido pelo Facebook"/>
                <Post title="Outros projetos abaixo"/>
            </div>
        );
    }
}