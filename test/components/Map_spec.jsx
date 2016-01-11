/**
 * Created by Timko on 11.01.2016.
 */
import React from 'react/addons';
import Map from '../../src/components/Map';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag} = React.addons.TestUtils;

describe('Voting', () => {

    it('renders a map', () => {
        const component = renderIntoDocument(
            <Map localions={[0, 1]} />
        );
    });
    const uls = scryRenderedDOMComponentsWithTag(component, 'ul');

    expect(uls.length).to.equal(3);
    expect(uls[1].class).to.equal('road');
});