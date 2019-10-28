import React from 'react';
import './styles.css';

class Contact extends React.Component{
        constructor(props){
            super(props);
                this.state= {online:false}     
        }   

                render(){
                    return(
                        <div className = "Contact">
                            <div><img className="avatar" src = {this.props.avatar} alt ={this.props.name}/> </div>
                            <div><h4 className='name'> {this.props.name}</h4>
                                <div className ='status' onClick={e => this.state.online ? this.setState({online:false}) : this.setState({online:true})}> 
                                    <span className={ this.state.online ? 'status-online' : 'status-offline'}> </span>
                                    <span className='status-text'> {this.state.online ? "online" : "offline"} </span>
                                </div>
                            </div>
                        </div>
                    )
        }
}
export default Contact