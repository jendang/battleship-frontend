import React,{Component} from 'react';
import './Home.css'
import {Link} from 'react-router-dom'



class Home extends Component {
    //state = {  }
    render() { 
        return ( 
            <div>
                <Link to={'/login'}><button className="Button">Login</button></Link>
                <Link to={'/signup'}><button className="Button">Signup</button></Link>

            </div>


        );
    }
}
 
export default Home;