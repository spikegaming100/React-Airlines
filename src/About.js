import {Component} from "react";
import axios from "axios";

class About extends Component {
    state={
        data:[]
    }
    componentDidMount() {
        axios.get("http://launcher.pentacraft.ru:1025/bootstrap").then(data=> {
            this.setState({data:data.data});
        }).catch(error=> {console.error("Unable to get data from server!");})
    }

    render() {

        const {data} = this.state;
        return (
            <>
                {data.map((item, index) => (
                    <>
                        <div key={index}>{item.name}</div>
                        <div key={index}>{item.path}</div>
                        <div key={index}>{item.hash}</div>
                    </>
                ))}
            </>
        )
    }
}

export default About;