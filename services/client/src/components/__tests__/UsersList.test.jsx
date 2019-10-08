import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import UsersList from '../UsersList';

const users = [
    {
        'active': true,
        'email': 'hlecter@greattaste.com',
        'id': 1,
        'username': 'hannibal'
    },
    {
        'active': true,
        'email': 'pennywise@dancingclown.com',
        'id': 2,
        'username': 'pennywise'
    } 
]; 

test('UserList renders properly', () => {
    const wrapper = shallow(<UsersList users={users}/>);
    const element = wrapper.find('h4');
    expect(element.length).toBe(2);
    expect(element.get(0).props.children).toBe('hannibal');
});

test('UsersList renders a snapshot properly', () => {
    const tree = renderer.create(<UsersList users={users}/>).toJSON();
    expect(tree).toMatchSnapshot();
});