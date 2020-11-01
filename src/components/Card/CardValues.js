import React, { Component } from 'react';
import Card from './Card'
import './Button.css'

class CardValues extends Component {
    constructor() {
        super();
        this.state =
        {
            serverData: [],
            fetching_from_server: false,
            pageLinmit: 2
        }
        this.timer = -1;


    }

    componentDidMount() {
        fetch('https://randomuser.me/api')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ serverData: [...this.state.serverData, ...responseJson.results] });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    loadMoreData = () => {
        this.setState({
            pageLinmit: this.state.pageLinmit + 1
        })
        if (this.state.pageLinmit <= 5) {
            this.setState({ fetching_from_server: true }, () => {
                clearTimeout(this.timer);
                this.timer = -1;
                this.timer = setTimeout(() => {
                    fetch('https://randomuser.me/api')
                        .then((response) => response.json())
                        .then((responseJson) => {
                            this.setState({ serverData: [...this.state.serverData, ...responseJson.results], fetching_from_server: false });
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                }, 1);
            });
        }
        else {
            this.setState({
                fetching_from_server: true, serverData: [],
                pageLinmit: 2
            }, () => {
                clearTimeout(this.timer);
                this.timer = -1;
                this.timer = setTimeout(() => {
                    fetch('https://randomuser.me/api')
                        .then((response) => response.json())
                        .then((responseJson) => {
                            this.setState({ serverData: [...this.state.serverData, ...responseJson.results], fetching_from_server: false });
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                }, 1);
            });

        }

    }

    render() {
        let card = null
        if (this.state.serverData.length > 0) {
            card = (
                <Card cardDetails={this.state.serverData} ></Card>
            )
        }
        return (
            <div>
                {card}
                <button data-test="load-more-button" className="loadmore-button" onClick={this.loadMoreData}>Load More</button>
            </div>

        );
    }
}

export default CardValues
