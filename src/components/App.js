import React from 'react';
import Counter from './counter'

class App extends React.Component{
    render(){
    return(
        <div className="container offset-4 card" style={{width: '40%'}}>
            <Counter />
        </div>
    )}
}
export default App;