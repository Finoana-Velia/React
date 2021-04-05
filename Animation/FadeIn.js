import React from 'react';
import { Animated,Dimension } from 'react-native';

class FadeIn extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            positionLeft : new Animated.Value(Dimension.get('window').width)
        };
    }

    componentDidMount(){
        Animated.spring(
            this.state.positionLeft,
            {
                toValue : 0
            }
        ).start()

    }

    render(){
        return (
            <Animated.View
                style = {{ left : this.state.positionLeft }}
            >
                {this.props.children}
            </Animated.View>
        )
    }
}

export default FadeIn;