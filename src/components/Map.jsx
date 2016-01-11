import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {moveOnMap} from '../action-creators/moveOnMap';
import Location from './Location';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.mixins = [PureRenderMixin];
    }

    render() {
        let position = this.props.position;

        return <ul className="map">
            {this.props.map.map(
                (row, y) => {
                    return (<li key={"map-row"+y}>
                        <ul className="map-row">
                            {row.map(
                                (location, x) => {
                                    let k = location.position;
                                    return <Location type={location.type} key={k} active={k==position}
                                                     position={k} move={this.props.onMove}/>
                                    }
                                )
                                }
                        </ul>
                    </li>)
                    }
                )}
        </ul>;
    };
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        onMove: (position) => dispatch(moveOnMap(position))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Map)