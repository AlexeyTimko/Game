import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Location extends React.Component {
    constructor(props) {
        super(props);
        this.mixins = [PureRenderMixin];
    }

    render() {
        let type = 'location ';
        switch (this.props.type) {
            case 0:
                type += 'road';
                break;
            case 1:
                type += 'wall';
                break;
            default:
                type += 'wall';
        }
        if (this.props.active) {
            type += ' active';
        }
        return (<li className={type} onClick={() => this.props.move(this.props.position)}></li>);
    }

;
}