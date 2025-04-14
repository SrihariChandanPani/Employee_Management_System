import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className="text-muted">Developed By Srihari Chandan Pani, Subrat Kumar Behera, Sambit Sarangi, Abinash Sahoo...</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
